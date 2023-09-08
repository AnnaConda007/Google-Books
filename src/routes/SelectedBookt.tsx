import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import SelectedBookCart from '../components/selectedBookCart/SelectedBookCart'
import { IBook } from '../redux/BooksSlice'
import { RootStoreState } from '../redux/store'

const SelectedBookContent = () => {
  const { etag } = useParams<{ etag: string }>()
  const books: Array<IBook> = useSelector((state: RootStoreState) => state.books.allBooks)
  const selectedBook: IBook | undefined = books.find((book) => book.etag === etag)
  if (!selectedBook) return

  return <SelectedBookCart selectedBook={selectedBook} />
}

export default SelectedBookContent
