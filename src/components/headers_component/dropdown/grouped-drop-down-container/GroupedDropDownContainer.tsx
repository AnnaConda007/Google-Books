import styles from './GroupedDropDownContainer.module.css'
import CategoryFilterDropdown from '../category-filter-dropdown/CategoryFilterDropdown'
import RelevanceSorterDropdown from '../sort-select-dropdown/SortSelect'

const GroupedDropDownContainer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.DropdownList}>
        <CategoryFilterDropdown />
      </div>
      <div className={styles.DropdownList}>
        <RelevanceSorterDropdown />
      </div>
    </div>
  )
}

export default GroupedDropDownContainer
