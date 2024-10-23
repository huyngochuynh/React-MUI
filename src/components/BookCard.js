import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LoginForm from './LoginForm';
import LearnModal from './LearnModal';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function BookCard ({ book }) {
  const [open, setOpen] = useState(false);
  const { isLoggedIn } = useContext(AuthContext)
  
  const handleClickOpen = () => {
    console.log(open)
    setOpen(true);
  }
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.title}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {book.skills}
        </Typography>


        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {book.description}
        </Typography>
      </CardContent>


      <CardActions>
        <Button size="small" 
          variant="contained" color="success"
          onClick={handleClickOpen}
        >
          Learn More
        </Button>
        {!isLoggedIn ?
          <LoginForm 
            open={open} 
            handleClose={handleClose}
          />:  <LearnModal  
          open={open} 
          handleClose={handleClose}
          book={book}
          />
        }
      </CardActions>
    </Card>
  );
}