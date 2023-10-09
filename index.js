const http = require('http');
const express = require('express');
const path = require('path')

const app = express();

const port = 8080;

app.use(express.static(path.join(__dirname, "assets")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './assets/index.html'));
})

app.listen(port, () => {
  console.log(`Server running on ${port}`);
})