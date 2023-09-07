import { useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";
import MoreLoadButton from "./more-load-button/MoreLoadButton";
import {
  Typography,
  CardContent,
  CardMedia,
  Card,
  Grid,
  Box,
} from "@mui/material";

import styles from "./Books.module.css";
const Books: React.FC = () => {
  const books = useSelector(
    (state: RootStoreState) => state.books.filteredBooks
  );

  return (
    <>
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
            <Card
              className={styles.Card}
              elevation={0}
              style={{
                // переопределение MUI
                height: "350px",
                backgroundColor: "#f5f5f5",
                padding: "20px 10px",
              }}
            >
              <div className={styles.CardMediaWrap}>
                <CardMedia
                  style={{ width: "70%", boxShadow: "3px 2px 10px " }} // переопределение MUI
                  component="img"
                  image={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                />
              </div>
              <CardContent>
                {book.volumeInfo.categories && (
                  <Typography
                    className={styles.Typography}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {book.volumeInfo.categories[0]}
                  </Typography>
                )}
                <Box mt={1}>
                  <Typography variant="body1" fontWeight="bold" component="div">
                    {book.volumeInfo.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {book.volumeInfo.authors}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        {books.length > 0 && <MoreLoadButton />}
      </div>
    </>
  );
};

export default Books;
