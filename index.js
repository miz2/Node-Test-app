const express = require('express');
const app = express();

app.use(express.json()); // to parse JSON bodies

app.get('/', (req, res) => {
  res.send('Hello from Node.js app running in Docker!');
});

app.post('/add', (req, res) => {
  const { a, b } = req.body;

  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Inputs must be numbers' });
  }

  const sum = a + b;
  res.json({ result: sum });
});

if (require.main === module) {
  const port = 3000;
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}

module.exports = app;
