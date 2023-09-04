import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortType, BookCategories } from "../../enums";
export interface IBook {
  searchInfo: { textSnippet: string };
  volumeInfo: {
    categories?: string[];
    title: string;
    authors: string[];
    publishedDate: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
}

interface IInitialState {
  allBooks: Array<IBook>;
  filteredBooks: Array<IBook>;
  sortMethod: string;
}

const initialState: IInitialState = {
  allBooks: [],
  filteredBooks: [],
  sortMethod: "",
};

const sortBooks = (books: IBook[], method: string) => {
  if (method === SortType.NEWEST) {
    return [...books].sort((a, b) =>
      b.volumeInfo.publishedDate.localeCompare(a.volumeInfo.publishedDate)
    );
  } else if (method === SortType.RELEVANCE) {
    return [...books].sort((a, b) =>
      a.volumeInfo.title.localeCompare(b.volumeInfo.title)
    );
  }
  return books;
};

export const books = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Array<IBook>>) => {
      state.allBooks = action.payload;
      state.filteredBooks = action.payload;
    },
    filteredByCategories: (
      state,
      action: PayloadAction<{ category: string }>
    ) => {
      const filtered =
        action.payload.category === BookCategories.ALL
          ? state.allBooks
          : state.allBooks.filter(
              (book) =>
                book.volumeInfo.categories?.[0] === action.payload.category
            );

      state.filteredBooks = sortBooks(filtered, state.sortMethod);
    },
    setSort: (state, action) => {
      state.sortMethod = action.payload;
      state.filteredBooks = sortBooks(state.filteredBooks, state.sortMethod);
    },
  },
});

export const { setBooks, filteredByCategories, setSort } = books.actions;
export default books.reducer;
