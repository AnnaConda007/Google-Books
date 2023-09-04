import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { getBookData } from "../../utils/getBookData";

const SearchInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      getBookData(inputValue);
    }
  };

  const handleSearchClick = () => {
    getBookData(inputValue);
  };

  return (
    <>
      <TextField
        id="standard-basic"
        value={inputValue}
        autoComplete="off"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearchClick}>
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
