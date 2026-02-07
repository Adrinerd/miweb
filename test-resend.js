import { Resend } from 'resend';

const resend = new Resend('re_IadqsCuwtvgAJlPEs7w_v3mI3Jdt');

(async () => {
    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'served_by_resend_default@example.com', // Using a safe default or I should use a real email? 
            // In test mode, I can only send to the email address associated with the account.
            // I'll try sending to 'delivered@resend.dev' which is a sink.
            subject: 'Test Email',
            html: '<p>It works!</p>'
        });

        if (error) {
            console.error('Resend Error:', error);
        } else {
            console.log('Resend Success:', data);
        }
    } catch (e) {
        console.error('Script Error:', e);
    }
})();
