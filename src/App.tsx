import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/headers_component/header/Header'
import Home from './routes/Home'
import SelectedBookContent from './routes/SelectedBookt'
import themeMUI from './themeMUI'
import './App.css'
function App() {
  return (
    <ThemeProvider theme={themeMUI}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:etag' element={<SelectedBookContent />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
