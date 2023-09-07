import { Typography, CardContent, CardMedia, Card, Box } from "@mui/material";
import { IBook } from "../../../redux/BooksSlice";
import styles from "./BookCart.module.css";
interface BookCartProps {
  book: IBook;
}

const BookCart: React.FC<BookCartProps> = ({ book }) => {
  return (
    <Card className={styles.Card} elevation={0}>
      <div className={styles.CardMediaWrap}>
        <CardMedia
          style={{ width: "70%" }}
          component="img"
          image={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail ||
                book.volumeInfo.imageLinks.smallThumbnail
              : " "
          }
          alt={book.volumeInfo.title}
        />
      </div>
      <CardContent>
        {book.volumeInfo.categories && (
          <Typography
            className={styles.TypographyСategories}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {book.volumeInfo.categories[0].split(" ")[0]}
          </Typography>
        )}
        <Box mt={1}>
          <Typography variant="body1" fontWeight="bold" component="div">
            {book.volumeInfo.title}
          </Typography>
          {book.volumeInfo.authors && (
            <Typography variant="body2" color="textSecondary" component="p">
              {book.volumeInfo.authors}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default BookCart;
