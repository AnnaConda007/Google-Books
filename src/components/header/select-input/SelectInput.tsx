import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { filteredByCategories } from "../../../redux/BooksSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import { BookCategories } from "../../../../enums";

const SelectInput: React.FC = () => {
  const dispatch = useDispatch();
  const categories: Array<string> = Object.values(BookCategories);
  const [selectedСategory, setSelectedСategory] = useState<string>(
    categories[0]
  );
  const books = useSelector((state: RootStoreState) => state.books);

  const handleChange = (e: SelectChangeEvent<string>) => {
    setSelectedСategory(e.target.value);
    dispatch(filteredByCategories({ category: e.target.value }));
  };

  return (
    <>
      <FormControl fullWidth variant="outlined">
        <InputLabel>Categories</InputLabel>
        <Select
          value={selectedСategory}
          onChange={handleChange}
          label="Categories"
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <span>
        *******{" "}
        {books.filteredBooks.map((book) => {
          return <p>{book.volumeInfo.title} </p>;
        })}
      </span>
    </>
  );
};

export default SelectInput;
