import { useSelector } from "react-redux";
import { RootStoreState } from "../../../redux/store";

import MoreLoadButton from "./more-load-button/MoreLoadButton";
const Books: React.FC = () => {
  const books = useSelector(
    (state: RootStoreState) => state.books.filteredBooks
  );

  console.log(books);
  return (
    <>
      <span>
        *******
        {books.map((book) => {
          return <p>{book.volumeInfo.title}</p>;
        })}
      </span>
      <MoreLoadButton />
    </>
  );
};

export default Books;
