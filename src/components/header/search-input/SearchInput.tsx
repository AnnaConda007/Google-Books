import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { getBookData } from "../../utils/getBookData";
import { IBook, setBooks } from "../../../redux/BooksSlice";
import { useDispatch } from "react-redux";

const SearchInput: React.FC = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>("");

  const getBookAndSetStateBooks = async () => {
    if (inputValue === "") return;
    const books: Array<IBook> | void = await getBookData(inputValue);
    if (!books) {
      alert("Ошибка при получении данных");
      console.error;
      return;
    }
    dispatch(setBooks(books));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      await getBookAndSetStateBooks();
    }
  };
  const handleSearchClick = async () => {
    await getBookAndSetStateBooks();
  };

  return (
    <>
      <TextField
        id="standard-basic"
        value={inputValue}
        autoComplete="off"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="Поиск" onClick={handleSearchClick}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default SearchInput;
