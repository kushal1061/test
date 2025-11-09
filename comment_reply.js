const axios = require('axios');

const HOST_URL = "graph.instagram.com";
const IG_COMMENT_ID = "<IG_COMMENT_ID>";
const ACCESS_TOKEN = "IGAASedoy93TZABZAFRhU3ZAtM2xIQXpQUVRUeTdKQTA1a3JTOW92OWluU3RCUjd1OTRwMjZA6T0dkYThwRkQ4ODdDck1GZA0F1SFZAPaWp2aVZAnSGhLS19maF9OWWptZAjJNLVowOE1HQ2JUbXhEcjR5Y1J4NDN6LVdIazMyY0F4UnJmSQZDZD"; 
// const              IGAASedoy93TZABZAFRhU3ZAtM2xIQXpQUVRUeTdKQTA1a3JTOW92OWluU3RCUjd1OTRwMjZA6T0dkYThwRkQ4ODdDck1GZA0F1SFZAPaWp2aVZAnSGhLS19maF9OWWptZAjJNLVowOE1HQ2JUbXhEcjR5Y1J4NDN6LVdIazMyY0F4UnJmSQZDZD// if needed for authentication
// const userId = "17841477915554405";
const userId ="17841449485648739";
async function replyToComment(commentId) {
  const url = `https://${HOST_URL}/v24.0/${userId}/messages`;
  try {
    const response = await axios.post(
      url,
      {
        recipient: { comment_id: commentId },
        message: { text: "Hey ✈️ Thanks for reaching out! What do you want to explore?",
    "reply_options": [
      {
        "title": "Dubai 🕌",
        "id": "OPTION_DUBAI"
      },
      {
        "title": "Singapore 🏙️",
        "id": "OPTION_SINGAPORE"
      },
      {
        "title": "Maldives 🏝️",
        "id": "OPTION_MALDIVES"
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