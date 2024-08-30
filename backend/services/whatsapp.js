const twilio = require('twilio');
const { translate } = require('free-translate');

const id = process.env.id;
const token = process.env.token;
const client = twilio(id, token);

async function sendMessage(messageBody, toNumber, fromNumber = 'whatsapp:+16193199887') {
  try {
    // Translate the text (assuming this is async and returns a promise)
    const translatedMessage = await translate(messageBody, { to: 'te' });

    const message = await client.messages.create({ 
        body: translatedMessage, // Message to be sent 
        from: 'whatsapp:+14155238886', // Sender's Number (Twilio Sandbox No.) 
        to: `whatsapp:+919390038746` // Number receiving the message 
    });


    console.log("Message sent successfully:", message.sid);
    return message;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error; // Re-throw the error to handle it where this function is called
  }
}
module.exports = { sendMessage };