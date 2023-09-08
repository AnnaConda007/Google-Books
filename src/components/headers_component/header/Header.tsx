import SearchIBookInput from "../search-book-input/SearchInput";
import GroupedDropDownContainer from '../dropdown/grouped-drop-down-container/GroupedDropDownContainer';
import styles from "./Header.module.css";
const Header: React.FC = () => {
  return (
    <header className={styles.Header}>
      <SearchIBookInput />
      <GroupedDropDownContainer />
    </header>
  );
};

export default Header;
