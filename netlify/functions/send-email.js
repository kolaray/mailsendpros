// Netlify Serverless Function to send emails using Brevo (formerly Sendinblue)
// File: netlify/functions/send-email.js

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    const { to_email, template_name, template_html, amount, currency, wallet_address } = JSON.parse(event.body);

    // Validate input
    if (!to_email || !template_html) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields: to_email and template_html are required' })
      };
    }

    // Use Brevo API (free tier: 300 emails/day forever)
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const SENDER_EMAIL = process.env.SENDER_EMAIL || 'noreply@yourdomain.com';
    const SENDER_NAME = process.env.SENDER_NAME || 'Payment Templates';

    if (!BREVO_API_KEY) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'BREVO_API_KEY not configured in environment variables' })
      };
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        sender: {
          name: SENDER_NAME,
          email: SENDER_EMAIL
        },
        to: [
          {
            email: to_email
          }
        ],
        subject: `Payment Notification - ${template_name || 'Transaction'}`,
        htmlContent: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 20px; background-color: #f5f5f5; font-family: Arial, sans-serif;">
            ${template_html}
          </body>
          </html>
        `
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Brevo API error:', data);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ 
          error: data.message || 'Failed to send email',
          details: data
        })
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        messageId: data.messageId 
      })
    };

  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      })
    };
  }
};
