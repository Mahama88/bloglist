import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Rauf");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);
  };
  return (
    <div className="create">
      <h2>Add a New Blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog Title:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog Title</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Rauf">Rauf</option>
          <option value="Mahama">Mahama</option>
          <option value="Banpuori">Banpuori</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
}

export default App;
