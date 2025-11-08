const { replyToComment } = require("./comment_reply.js");
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const token = "kushalpal"
app.get('/', (req, res) => {
   console.log(req.query);
  if (
    req.query['hub.mode'] == 'subscribe' &&
    req.query['hub.verify_token'] == token
  ) {
    res.send(req.query['hub.challenge']);
  } else {
    res.sendStatus(400);
  }
});
app.get("/webhooks", (req, res) => {
  if (
    req.query["hub.mode"] === "subscribe" &&
    req.query["hub.verify_token"] === token
  ) {
    res.send(req.query["hub.challenge"]);
  } else {
    res.sendStatus(403);
  }
});
app.post("/webhooks", (req, res) => {
  try {
    console.log("📥 Received Webhook:", JSON.stringify(req.body, null, 2));

    const event = req.body.entry?.[0];
    const change = event?.changes?.[0]; // Correct one

    console.log("DEBUG FIELD:", change?.field);
    console.log("DEBUG TEXT:", change?.value?.text);

    if (
      change?.field === "comments" &&
      change?.value?.text?.trim()?.toLowerCase() === "flight"
    ) {
      const commentId = change?.value?.id;
      console.log("✅ Replying to Comment ID:", commentId);
      replyToComment(commentId);
    } else {
      console.log("❌ Condition Not Matched");
    }

    // Rename variable inside loop to avoid shadowing
    if (event?.changes) {
      event.changes.forEach(c => {
        console.log("Field:", c.value?.text?.trim()?.toLowerCase()) ;
        console.log("Value:", c.value);
      });
    }

    res.status(200).send("EVENT_RECEIVED");
  } catch (err) {
    console.error("Webhook Error:", err.message);
    res.status(400).send("Invalid signature");
  }
});
app.get(['/facebook', '/instagram', '/threads'], function(req, res) {
  console.log(req.query);
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