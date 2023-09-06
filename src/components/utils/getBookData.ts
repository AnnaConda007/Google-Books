import { IBook } from "../../redux/BooksSlice";
import { paginationConstants } from "../../contains";

export interface IBookData {
  totalItems: number;
  books: Array<IBook>;
}

export const getBookDataAsync = async (
  title: string,
  startIndex: number = 0
): Promise<IBookData | null> => {
  const API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY;
  const maxResults = paginationConstants;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${title}&startIndex=${startIndex}&maxResults=${maxResults}&key=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      new Error(`Ошибка при обращении к Google API: ${response.statusText}`);
      return null;
    }
    const data = await response.json();
    const totalItems = data.totalItems;
    const books: Array<IBook> = data.items || [];
    const booksData = {
      totalItems: totalItems,
      books: books,
    };
    return booksData;
  } catch (error) {
    console.error("Ошибка при обращении к Google API");
    alert("Ошибка при обращении к Google API");
    return null;
  }
};
