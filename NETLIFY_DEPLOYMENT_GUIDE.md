# 🚀 NETLIFY DEPLOYMENT GUIDE WITH BREVO EMAIL

Complete step-by-step guide to deploy your email template sender on Netlify with Brevo email service.

---

## 📋 PREREQUISITES

- GitHub account
- Netlify account (free - sign up at https://netlify.com)
- Brevo account (free - sign up at https://brevo.com)

---

## PART 1: SETUP BREVO EMAIL SERVICE (FREE 300 EMAILS/DAY)

### Step 1: Create Brevo Account

1. Go to **https://www.brevo.com/**
2. Click **"Sign up free"**
3. Complete registration with your email
4. Verify your email address (check your inbox)
5. Complete the onboarding survey:
   - Select **"Transactional emails"** as your primary use case
   - Skip other optional steps

### Step 2: Get Your Brevo API Key

1. Log into your Brevo dashboard
2. Click your **profile name** in the top right corner
3. Select **"SMTP & API"**
4. Scroll down to the **"API Keys"** section
5. Click **"Generate a new API key"**
6. Name it: **"Netlify Email Sender"**
7. Copy the API key (starts with `xkeysib-...`)
8. ⚠️ **IMPORTANT**: Save this key somewhere safe - you won't be able to see it again!

### Step 3: Verify Your Sender Email (REQUIRED!)

**You MUST verify at least one email address before sending emails:**

#### Option A: Single Sender Email (Easiest - Recommended)
1. In Brevo dashboard, go to **"Senders, Domains & Dedicated IPs"**
2. Click **"Add a new sender"**
3. Enter your email address (e.g., `noreply@gmail.com` or your custom email)
4. Click **"Add"**
5. Brevo will send you a **verification email**
6. Open your email and click the **verification link**
7. ✅ Your sender email is now verified!

#### Option B: Verify Custom Domain (Advanced)
1. Go to **"Senders, Domains & Dedicated IPs"** > **"Domains"**
2. Click **"Add a domain"**
3. Enter your domain (e.g., `yourdomain.com`)
4. Add the DNS records Brevo provides to your domain's DNS settings
5. Wait for verification (usually 5-30 minutes)

---

## PART 2: PREPARE YOUR PROJECT FILES

### Files You Need:

```
your-project/
├── index.html                          (your main HTML file)
├── netlify.toml                        (Netlify config)
├── package.json                        (dependencies)
└── netlify/
    └── functions/
        └── send-email.js               (serverless function)
```

All these files are included in your download. Just make sure they're all in your project folder.

---

## PART 3: DEPLOY TO NETLIFY

### Method 1: Deploy via GitHub (Recommended - Easiest)

#### Step 1: Push to GitHub

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name it: `email-template-sender`
   - Make it **Public** or **Private** (your choice)
   - Click **"Create repository"**

2. Upload your files to GitHub:
   - Click **"uploading an existing file"**
   - Drag and drop ALL your project files:
     - `index.html`
     - `netlify.toml`
     - `package.json`
     - `netlify/functions/send-email.js`
   - Click **"Commit changes"**

#### Step 2: Connect to Netlify

1. Go to **https://app.netlify.com/**
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub
5. Select your repository: **`email-template-sender`**
6. Configure build settings:
   - **Build command**: Leave empty (or remove if pre-filled)
   - **Publish directory**: `.` (root)
   - Click **"Deploy site"**

#### Step 3: Add Environment Variables in Netlify

1. Go to your site dashboard on Netlify
2. Click **"Site configuration"** (or **"Site settings"**)
3. Click **"Environment variables"** in the left sidebar
4. Click **"Add a variable"** and add these THREE variables:

   **Variable 1:**
   - Key: `BREVO_API_KEY`
   - Value: `xkeysib-YOUR-API-KEY-HERE` (paste your Brevo API key)
   - Scopes: Select "All scopes"
   
   **Variable 2:**
   - Key: `SENDER_EMAIL`
   - Value: `noreply@yourdomain.com` (your verified sender email)
   - Scopes: Select "All scopes"
   
   **Variable 3:**
   - Key: `SENDER_NAME`
   - Value: `Payment Templates` (or your preferred sender name)
   - Scopes: Select "All scopes"

5. Click **"Save"** after adding each variable

#### Step 4: Redeploy to Apply Changes

1. Go to **"Deploys"** tab
2. Click **"Trigger deploy"** → **"Deploy site"**
3. Wait for deployment to complete (usually 1-2 minutes)
4. Your site is live! 🎉

---

### Method 2: Deploy via Netlify CLI (Advanced)

#### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

#### Step 2: Login to Netlify

```bash
netlify login
```

This will open your browser to authenticate.

#### Step 3: Deploy

In your project folder, run:

```bash
netlify deploy --prod
```

Follow the prompts:
- Create a new site or link to existing
- Publish directory: `.` (press Enter)

#### Step 4: Add Environment Variables

```bash
netlify env:set BREVO_API_KEY "xkeysib-your-api-key-here"
netlify env:set SENDER_EMAIL "noreply@yourdomain.com"
netlify env:set SENDER_NAME "Payment Templates"
```

---

## PART 4: TEST YOUR DEPLOYMENT

### Step 1: Access Your Site

Your site will be available at: `https://your-site-name.netlify.app`

### Step 2: Test Sending Emails

1. Open your deployed site
2. Select a template (e.g., PayPal, Binance, etc.)
3. Fill in:
   - **Recipient Email**: Enter a test email (your own email)
   - **Recipient Name**: Test User
   - **Sender Email**: Another test email
   - **Amount**: 500
4. Click **"📧📧 Send Both Emails"**
5. Check your inbox for both emails!

### Step 3: Verify Email Delivery

✅ **Success indicators:**
- Green success message appears
- Both emails arrive in inbox (might take 30 seconds)
- Emails look properly formatted

❌ **If emails don't arrive:**
- Check spam/junk folder
- Verify sender email is verified in Brevo
- Check Netlify function logs (see troubleshooting below)

---

## 🔧 TROUBLESHOOTING

### Issue: "API key not configured"

**Solution:**
1. Go to Netlify dashboard → Site settings → Environment variables
2. Verify `BREVO_API_KEY` is set correctly
3. Make sure there are no extra spaces
4. Redeploy your site

### Issue: "Sender email not verified"

**Solution:**
1. Go to Brevo dashboard → Senders, Domains & Dedicated IPs
2. Verify your sender email is listed and has a ✅ checkmark
3. If not, click "Add a new sender" and verify it
4. Make sure `SENDER_EMAIL` in Netlify matches exactly

### Issue: Emails going to spam

**Solution:**
1. Make sure sender email is verified in Brevo
2. Use a professional-looking sender name
3. For custom domains, add SPF and DKIM records (provided by Brevo)
4. Avoid sending too many emails too quickly

### Issue: Function not found / 404 error

**Solution:**
1. Make sure `netlify.toml` is in the root of your project
2. Verify the `netlify/functions/send-email.js` file exists
3. Redeploy your site
4. Check Netlify function logs

### How to Check Function Logs

1. Go to Netlify dashboard
2. Click **"Functions"** tab
3. Click on **"send-email"**
4. View real-time logs to see errors

---

## 📊 USAGE LIMITS

### Brevo Free Tier:
- **300 emails per day** (forever free)
- Resets at midnight UTC
- No credit card required
- No expiration

### Netlify Free Tier:
- 100GB bandwidth/month
- 300 build minutes/month
- 125,000 serverless function invocations/month
- More than enough for most use cases!

---

## 🎯 NEXT STEPS

### Custom Domain (Optional)

1. Buy a domain from Namecheap, GoDaddy, etc.
2. In Netlify: Site settings → Domain management → Add custom domain
3. Follow the DNS configuration instructions
4. Your site will be available at `yourdomain.com`

### Update Your Site

After making changes to your HTML:

**If using GitHub:**
1. Commit and push changes to GitHub
2. Netlify will automatically rebuild

**If using CLI:**
```bash
netlify deploy --prod
```

---

## 📝 IMPORTANT NOTES

1. **Sender Verification is REQUIRED** - You cannot send emails until you verify at least one sender email in Brevo
2. **Environment Variables** - Make sure all three variables are set in Netlify
3. **Daily Limits** - Free tier allows 300 emails/day on Brevo
4. **Spam Protection** - Gmail/Yahoo might initially flag emails; verified domains help
5. **Function Timeout** - Netlify functions timeout after 10 seconds (plenty of time)

---

## 🆘 NEED HELP?

### Check These Resources:
- **Netlify Docs**: https://docs.netlify.com/
- **Brevo Docs**: https://developers.brevo.com/
- **Netlify Support**: https://answers.netlify.com/

### Common Questions:

**Q: Can I use a free Gmail/Yahoo email as sender?**
A: Yes! Just verify it in Brevo. However, custom domain emails have better deliverability.

**Q: How long do emails take to arrive?**
A: Usually 5-30 seconds. Check spam folder if not arriving.

**Q: Can I send more than 300 emails/day?**
A: Free tier is limited to 300. Upgrade Brevo plan for more.

**Q: Is my API key secure?**
A: Yes! Netlify environment variables are encrypted and never exposed to the browser.

---

## ✅ DEPLOYMENT CHECKLIST

- [ ] Brevo account created
- [ ] Brevo API key generated and saved
- [ ] Sender email verified in Brevo
- [ ] GitHub repository created
- [ ] All project files uploaded to GitHub
- [ ] Netlify site created and connected to GitHub
- [ ] Three environment variables added in Netlify:
  - [ ] BREVO_API_KEY
  - [ ] SENDER_EMAIL
  - [ ] SENDER_NAME
- [ ] Site redeployed after adding environment variables
- [ ] Test email sent successfully
- [ ] Both sender and receiver emails received

---

## 🎉 CONGRATULATIONS!

Your email template sender is now live on Netlify with Brevo email integration!

**Your site URL**: `https://your-site-name.netlify.app`

You can now send professional payment notification emails to anyone! 📧✨
