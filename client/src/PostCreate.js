import React, { useState } from "react";
import axios from "axios";

export default function PostCreate() {
  const [title, setTitle] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://posts.com/posts/create", {
      title: title,
    });
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Create post</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
