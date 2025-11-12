import { useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.style.backgroundColor = dark ? "white" : "#222";
    document.body.style.color = dark ? "black" : "white";
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: "fixed",
        top: "15px",
        right: "15px",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default ThemeToggle;
