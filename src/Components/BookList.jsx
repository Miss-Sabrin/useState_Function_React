import React from 'react'
import BookCard from './BookCard';

const BookList = ({books ,deleteBook}) => {
  return (
    <div >

{books.map((book  )=> (
    <BookCard book={book} deleteBook={deleteBook}/>
))
} 
 
    
    </div>
  )
}

export default BookList