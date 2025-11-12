import { useState } from "react";

function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleMode = () => {
    setDark(!dark);
    document.body.style.backgroundColor = dark ? "white" : "#222";
    document.body.style.color = dark ? "black" : "white";
  };

  return (
    <nav style={{ backgroundColor: "#1e90ff", padding: "10px", color: "white" }}>
      <h2>Book Vite App</h2>
      <button
        onClick={toggleMode}
        style={{ marginLeft: "20px", padding: "5px 10px", borderRadius: "5px" }}
      >
        {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;
