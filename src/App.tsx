import { ThemeProvider } from "@mui/material/styles";
import themeMUI from "./themeMUI";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/routes/Home";
import SelectedBookContent from './components/routes/SelectedBookContent';
import "./App.css"
function App() {
  return (
    <ThemeProvider theme={themeMUI}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:bookTitle" element={<SelectedBookContent />} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
