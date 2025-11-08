const axios = require('axios');

const HOST_URL = "graph.instagram.com";
const IG_COMMENT_ID = "<IG_COMMENT_ID>";
const ACCESS_TOKEN = "IGAASedoy93TZABZAFN0QnlpZAFhlSU5LaFE4Q3dTNXM2U2g2Rm1FUWtyUmdFX3oyZAUFyUURVWFl5UVpwTTJLWG5ZAQ05YYW1hSnlPMW1ZAazEzVmFMdmRWMUIxdTdVaVA2XzdfM1A4SGlhYjc1TXpBQ2drb2pPMXRjYkJQNllVSFFDRQZDZD"; // if needed for authentication
async function replyToComment(commentId,userId) {
  const url = `https://${HOST_URL}/v24.0/${userId}/messages`;
  try {
    const response = await axios.post(
      url,
      {
        recipient: { comment_id: commentId },
        message: { text: replyText }
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`
        }
      }
    );
    console.log("Reply posted:", response.data);
  } catch (error) {
    console.error("Error posting reply:", error.response?.data || error.message);
  }
}

module.exports = { replyToComment };