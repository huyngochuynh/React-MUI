import React from 'react';
import SearchAppBar from './components/SearchAppBar';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './App.css';


const theme = createTheme({
  shape: { borderRadius: 16 },
})

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <SearchAppBar />
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/book/:id" element={ <DetailPage /> } />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
