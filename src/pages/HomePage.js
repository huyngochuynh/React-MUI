import React from 'react'
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BookCard from "../components/BookCard";
import books from "../books.json";
import { useState } from 'react';
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";


function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;
 
  const indexOfLastBook = currentPage * booksPerPage; 
  const indexOfFirstBook = indexOfLastBook - booksPerPage; 
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(books.length / booksPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };


  return (
    <Container>
        <Grid container spacing={2} mt={1} >
        {currentBooks.map((book) => (
          <Grid key={book.id} item xs={12} md={4}>
            <BookCard book={book} />
          </Grid>
        ))}
        </Grid>
      
        <Box display="flex" justifyContent="center" mt={2}>
        <Pagination 
          count={totalPages} 
          page={currentPage} 
          onChange={handlePageChange} 
          color="primary"
        />
      </Box>
    </Container>
    
  )
}

export default HomePage;