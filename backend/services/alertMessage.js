// services/alertmessage.js

const { sendMessage } = require('./whatsapp');



const sendAlertMessage = (message) => {
    // Replace the console log with actual message sending logic
    sendMessage(message, '+919390038746')
    //console.log(`Alert sent to farmer: ${message}`);
  };
  
  module.exports = { sendAlertMessage };
  