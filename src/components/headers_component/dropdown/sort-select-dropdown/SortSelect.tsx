import {
  Select,
  MenuItem, 
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setSort } from "../../../../redux/BooksSlice";
import { useState } from "react";
import { SortType } from "../../../../../enums";

const RelevanceSorterDropdown: React.FC = () => {
  const dispatch = useDispatch();
  const sortType: Array<string> = Object.values(SortType);
  const [currentSortMethod, setCurrentSortMethod] = useState(sortType[0]);


  const handleChange = (e: SelectChangeEvent<string>) => {
    const selectedSort: string = e.target.value;
    dispatch(setSort(selectedSort as SortType));   
    setCurrentSortMethod(selectedSort);
};

  return (
    <>
      <InputLabel style={{ width: "40%", color: "white" }}>Sorting by</InputLabel>
      <Select
        value={currentSortMethod}
        onChange={handleChange}
        label="Sorting by"
        fullWidth 
            
      >
        {sortType.map((sort) => (
          <MenuItem    key={sort} value={sort}>
            {sort}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default RelevanceSorterDropdown;
