import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookCard from "./components/BookCard";
import booksData from "./data/books";

/**
 * Main Application Component
 * ----------------------------------------------------------
 * Features:
 * - Book listing with search and filtering
 * - Local storage persistence
 * - Dynamic sorting and category filter
 * - Real-time statistics calculation
 * - Modular component integration
 */

function App() {
  const [books, setBooks] = useState(() => {
    // Load data from local storage on first render
    const saved = localStorage.getItem("booksData");
    return saved ? JSON.parse(saved) : booksData;
  });

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [stats, setStats] = useState({ total: 0, avgPrice: 0 });

  // Save to local storage when data changes
  useEffect(() => {
    localStorage.setItem("booksData", JSON.stringify(books));
    calculateStats(books);
  }, [books]);

  const handleSearchChange = (e) => setSearch(e.target.value);

  const handleCategoryChange = (e) => setCategory(e.target.value);

  const handleSortChange = (e) => setSortBy(e.target.value);

  const calculateStats = (bookList) => {
    const total = bookList.length;
    const avgPrice = (
      bookList.reduce((sum, b) => sum + Number(b.price || 0), 0) / total
    ).toFixed(2);
    setStats({ total, avgPrice });
  };

  const filteredBooks = books
    .filter((book) => {
      const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || book.category === category;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "priceLow") return a.price - b.price;
      if (sortBy === "priceHigh") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  // Add new book dynamically
  const addBook = () => {
    const title = prompt("Enter Book Title:");
    const author = prompt("Enter Author:");
    const price = Number(prompt("Enter Price:"));
    const category = prompt("Enter Category:");

    if (!title || !author || !price || !category) {
      alert("All fields are required!");
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      author,
      price,
      category,
      rating: (Math.random() * 2 + 3).toFixed(1),
    };

    setBooks([...books, newBook]);
  };

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Book Explorer</h1>

      {/* Controls Section */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={handleSearchChange}
          style={{ padding: "8px", width: "200px", borderRadius: "5px" }}
        />
        <select onChange={handleCategoryChange} value={category}>
          <option value="All">All Categories</option>
          {[...new Set(books.map((b) => b.category))].map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <select onChange={handleSortChange} value={sortBy}>
          <option value="default">Default</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
        <button onClick={addBook}>➕ Add Book</button>
      </div>

      {/* Statistics Section */}
      <div style={{
        textAlign: "center",
        backgroundColor: "#f0f8ff",
        padding: "10px",
        borderRadius: "10px",
        width: "60%",
        margin: "0 auto 20px auto"
      }}>
        <p><strong>Total Books:</strong> {stats.total}</p>
        <p><strong>Average Price:</strong> ₹{stats.avgPrice}</p>
      </div>

      {/* Book Display */}
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
