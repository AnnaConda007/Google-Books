import SearchIBookInput from "./search-book-input/SearchInput";
import DropdownLists from "./dropdown-lists/dropdownLists";
const Header: React.FC = () => {
  return (
    <>
      <SearchIBookInput />
      <DropdownLists />
    </>
  );
};

export default Header;
