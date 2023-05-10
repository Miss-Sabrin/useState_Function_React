import React, { useState } from 'react'
import BookList from './BookList';
import BookCard from './BookCard';
import img1 from "../images/3.jpg"
import img2 from "../images/4.jpg"
import img3 from "../images/5.jpg"
import img4 from "../images/6.jpg"
import img5 from "../images/3.jpg"
import img6 from "../images/4.jpg"


const Home = () => {

    const [books ,setBooks]=useState([
        {   
            id:1,
            img:img1,
           


            title:"sabrin",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, et aliquam nam, modi dolore deserunt nihil explicabo.'


        },


        {
            id:2,
            img:img2,
            

            title:"sabrin",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, et aliquam nam, modi dolore deserunt nihil explicabo.'
            

        },


        {
            id:3,
            img:img3,
        
        
            title:"sabrin",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, et aliquam nam, modi dolore deserunt nihil explicabo.'
            

        },
        {
                id:4,
                img:img4,
                title:"sabrin",
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, et aliquam nam, modi dolore deserunt nihil explicabo.'
                
            
        },

        {
            id:5,
            img:img5,
           
            title:"sabrin",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, et aliquam nam, modi dolore deserunt nihil explicabo.'
            
        },


        {
            id:6,
            img:img6,
            title:"sabrin",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, et aliquam nam, modi dolore deserunt nihil explicabo.'
            
        }




    ])
    const deleteBook = (id) => {
        let newBooks = books.filter((book) => book.id !=id);
        setBooks(newBooks);    
    }
    
    
    
    

    const clearBook=(id)=>{ 
        setBooks([])
       
       
    }

    
    
    
  return (
    <div >

        <button className='clear' onClick={()=>clearBook("")}>clear All</button>

        <BookList books={books}  deleteBook={deleteBook}/>




    </div>
  )
}

export default Home