import CategoryFilterDropdown from './category-filter-dropdown/CategoryFilterDropdown';
import RelevanceSorterDropdown from './sort-select/SortSelect';
import styles from "./DropdownLists.module.css"

 const DropdownLists: React.FC = () => {

  return (
    <div className={styles.container}>
    <div className={styles.DropdownList}>
      <CategoryFilterDropdown />
    </div>
    <div className={styles.DropdownList}>
    <RelevanceSorterDropdown />
    </div>

  </div>
  );
};

export default DropdownLists;
