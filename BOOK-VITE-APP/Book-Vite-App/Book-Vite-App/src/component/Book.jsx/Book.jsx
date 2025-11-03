import React from 'react'
import "./book.css"

const Book = () => {
    const addtocart = () => {
        alert("Successfully added ${book.title} Book")
    }
  return (
    <div className = 'card'>
      <img src = "https://cdn.img.gen.in/saradhi-books/34898/portfolio.jpg?height=200&biz=2596&meta=true" width = {200} height = {200} alt = 'image'/>
      <h3> Title : Physics </h3>
      <h4> Price : Rs. 430 /- </h4>
      <button onClick = {addtocart}> Add to cart </button>
    </div>
  )
}

export default Book
