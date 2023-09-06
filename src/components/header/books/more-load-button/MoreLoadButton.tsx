
import {useDispatch,  useSelector} from "react-redux";
import { RootStoreState } from '../../../../redux/store';
import { IBookData } from '../../../utils/getBookData';
import { getBookDataAsync } from '../../../utils/getBookData';
import { setBooks } from '../../../../redux/BooksSlice';

const MoreLoadButton : React.FC = ()=>{
  const dispatch = useDispatch();
  const title = useSelector((state: RootStoreState) => state.books.titleBook);
  const startIndexForNextLoadBook = useSelector(
    (state: RootStoreState) => state.books.startIndexForNextLoadBook
  );
  
  const handleLoadMore = async () => {
    const newBooks : IBookData | null = await getBookDataAsync(title, startIndexForNextLoadBook);
    if(!newBooks) return
    dispatch(setBooks(newBooks.books));
  };

  return(
    <button onClick={handleLoadMore}>more</button>
  )
}

export default MoreLoadButton