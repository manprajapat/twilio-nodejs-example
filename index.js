const {accountSid, authToken} = process.env;
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: "Simple Test Message", 
         from: '+1xxxxxxxxx',       
         to: '+91xxxxxxxxx' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();