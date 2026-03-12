const twilio = require('twilio');

let twilioClient = null;

if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
    twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
}

const sendSms = async (phone, message) => {
    if (twilioClient && process.env.TWILIO_PHONE_NUMBER) {
        try {
            await twilioClient.messages.create({
                body: message,
                from: process.env.TWILIO_PHONE_NUMBER,
                to: phone
            });
            console.log(`✅ SMS sent to ${phone}`);
            return { success: true };
        } catch (err) {
            console.error('❌ Twilio Error:', err.message);
            console.log('⚠️ FALLBACK: SMS failed, message simulated in console: ', message);
            return { success: false, fallback: true };
        }
    } else {
        console.warn(`⚠️ Twilio credentials missing. Logging to console for ${phone}: ${message}`);
        return { success: false, consoleOnly: true };
    }
};

module.exports = { sendSms };
