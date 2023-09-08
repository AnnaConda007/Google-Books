import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react"; 
import styles from "./SearchInput.module.css";
import TitleText from "../title-text/TitleText";
import { useNavigate, useLocation } from "react-router-dom";
import useFetchBooks from '../../../hooks/useFetchBooks';

const SearchIBookInput: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [inputValue, setInputValue] = useState<string>("");
  const { fetchBooks } = useFetchBooks(inputValue);

  const handleNavigateToHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = async (e: React.KeyboardEvent) => {
    if (!inputValue) return;
    handleNavigateToHome()
    if (e.key === "Enter") {
      await fetchBooks();
    }
  };
  const handleSearchClick = async () => {
    if (!inputValue) return;
    handleNavigateToHome()
    await fetchBooks();
  };

  return (
    <div className={styles.InputContainer}>
      <TitleText />
      <TextField
        className={styles.TextField}
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
        inputProps={{
          style: { paddingLeft: "10px" },
        }}
      />
    </div>
  );
};

export default SearchIBookInput;
