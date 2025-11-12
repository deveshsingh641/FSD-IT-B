function Book(props) {
  const image = React.createElement("img", {
    src: props.image,
    width: 180,
    height: 180,
    alt: "Book Image"
  });

  const title = React.createElement("h3", null, "Title: " + props.title);
  const price = React.createElement("h4", null, "Price: ₹" + props.price + "/-");
  const btn = React.createElement("button", null, "ADD TO CART");

  // Put title, price, and button in a div below the image
  const details = React.createElement(React.Fragment, null, title, price, btn);

  // Final card
  return React.createElement("div", { className: "card" }, image, details);
}

const books = [
  {
    title: "Physics",
    price: 351,
    image: "https://www.bing.com/th/id/OIP.a3JiRaDCCev5-0HMATz4QgHaIz?w=195&h=211&c=8&rs=1&qlt=90&o=6&cb=12&dpr=1.5&pid=3.1&rm=2"
  },
  {
    title: "Chemistry",
    price: 420,
    image: "https://www.bing.com/th/id/OIP.4sH-8jMvjVtMgfijC4mzCgHaJd?w=178&h=211&c=8&rs=1&qlt=90&o=6&cb=12&dpr=1.5&pid=3.1&rm=2"
  },
  {
    title: "Mathematics",
    price: 499,
    image: "https://www.bing.com/th/id/OIP.jyJUSW49vMvSIloQKRV02wHaLm?w=162&h=211&c=8&rs=1&qlt=90&o=6&cb=12&dpr=1.5&pid=3.1&rm=2"
  }
];

// Create each book card
const bookElements = books.map(book =>
  React.createElement(Book, {
    title: book.title,
    price: book.price,
    image: book.image
  })
);

// Wrap books in a flex row div
const bookRow = React.createElement("div", { className: "book-row" }, ...bookElements);

// Render to the root
const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(bookRow);