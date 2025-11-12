import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookCard from "./components/BookCard";
import SearchBar from "./components/SearchBar";
import booksData from "./data/books";

function App() {
  const [search, setSearch] = useState("");

  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <SearchBar onSearch={setSearch} />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {filteredBooks.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
