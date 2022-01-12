const express = require("express");
const app = express();
const port = 3000;

app.get("/numbers", (req, res) =>
  res.status(200).send({ message: "Success using Get!"}));

app.post("/numbers", (req, res) =>
  res.status(200).send({ message: "Success using Post!"}));

app.delete("/numbers", (req, res) =>
  res.status(200).send({ message: "Success using Delete!"}));

app.put("/numbers", (req, res) =>
  res.status(200).send({ message: "Success using Put!"}));

app.listen(3000, () => {
  console.log(`App running on port ${port}`);
});
