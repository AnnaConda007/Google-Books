import { CardContent, CardMedia, Typography, Box } from '@mui/material'
import styles from './SelectedBookCart.module.css'
import { IBook } from '../../redux/BooksSlice'

interface SelectedBookCartProps {
  selectedBook: IBook
}
const SelectedBookCart: React.FC<SelectedBookCartProps> = ({ selectedBook }) => {
  return (
    <section className={styles.Card}>
      <div className={styles.CardMediaWrap}>
        <CardMedia
          className={styles.CardMedia}
          component='img'
          image={selectedBook.volumeInfo.imageLinks ? selectedBook.volumeInfo.imageLinks.thumbnail || selectedBook.volumeInfo.imageLinks.smallThumbnail : ' '}
          alt={selectedBook.volumeInfo.title}
        />
      </div>
      <CardContent className={styles.CardContent}>
        {selectedBook.volumeInfo.categories && (
          <Typography variant='body2' color='textSecondary'>
            {selectedBook.volumeInfo.categories}
          </Typography>
        )}
        <Typography variant='h5' component='div'>
          {selectedBook.volumeInfo.title}
        </Typography>
        {selectedBook.volumeInfo.authors && (
          <Typography className={styles.TypographyAuthor} variant='subtitle1' color='textSecondary'>
            {selectedBook.volumeInfo.authors.join(', ')}
          </Typography>
        )}
        {selectedBook.volumeInfo.description && (
          <Box mt={3}>
            <Typography className={styles.TypographyAuthorTextSnippet} variant='body1'>
              {selectedBook.volumeInfo.description.substring(0, 200) + (selectedBook.volumeInfo.description.length > 200 ? '...' : '')}
            </Typography>
          </Box>
        )}
      </CardContent>
    </section>
  )
}

export default SelectedBookCart
