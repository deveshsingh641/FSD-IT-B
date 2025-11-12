import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookCard from "./components/BookCard";
import booksData from "./data/books";

function App() {
  const [books, setBooks] = useState(booksData);
  const [form, setForm] = useState({ title: "", author: "", price: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.price) {
      setError("All fields are required!");
      return;
    }
    setBooks([...books, { ...form, id: Date.now() }]);
    setForm({ title: "", author: "", price: "" });
    setError("");
  };

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Book List</h1>

      <form onSubmit={handleSubmit} style={{ textAlign: "center", marginBottom: "20px" }}>
        <input name="title" placeholder="Book Title" value={form.title} onChange={handleChange} />
        <input name="author" placeholder="Author" value={form.author} onChange={handleChange} />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} />
        <button type="submit">Add Book</button>
      </form>

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
