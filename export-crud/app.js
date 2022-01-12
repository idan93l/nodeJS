const express = require("express");
// app.use(express.json());
const app = express();
const port = 4000;
const arr = [1,2,3,4,5,6];

app.get("/numbers", (req, res) => res.status(200).send(arr));

app.post("/numbers/:num", (req, res) => {
  const { num } = req.params;
  const duplicatedNum = arr.find(number => number === +num);
  if (duplicatedNum) {
    res.status(400).send(`${num} already exists`);
    return;
  }
  arr.push(+num);
  res.status(201).send(arr);
});

app.delete("/numbers/:num", (req, res) => {
  const { num } = req.params;
  const duplicatedNum = arr.find(number => number === +num);
  if (!duplicatedNum) {
    res.status(400).send(`${num} doesn't exists`);
    return;
  }
  const index = arr.findIndex(number => number === +num);
  arr.splice(index, 1);
  res.status(202).send(arr)
});

app.put("/numbers/:num", (req, res) => {
  const { num } = req.params;
  const duplicatedNum = arr.find(number => number === +num);
  if (!duplicatedNum) {
    res.status(400).send(`${num} doesn't exists`);
    return;
  }
  const { newNum } = req.query;
  const index = arr.findIndex(number => number === +num);
  arr[index] = +newNum;
  res.status(202).send(arr)
});

app.listen(4000, () => {
  console.log(`App running on port ${port}`);
});