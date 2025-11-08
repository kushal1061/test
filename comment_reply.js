const axios = require('axios');

const HOST_URL = "graph.instagram.com";
const IG_COMMENT_ID = "<IG_COMMENT_ID>";
const ACCESS_TOKEN = "<YOUR_ACCESS_TOKEN>"; // if needed for authentication

async function replyToComment(CommentId) {
  try {
    const response = await axios.post(
      `https://${HOST_URL}/v24.0/${CommentId}/replies`,
      {
        message: "Thanks for sharing!"
      },
      {
        headers: {
          "Content-Type": "application/json",
          // "Authorization": `Bearer ${ACCESS_TOKEN}` // uncomment if your API requires token
        }
      }
    );
    console.log("Reply posted:", response.data);
  } catch (error) {
    console.error("Error posting reply:", error.response?.data || error.message);
  }
}

module.exports = { replyToComment };