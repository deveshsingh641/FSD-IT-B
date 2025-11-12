import { useState } from "react";

function BookCard({ title, author, price }) {
  const [rating, setRating] = useState(0);

  const handleRate = (value) => setRating(value);

  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      margin: "10px",
      width: "200px",
      textAlign: "center"
    }}>
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Price:</strong> ₹{price}</p>
      <div>
        {[1, 2, 3, 4, 5].map((num) => (
          <span
            key={num}
            onClick={() => handleRate(num)}
            style={{ color: num <= rating ? "gold" : "#ccc", cursor: "pointer", fontSize: "18px" }}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
}

export default BookCard;

/**
 * BookCard Component
 * --------------------
 * Displays a single book card with title, author, and price details.
 * Features:
 *  - Star rating system with local state
 *  - Responsive inline styling for layout consistency
 *  - Dynamically colored stars (gold for rated, gray for unrated)
 *  - Can easily extend to show more properties like genre, rating count, etc.
 *
 * Notes:
 *  This component demonstrates:
 *  - React useState hook usage
 *  - Event handling (onClick)
 *  - Array mapping for dynamic UI rendering
 *  - Inline conditional styling based on component state
 */

