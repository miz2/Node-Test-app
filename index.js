const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js app running in Docker!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
