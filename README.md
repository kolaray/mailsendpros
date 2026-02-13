# Email Template Sender with Brevo Integration

🚀 Professional email template sender for payment notifications across 14 major platforms.

## Features

✨ **14 Payment Platform Templates**
- Binance, PayPal, Skrill, Trust Wallet, Wise
- Cash App, Bybit, MetaMask, Venmo, Coinbase
- Zelle, OKX, GCash, Chime

📧 **Dual Email System**
- Send receiver notification ("You received $X")
- Send sender confirmation ("You sent $X to [Name]")
- Both emails sent simultaneously

🎨 **Professional Designs**
- Mobile-responsive templates
- Platform-authentic styling
- Customizable amounts and currencies

## Quick Start

### 1. Setup Brevo (5 minutes)
- Create account at https://brevo.com (free)
- Get API key from SMTP & API settings
- Verify your sender email

### 2. Deploy to Netlify (5 minutes)
- Push files to GitHub
- Connect to Netlify
- Add environment variables:
  - `BREVO_API_KEY`
  - `SENDER_EMAIL`
  - `SENDER_NAME`

### 3. Start Sending! 🎉
- Open your Netlify site
- Fill in recipient and sender details
- Click "Send Both Emails"

## Full Documentation

📖 **[Complete Deployment Guide](NETLIFY_DEPLOYMENT_GUIDE.md)**

Detailed step-by-step instructions with screenshots and troubleshooting.

## Project Structure

```
├── index.html                     # Main application
├── netlify.toml                   # Netlify configuration
├── package.json                   # Dependencies
├── NETLIFY_DEPLOYMENT_GUIDE.md   # Full setup guide
└── netlify/
    └── functions/
        └── send-email.js          # Email API endpoint
```

## Environment Variables

Required in Netlify:

```bash
BREVO_API_KEY=xkeysib-your-api-key-here
SENDER_EMAIL=noreply@yourdomain.com
SENDER_NAME=Payment Templates
```

## Usage Limits

### Free Tier (Forever)
- **Brevo**: 300 emails/day
- **Netlify**: 125,000 function calls/month
- **Cost**: $0.00 🎉

## Support

- **Brevo Docs**: https://developers.brevo.com/
- **Netlify Docs**: https://docs.netlify.com/
- **Issue?** Check [Deployment Guide](NETLIFY_DEPLOYMENT_GUIDE.md) troubleshooting section

## License

MIT License - Feel free to use and modify!

---

Made with ❤️ for the email template community
