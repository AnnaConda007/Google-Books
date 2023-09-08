import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootStoreState } from "../redux/store";
import { IBook } from "../redux/BooksSlice";
import SelectedBookCart from "../components/selectedBookCart/SelectedBookCart";

const SelectedBookContent = () => {
  const { etag } = useParams<{ etag: string }>();
  const books: Array<IBook> = useSelector(
    (state: RootStoreState) => state.books.allBooks
  );
  const selectedBook: IBook | undefined = books.find(
    (book) => book.etag === etag
  ); 
  if (!selectedBook) return;

  return <SelectedBookCart selectedBook={selectedBook} />;
};

export default SelectedBookContent;
