import { useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";
import MoreLoadButton from "./more-load-button/MoreLoadButton";
import { Grid, CardActionArea } from "@mui/material";
import TotalItemsBook from "./TotalItemsBook";
import styles from "./Books.module.css";
import { useNavigate } from "react-router-dom";
import BookCart from "./bookCart/BookCart";

const Books: React.FC = () => {
  const navigate = useNavigate();
  const books = useSelector(
    (state: RootStoreState) => state.books.filteredBooks
  );
  const totalItemsBook = useSelector(
    (state: RootStoreState) => state.books.totalItemsBook
  );
  return (
    <>
      {books.length > 0 && (
        <section>
          <TotalItemsBook totalItemsText={` Found ${totalItemsBook} resulst`} />
          <Grid container spacing={3} className={styles.Grid}>
            {books.map((book) => (
              <Grid
                item
                key={book.id}
                xs={12}
                sm={6}
                md={3}
                className={styles.GridItem}
                style={{ flexBasis: "250px" }}
              >
                <CardActionArea
                  onClick={() => {
                    navigate(`${book.volumeInfo.title}`);
                  }}
                >
                  <BookCart book={book} />
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
          <MoreLoadButton />
        </section>
      )}
    </>
  );
};

export default Books;
