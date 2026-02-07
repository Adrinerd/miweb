// @ts-nocheck
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Initialize inside handler for safety if needed, but standard practice is outside for reuse.
// However, to avoid initialization errors before handler execution, we can do it inside or wrap in try-catch.

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

    console.log('API Invoked: /api/request-assessment');

    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        const supabaseUrl = process.env.SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_ANON_KEY;
        const resendApiKey = process.env.RESEND_API_KEY;

        console.log('Environment Check:', {
            hasSupabaseUrl: !!supabaseUrl,
            hasSupabaseKey: !!supabaseKey,
            hasResendKey: !!resendApiKey
        });

        if (!supabaseUrl || !supabaseKey || !resendApiKey) {
            console.error('Missing environment variables');
            return res.status(500).json({ error: 'Server configuration error' });
        }

        const supabase = createClient(supabaseUrl, supabaseKey);
        const resend = new Resend(resendApiKey);

        console.log('Step 1: Inserting into Supabase...');
        const { error: dbError } = await supabase
            .from('leads')
            .insert([{ email, created_at: new Date().toISOString() }]);

        if (dbError) {
            console.error('Supabase Error:', dbError);
            // Don't fail the whole request if just DB logging fails, but maybe we should?
            // Let's log it and continue to send email.
        } else {
            console.log('Supabase Insert Success');
        }

        console.log('Step 2: Sending email via Resend...');
        const { data, error: emailError } = await resend.emails.send({
            from: 'onboarding@resend.dev', // Default testing domain
            to: [email],
            subject: 'Your GutArchitect Root Cause Analysis',
            html: `<p>Thank you for your interest! Here is your requested PDF.</p>`,
            attachments: [
                {
                    filename: 'GutArchitect_Root_Cause_Analysis.pdf',
                    path: PDF_URL,
                },
            ],
        });

        if (emailError) {
            console.error('Resend Error:', emailError);
            return res.status(500).json({ error: 'Failed to send email', details: emailError });
        }

        console.log('Email Sent Success:', data);
        return res.status(200).json({ message: 'Success', id: data?.id });

    } catch (error: any) {
        console.error('CRITICAL EXTENDED HANDLER ERROR:', error);
        return res.status(500).json({
            error: 'Internal Server Error',
            message: error.message,
            stack: error.stack
        });
    }
}
