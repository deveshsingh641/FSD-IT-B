import React from 'react'
import "./book.css"

const Book = () => {
    const addtocart = () => {
        alert("Successfully added ${book.title} Book")
    }
  return (
    <div className = 'card'>
      <img src = "https://www.bing.com/th/id/OIP.a3JiRaDCCev5-0HMATz4QgHaIz?w=174&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" width = {200} height = {200} alt = 'image'/>
      <h3> Title : Physics </h3>
      <h4> Price : Rs. 430 /- </h4>
      <button onClick = {addtocart}> Add to cart </button>
    </div>
  )
}

export default Book
