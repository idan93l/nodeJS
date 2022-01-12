const express = require('express')
const hbs = require('hbs')
const app = express();
const port = 5000;
const arr = [1,2,3,4,5,6];

app.set('view engine', 'hbs')

app.get("/numbers", (req, res) => res.status(200).render('numbers', { arr : arr }));

app.post("/numbers/:num", (req, res) => {
  const { num } = req.params;
  const duplicatedNum = arr.find(number => number === +num);
  if (duplicatedNum) {
    res.status(400).render('alreadyExists', { num : num });
    return;
  }
  arr.push(+num);
  res.status(201).render('numbers', { arr : arr });
});

app.delete("/numbers/:num", (req, res) => {
  const { num } = req.params;
  const duplicatedNum = arr.find(number => number === +num);
  if (!duplicatedNum) {
    res.status(400).render('doesntExists', { num : num });
    return;
  }
  const index = arr.findIndex(number => number === +num);
  arr.splice(index, 1);
  res.status(202).render('numbers', { arr : arr });
});

app.put("/numbers/:num", (req, res) => {
  const { num } = req.params;
  const duplicatedNum = arr.find(number => number === +num);
  if (!duplicatedNum) {
    res.status(400).render('doesntExists', { num : num });
    return;
  }
  const { newNum } = req.query;
  const index = arr.findIndex(number => number === +num);
  arr[index] = +newNum;
  res.status(202).render('numbers', { arr : arr });
});

app.listen(5000, () => {
  console.log(`App running on port ${port}`);
});