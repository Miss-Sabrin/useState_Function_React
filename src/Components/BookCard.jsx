import React, { useState } from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import img1 from '../images/3.jpg'
import img2 from "../images/4.jpg"
import img3 from "../images/5.jpg"
import img4 from "../images/6.jpg"
import img5 from "../images/3.jpg"
import img6 from "../images/4.jpg"

const BookCard = ({book, deleteBook}) => {
 
  return (


<div className='container   mt-10 bg-gray-300 w-50 h-70 ' key={book.id}>
  
      <img className='image' src={book.img} alt="" />
      <div className='text '>



<h1  className='text-2xl '>{book.title}</h1>
<p  className=' '>{book.description}</p>

<button  
onClick={() => deleteBook(book.id)} className='btn-delete text-center -' >Delete</button>
<button className='btn-icon '>  <BsFillPersonFill className='icon pt-1 w-10 h-10'/></button>


</div>
</div>  
  )
   
}

export default BookCard