const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/data', (req, res) => {
  const data = req.body.message;
  res.json({ message: data });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});