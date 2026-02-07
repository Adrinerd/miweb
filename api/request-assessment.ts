import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Initialize clients outside of handler for caching
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const resendApiKey = process.env.RESEND_API_KEY;

const PDF_URL = 'https://bawxawmhjsllrmtadtmd.supabase.co/storage/v1/object/public/gut%20architect/GutArchitect%20Root%20Cause%20Analysis.pdf';

export default async function handler(req: any, res: any) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        if (!supabaseUrl || !supabaseKey || !resendApiKey) {
            console.error('Missing environment variables');
            return res.status(500).json({ error: 'Server configuration error' });
        }

        const supabase = createClient(supabaseUrl, supabaseKey);
        const resend = new Resend(resendApiKey);

        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        // 1. Store in Supabase
        const { error: dbError } = await supabase
            .from('leads')
            .insert([{ email }]);

        if (dbError) {
            console.error('Supabase error:', dbError);
            return res.status(500).json({ error: 'Failed to capture lead' });
        }

        // 2. Send Email
        const { error: emailError } = await resend.emails.send({
            from: 'GutArchitect <onboarding@resend.dev>',
            to: [email],
            subject: 'Your GutArchitect Root Cause Assessment',
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #0f172a; margin-bottom: 24px;">Your Assessment is Here</h1>
          <p style="color: #475569; font-size: 16px; line-height: 1.5; margin-bottom: 24px;">
            Thank you for requesting the GutArchitect Root Cause Assessment. Click the button below to view and download your PDF guide.
          </p>
          <a href="${PDF_URL}" style="display: inline-block; padding: 12px 24px; background-color: #0f172a; color: white; text-decoration: none; border-radius: 6px; font-weight: 500;">
            Download Assessment PDF
          </a>
          <p style="margin-top: 32px; font-size: 12px; color: #94a3b8;">
            If the button doesn't work, copy this link: <br>
            <a href="${PDF_URL}" style="color: #64748b;">${PDF_URL}</a>
          </p>
        </div>
      `,
        });

        if (emailError) {
            console.error('Resend error:', emailError);
            return res.status(500).json({ error: 'Failed to send email' });
        }

        return res.status(200).json({ success: true });

    } catch (error: any) {
        console.error('Handler error:', error);
        return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
}
