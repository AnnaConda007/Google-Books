import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setSort } from "../../../redux/BooksSlice";
import { useState } from "react";
import { SortType } from "./../../../../enums";

const RelevanceSorterDropdown: React.FC = () => {
  const dispatch = useDispatch();
  const sortType: Array<string> = Object.values(SortType);
  const [currentSortMethod, setCurrentSortMethod] = useState(sortType[0]);

  const handleChange = (e: SelectChangeEvent<string>) => {
    dispatch(setSort(e.target.value));
    setCurrentSortMethod(e.target.value);
  };

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel>Sorting by</InputLabel>
      <Select
        value={currentSortMethod}
        onChange={handleChange}
        label="Sorting by"
      >
        {sortType.map((sort) => (
          <MenuItem key={sort} value={sort}>
            {sort}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default RelevanceSorterDropdown;
