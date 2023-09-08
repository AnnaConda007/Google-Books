import { configureStore } from '@reduxjs/toolkit'
import BooksSlice from './BooksSlice'
const store = configureStore({
  reducer: {
    books: BooksSlice,
  },
})
export type RootStoreState = ReturnType<typeof store.getState>

export default store
