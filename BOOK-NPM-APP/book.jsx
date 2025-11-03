import React from "react";
import "./app.css";

export default function Book(props) {
  return (
    <div className="book-container">
      <img src={props.book.image} width="200" height="200" alt="Book Cover" />
      <h3>Title: {props.book.title}</h3>
      <h4>Price: {props.book.price}</h4>
      <button>Add to Cart</button>
    </div>
  );
}
