import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

export default function App() {
  return (
    <div className="container">
      <h2>Create a post</h2>
      <PostCreate />
      <hr />
      <h2>Post list</h2>
      <PostList />
    </div>
  );
}
