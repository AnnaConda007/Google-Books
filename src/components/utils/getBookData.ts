export const getBookData =async (title:string)=>{
  const API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY;
const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${API_KEY}`)
const data = await response.json()
console.log(data)
}