const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
const token = "kushalpal"
app.get(['/facebook', '/instagram', '/threads'], function(req, res) {
  if (
    req.query['hub.mode'] == 'subscribe' &&
    req.query['hub.verify_token'] == token
  ) {
    res.send(req.query['hub.challenge']);
  } else {
    res.sendStatus(400);
  }
});

app.post('/data', (req, res) => {
  const data = req.body.message;
  res.json({ message: data });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});