const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();
const { randomBytes } = require("crypto");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id: id,
    title,
  };
  await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });
  res.status(200).send(posts[id]);
});

app.post("/events", (req, res) => {
  console.log("Event Received", req.body.type);
});

app.listen(4000, () => {
  console.log("listening on post 4000");
});
