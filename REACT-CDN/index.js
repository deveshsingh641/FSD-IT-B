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

  const details = React.createElement(React.Fragment, null, title, price, btn);
  return React.createElement("div", { className: "card" }, image, details);
}

const books = [
  {
    title: "Physics",
    price: 351,
    image: "https://images-na.ssl-images-amazon.com/images/I/81drfTT9ZfL.jpg"
  },
  {
    title: "Chemistry",
    price: 420,
    image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg"
  },
  {
    title: "Mathematics",
    price: 499,
    image: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg"
  }
];


const bookElements = books.map(book =>
  React.createElement(Book, {
    title: book.title,
    price: book.price,
    image: book.image
  })
);


const bookRow = React.createElement("div", { className: "book-row" }, ...bookElements);


const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(bookRow);