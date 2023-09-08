import Button from '@mui/material/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import styles from './MoreLoadButton.module.css'
import { setBooks } from '../../../redux/BooksSlice'
import { RootStoreState } from '../../../redux/store'
import { IBookData } from '../../../utils/getBookData'
import { getBookDataAsync } from '../../../utils/getBookData'
const MoreLoadButton: React.FC = () => {
  const dispatch = useDispatch()
  const title = useSelector((state: RootStoreState) => state.books.titleBook)
  const startIndexForNextLoadBook = useSelector((state: RootStoreState) => state.books.startIndexForNextLoadBook)

  const handleLoadMore = async () => {
    const newBooks: IBookData | null = await getBookDataAsync(title, startIndexForNextLoadBook)
    if (!newBooks) return
    dispatch(setBooks(newBooks.books))
  }

  return (
    <div className={styles.buttonCantainer}>
      <Button variant='outlined' onClick={handleLoadMore}>
        more
      </Button>
    </div>
  )
}

export default MoreLoadButton
