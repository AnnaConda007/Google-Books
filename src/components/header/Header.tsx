import SearchIBookInput from "./search-book-input/SearchInput";
import DropdownLists from './dropdown-lists/DropdownLists';
import styles from "./Header.module.css"
const Header: React.FC = () => {
  return (
    <header className={styles.Header}>
      <SearchIBookInput />
      <DropdownLists />
    </header>
  );
};

export default Header;
