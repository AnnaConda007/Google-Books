import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { getBookDataAsync } from "../../../utils/getBookData";
import { setBooks, resetBook } from "../../../redux/BooksSlice";
import { useDispatch, batch } from "react-redux";
import {
  setStartIndexForNextLoadBook,
  setTitleBook,
  resetStartIndexForNextLoadBook,
  setTotalItemsBook,
} from "../../../redux/BooksSlice";
import { IBookData } from "../../../utils/getBookData";
import styles from"./SearchInput.module.css"
import TitleText from './title-text/TitleText';
import { useNavigate, useLocation } from "react-router-dom";

const SearchIBookInput: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const location = useLocation();
  const [inputValue, setInputValue] = useState<string>("");

  const fetchBooks = async (): Promise<void> => {
    const booksData: IBookData | null = await getBookDataAsync(inputValue);
    if (!booksData) return;
    updateBooksInStore(booksData);
  };

  const updateBooksInStore = async (downloadedBooks: IBookData) => {
    batch(() => {
      dispatch(resetBook());
      dispatch(resetStartIndexForNextLoadBook());
      dispatch(setBooks(downloadedBooks.books));
      dispatch(setTotalItemsBook(downloadedBooks.totalItems));
      dispatch(setStartIndexForNextLoadBook());
      dispatch(setTitleBook(inputValue));
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = async (e: React.KeyboardEvent) => {

    if (!inputValue) return;
    if (e.key === "Enter") {
      if (location.pathname !== "/") {
        navigate("/");
      }
      await fetchBooks();
    }
  };
  const handleSearchClick = async () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    if (!inputValue) return;
    await fetchBooks();
  };

  return (
    <div className={styles.InputContainer}>
      <TitleText/>
      <TextField className={styles.TextField} 
        id="standard-basic"
        value={inputValue}
        autoComplete="off"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" >
              <IconButton  aria-label="Поиск" onClick={handleSearchClick}>
                <SearchIcon  />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchIBookInput;
