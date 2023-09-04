import SearchInput from "./search-input/SearchInput";
import SelectInput from "./select-input/SelectInput";
import SortSelect from "./sort-select/SortSelect";
const Header: React.FC = () => {
  return (
    <>
      <SearchInput />
      <SelectInput />
      <SortSelect />
    </>
  );
};

export default Header;
