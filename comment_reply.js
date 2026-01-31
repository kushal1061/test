const axios = require('axios');

const HOST_URL = "graph.instagram.com";
const IG_COMMENT_ID = "<IG_COMMENT_ID>";
const ACCESS_TOKEN = ""; 
const userId ="";
async function replyToComment(commentId) {
  const url = `https://${HOST_URL}/v24.0/${userId}/messages`;
  try {
    const response = await axios.post(
      url,
      {
        recipient: { comment_id: commentId },
        message: { text: "Hey ✈️ Thanks for reaching out! What do you want to explore?",
    "quick_replies": [
      { "content_type":"text",
        "title": "Flight Offers",
        "payload": "FLIGHT_OFFERS"
      },
      { "content_type":"text",
        "title": "Talk to Support",
        "payload": "TALK_SUPPORT"
      }
    ] }
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`
        }
      }
    );
    console.log("Reply posted:", response);
  } catch (error) {
    console.error("Error posting reply:", error.response?.data || error.message);
  }
}

module.exports = { replyToComment };
