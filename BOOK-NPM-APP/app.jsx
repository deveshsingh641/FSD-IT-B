import React from "react";
import Book from "./book.jsx";
import "./app.css";

export default function App() {
  const books = [
    {
      image: "https://m.media-amazon.com/images/I/71zIDc0j0OL.jpg",
      title: "Physics",
      price: "₹450",
    },
    {
      image: "https://m.media-amazon.com/images/I/A1A-2XwQVL.jpg",
      title: "Chemistry",
      price: "₹345",
    },
    {
      image: "https://media.istockphoto.com/id/1044168372/vector/mathematics.jpg?s=612x612&w=0&k=20&c=02J5s9nIBVT4B7ng6qo2wMfZQne-w8xNHm8XSzqo=",
      title: "Maths",
      price: "₹367",
    }
  ];
  return (
    <div className="book-list">
      {books.map((b, i) => <Book key={i} book={b} />)}
    </div>
  );
}
