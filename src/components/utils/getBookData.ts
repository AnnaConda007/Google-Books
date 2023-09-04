import { IBook } from "../../redux/BooksSlice";

export const getBookData = async (
  title: string
): Promise<Array<IBook> | void> => {
  const API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY;
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data)
    const booksData: Array<IBook> = data.items;
    return booksData;
  } catch (error) {
    console.error("Ошибка при обращении к Google API");
    alert("Ошибка при обращении к Google API")
   
  }
};
