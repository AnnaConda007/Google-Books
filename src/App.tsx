  import Header from './components/header/Header'
import './App.css' 
import Books from './components/books/Books'
import { ThemeProvider } from '@mui/material/styles';
import themeMUI from './themeMUI';
 
function App() { 
  return (
    <ThemeProvider theme={themeMUI}>  <Header/>
  <Books/>
  </ThemeProvider>
  )
}

export default App 