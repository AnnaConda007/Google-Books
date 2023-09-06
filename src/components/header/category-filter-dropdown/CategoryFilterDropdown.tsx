import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { filterByCategory } from "../../../redux/BooksSlice";
import { useDispatch } from "react-redux";
import { BookCategories } from "../../../../enums";

const CategoryFilterDropdown: React.FC = () => {
  const dispatch = useDispatch();
  const categories: Array<BookCategories> = Object.values(BookCategories);
  const [selectedСategory, setSelectedСategory] = useState<string>(
    categories[0]
  );

  const handleChange = (e: SelectChangeEvent<string>) => {
    setSelectedСategory(e.target.value);
    dispatch(filterByCategory(e.target.value));
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
    </>
  );
};

export default CategoryFilterDropdown;
