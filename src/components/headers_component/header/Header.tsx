import styles from './Header.module.css'
import GroupedDropDownContainer from '../dropdown/grouped-drop-down-container/GroupedDropDownContainer'
import SearchIBookInput from '../search-book-input/SearchInput'
const Header: React.FC = () => {
  return (
    <header className={styles.Header}>
      <SearchIBookInput />
      <GroupedDropDownContainer />
    </header>
  )
}

export default Header
