import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={handleChange}
        style={{ padding: "8px", width: "250px", borderRadius: "5px" }}
      />
    </div>
  );
}

export default SearchBar;
