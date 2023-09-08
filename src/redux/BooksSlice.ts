import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SortType, BookCategories } from '../../enums'
import { paginationConstants } from '../contains'

export interface IBook {
  etag: string
  searchInfo: { textSnippet: string }
  volumeInfo: {
    categories?: string[]
    title: string
    authors?: string[]
    publishedDate?: string
    imageLinks?: {
      smallThumbnail: string
      thumbnail: string
    }
  }
}

interface IInitialState {
  allBooks: Array<IBook>
  filteredBooks: Array<IBook>
  sortMethod: SortType
  startIndexForNextLoadBook: number
  titleBook: string
  totalItemsBook: number
}

const initialState: IInitialState = {
  allBooks: [],
  filteredBooks: [],
  sortMethod: SortType.RELEVANCE,
  startIndexForNextLoadBook: 0,
  titleBook: '',
  totalItemsBook: 0,
}

const sortBooks = (books: IBook[], method: SortType) => {
  if (method === SortType.NEWEST) {
    return [...books].sort((a, b) => {
      const aDate = a.volumeInfo.publishedDate || '0000-01-01'
      const bDate = b.volumeInfo.publishedDate || '0000-01-01'
      return bDate.localeCompare(aDate)
    })
  } else if (method === SortType.RELEVANCE) {
    return [...books].sort((a, b) => a.volumeInfo.title.localeCompare(b.volumeInfo.title))
  }
  return books
}

export const books = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Array<IBook>>) => {
      state.allBooks = [...state.allBooks, ...action.payload]
      state.filteredBooks = [...state.filteredBooks, ...action.payload]
    },
    resetBook: (state) => {
      state.allBooks = []
      state.filteredBooks = []
    },
    filterByCategory: (state, action: PayloadAction<string>) => {
      const filtered =
        action.payload === BookCategories.ALL ? state.allBooks : state.allBooks.filter((book) => book.volumeInfo.categories?.[0] === action.payload)

      state.filteredBooks = sortBooks(filtered, state.sortMethod)
    },
    setSort: (state, action: PayloadAction<SortType>) => {
      state.sortMethod = action.payload
      state.filteredBooks = sortBooks(state.filteredBooks, state.sortMethod)
    },
    setTitleBook: (state, action: PayloadAction<string>) => {
      state.titleBook = action.payload
    },
    setStartIndexForNextLoadBook: (state) => {
      state.startIndexForNextLoadBook += paginationConstants
    },
    resetStartIndexForNextLoadBook: (state) => {
      state.startIndexForNextLoadBook = 0
    },
    setTotalItemsBook: (state, action: PayloadAction<number>) => {
      state.totalItemsBook = action.payload
    },
  },
})

export const { setBooks, filterByCategory, setSort, setTitleBook, setStartIndexForNextLoadBook, resetBook, resetStartIndexForNextLoadBook, setTotalItemsBook } =
  books.actions
export default books.reducer
