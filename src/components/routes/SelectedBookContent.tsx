import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootStoreState } from "../../redux/store";
import { IBook } from "../../redux/BooksSlice";
import SelectedBookCart from "../selectedBookCart/SelectedBookCart";

const SelectedBookContent = () => {
  const { bookTitle } = useParams<{ bookTitle: string }>();
  const books: Array<IBook> = useSelector(
    (state: RootStoreState) => state.books.allBooks
  );
  const selectedBook: IBook | undefined = books.find(
    (book) => book.volumeInfo.title === bookTitle
  );
  if (!selectedBook) return;

  return <SelectedBookCart selectedBook={selectedBook} />;
};

export default SelectedBookContent;
