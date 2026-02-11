import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Specific Templates
const SIGNUP_TEMPLATE = import.meta.env.VITE_EMAILJS_SIGNUP_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const BOOKING_TEMPLATE = import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const KANIKE_TEMPLATE = import.meta.env.VITE_EMAILJS_KANIKE_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

// Initialize EmailJS
if (PUBLIC_KEY) {
    emailjs.init(PUBLIC_KEY);
}

/**
 * Sends a generic confirmation email to the user.
 * @param {Object} userData - { name, email, subject, message }
 */
const sendEmail = async (userData, templateId) => {
    console.log(`DEBUG: Attempting to send ${userData.subject} to ${userData.email}...`, {
        serviceId: SERVICE_ID,
        templateId: templateId,
        publicKey: PUBLIC_KEY ? 'Present' : 'Missing'
    });

    if (!userData.email) {
        console.error("DEBUG: Destination address (to_email) is EMPTY! Cannot send email.");
        return;
    }

    if (!SERVICE_ID || !templateId || !PUBLIC_KEY) {
        const error = "EmailJS configuration is incomplete. Check your .env file.";
        console.error(error);
        throw new Error(error);
    }

    try {
        const templateParams = {
            to_name: userData.name,
            to_email: userData.email,
            from_name: 'Sri Sode Vadiraja Matha',
            subject: userData.subject,
            message: userData.message
        };

        const response = await emailjs.send(SERVICE_ID, templateId, templateParams);
        console.log(`SUCCESS! [${userData.subject}] sent to ${userData.email}`);
        return response;
    } catch (error) {
        console.error(`FAILED to send [${userData.subject}]:`, error);
        throw error;
    }
};

/**
 * Sends a confirmation email to the user after successful signup.
 */
export const sendConfirmationEmail = async (userData) => {
    return sendEmail({
        ...userData,
        subject: 'Welcome to Sri Sode Vadiraja Matha',
        message: `Namaste ${userData.name},\n\nThank you for registering with Sri Sode Vadiraja Matha. Your account has been successfully created.\n\nYou can now log in to access your profile and book sevas.\n\nBest Regards,\nSri Sode Vadiraja Matha`
    }, SIGNUP_TEMPLATE);
};

/**
 * Sends a confirmation email to the user after a Seva booking.
 */
export const sendBookingConfirmationEmail = async (userData, sevas) => {
    const sevasList = Array.isArray(sevas) ? sevas.join(', ') : sevas;
    return sendEmail({
        ...userData,
        subject: 'Seva Booking Confirmation',
        message: `Namaste ${userData.name},\n\nYour Seva booking for "${sevasList}" has been successfully confirmed. Thank you for your devotion.\n\nBest Regards,\nSri Sode Vadiraja Matha`
    }, BOOKING_TEMPLATE);
};

/**
 * Sends a confirmation email for Kanike/Donation.
 */
export const sendKanikeConfirmationEmail = async (userData, amount) => {
    return sendEmail({
        ...userData,
        subject: 'Kanike Contribution Acknowledged',
        message: `Namaste ${userData.name},\n\nWe have received your Kanike contribution of ₹${amount}. Thank you for your generous support to the Matha.\n\nBest Regards,\nSri Sode Vadiraja Matha`
    }, KANIKE_TEMPLATE);
};
