// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
      .recordings
      .create({
         recordingStatusCallback: 'https://myapp.com/recording-events',
         recordingStatusCallbackEvent: 'in-progress completed',
         recordingChannels: 'dual'
       })
      .then(recording => console.log(recording.sid));
