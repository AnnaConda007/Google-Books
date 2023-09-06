import SearchIBookInput from "./search-book-input/SearchInput";
import CategoryFilterDropdown from "./category-filter-dropdown/CategoryFilterDropdown";
import RelevanceSorterDropdown from './sort-select/SortSelect';
const Header: React.FC = () => {
  return (
    <>
      <SearchIBookInput />
      <CategoryFilterDropdown />
      <RelevanceSorterDropdown />
    </>
  );
};

export default Header;
