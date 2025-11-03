import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Book() {
  return (
    <div className="card">
      <img
        src="https://m.media-amazon.com/images/I/51Z0WWB3YDL.jpg"
        alt="Book Cover"
      />
      <h2>Title: The Great Gatsby</h2>
      <h4>Price: $10.99</h4>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Book />);
