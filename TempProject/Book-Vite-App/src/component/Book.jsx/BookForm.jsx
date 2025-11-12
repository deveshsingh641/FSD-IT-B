import { useState } from "react";

function AddBookForm({ onAdd }) {
  const [form, setForm] = useState({ title: "", author: "", price: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.price) {
      setError("All fields are required!");
      return;
    }
    onAdd(form);
    setForm({ title: "", author: "", price: "" });
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", margin: "20px" }}>
      <input name="title" placeholder="Book title" value={form.title} onChange={handleChange} />
      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} />
      <input name="price" placeholder="Price" type="number" value={form.price} onChange={handleChange} />
      <button type="submit">Add Book</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default AddBookForm;
