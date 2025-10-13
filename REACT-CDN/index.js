function Book(props) {
  const image = React.createElement("img", {
    src: props.image,
    width: 150,
    height: 150,
    alt: "Book Image"
  });

  const h4 = React.createElement("h4", null, "Price: " + props.price + "/-");
  const child = React.createElement("div", { className: "card" }, image, h4);
  return child;
}

const books = [
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/81drfTT9ZfL.jpg", 
    price: 235
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
    price: 245
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg",
    price: 335
  }
];

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

// ✅ render all books
const bookElements = books.map(book =>
  React.createElement(Book, { image: book.image, price: book.price })
);
root.render(React.createElement(React.Fragment, null, ...bookElements));