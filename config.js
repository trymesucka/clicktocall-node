// Define app configuration in a single location, but pull in values from
// system environment variables (so we don't check them in to source control!)
module.exports = {
    // Twilio Account SID - found on your dashboard
    accountSid: process.env.TWILIO_ACCOUNT_SID || 'AC25d93be2fdef837cf2bf7e04f6a0f1d6',

    // Twilio Auth Token - found on your dashboard
    authToken: process.env.TWILIO_AUTH_TOKEN || '4b97cb9ea95ad403dc4cbb35fe6b83fd',

    // A Twilio number that you have purchased through the twilio.com web
    // interface or API
    twilioNumber: process.env.TWILIO_NUMBER || '+13852432701',

    // The port your web application will run on
    port: process.env.PORT || 3000,
};
