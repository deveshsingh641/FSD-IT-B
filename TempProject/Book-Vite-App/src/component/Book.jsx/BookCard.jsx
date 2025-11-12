import { useState } from "react";

function BookCard({ title, author, price }) {
  const [rating, setRating] = useState(0);

  const handleRate = (value) => setRating(value);

  const starStyle = (index) => ({
    color: index <= rating ? "gold" : "#ccc",
    cursor: "pointer",
    fontSize: "20px"
  });

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
          <span key={num} onClick={() => handleRate(num)} style={starStyle(num)}>★</span>
        ))}
      </div>
    </div>
  );
}

export default BookCard;
