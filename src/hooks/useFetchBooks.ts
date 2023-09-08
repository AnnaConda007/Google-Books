import { useDispatch } from "react-redux";
import {
  setBooks,
  resetBook,
  setStartIndexForNextLoadBook,
  setTitleBook,
  setTotalItemsBook,
  resetStartIndexForNextLoadBook,
} from "../redux/BooksSlice";
import { getBookDataAsync } from "../utils/getBookData";
import { IBookData } from "../utils/getBookData";
import { batch } from "react-redux";

const useFetchBooks = (inputValue: string) => {
  const dispatch = useDispatch();

  const updateBooksInStore = (downloadedBooks: IBookData) => {
    batch(() => {
      dispatch(resetBook());
      dispatch(resetStartIndexForNextLoadBook());
      dispatch(setBooks(downloadedBooks.books));
      dispatch(setTotalItemsBook(downloadedBooks.totalItems));
      dispatch(setStartIndexForNextLoadBook());
      dispatch(setTitleBook(inputValue));
    });
  };

  const fetchBooks = async (): Promise<void> => {
    const booksData: IBookData | null = await getBookDataAsync(inputValue);
    if (!booksData) return;
    updateBooksInStore(booksData);
  };

  return { fetchBooks };
};

export default useFetchBooks;
   