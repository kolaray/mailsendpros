# ⚡ QUICK START - 10 MINUTES TO LIVE SITE

## ✅ CHECKLIST

### PART 1: BREVO SETUP (3 minutes)

- [ ] Go to https://brevo.com and sign up (free)
- [ ] Verify your email address
- [ ] Click your name → "SMTP & API"
- [ ] Click "Generate a new API key" → Name it "Netlify"
- [ ] **COPY AND SAVE YOUR API KEY** (starts with xkeysib-)
- [ ] Go to "Senders, Domains & Dedicated IPs"
- [ ] Click "Add a new sender" → Enter your email
- [ ] Check your email → Click verification link
- [ ] ✅ Sender verified!

### PART 2: GITHUB UPLOAD (2 minutes)

- [ ] Go to https://github.com/new
- [ ] Name: `email-template-sender`
- [ ] Click "Create repository"
- [ ] Click "uploading an existing file"
- [ ] Drag ALL files from your `netlify-deployment` folder:
  - [ ] index.html
  - [ ] netlify.toml
  - [ ] package.json
  - [ ] README.md
  - [ ] .gitignore
  - [ ] .env.example
  - [ ] netlify/ folder (with functions inside)
- [ ] Click "Commit changes"

### PART 3: NETLIFY DEPLOY (5 minutes)

- [ ] Go to https://app.netlify.com
- [ ] Click "Add new site" → "Import an existing project"
- [ ] Choose "Deploy with GitHub"
- [ ] Select your `email-template-sender` repository
- [ ] Leave build settings empty
- [ ] Click "Deploy site"
- [ ] Wait for deployment (1-2 minutes)
- [ ] Click "Site configuration" (or "Site settings")
- [ ] Click "Environment variables"
- [ ] Add these 3 variables:

#### Variable 1:
```
Key: BREVO_API_KEY
Value: xkeysib-your-actual-key-here
```

#### Variable 2:
```
Key: SENDER_EMAIL
Value: your-verified-email@domain.com
```

#### Variable 3:
```
Key: SENDER_NAME
Value: Payment Templates
```

- [ ] Click "Deploys" tab
- [ ] Click "Trigger deploy" → "Deploy site"
- [ ] Wait for redeployment

### PART 4: TEST IT! (1 minute)

- [ ] Click on your site URL (https://your-site.netlify.app)
- [ ] Select a template (e.g., PayPal)
- [ ] Fill in:
  - Recipient Email: your-email@example.com
  - Recipient Name: Test User
  - Sender Email: another-email@example.com
  - Amount: 500
- [ ] Click "📧📧 Send Both Emails"
- [ ] Check your inbox (both emails should arrive!)

---

## 🎉 DONE!

Your site is LIVE and sending emails!

**Your URL**: https://your-site-name.netlify.app

### What You Get:

✅ 300 emails/day FREE FOREVER  
✅ 14 professional payment templates  
✅ Dual email system (sender + receiver)  
✅ Mobile responsive  
✅ No credit card needed  
✅ No expiration  

---

## 🆘 Having Issues?

### Problem: API key error
→ Double-check your BREVO_API_KEY has no spaces  
→ Make sure it starts with "xkeysib-"  
→ Regenerate the key in Brevo if needed

### Problem: Sender email not verified
→ Go to Brevo → Senders, Domains & Dedicated IPs  
→ Make sure your email has a ✅ checkmark  
→ Check that SENDER_EMAIL matches exactly

### Problem: Emails not arriving
→ Check spam/junk folder  
→ Wait 1-2 minutes (sometimes delayed)  
→ Verify sender email is confirmed in Brevo

### Problem: Function not found
→ Make sure netlify.toml is in root folder  
→ Make sure netlify/functions/send-email.js exists  
→ Redeploy your site

---

## 📚 Need More Help?

Read the full guide: **NETLIFY_DEPLOYMENT_GUIDE.md**

It has detailed screenshots, troubleshooting, and FAQs!

---

## 🔗 Important Links

- **Your Netlify Dashboard**: https://app.netlify.com
- **Your Brevo Dashboard**: https://app.brevo.com
- **Your GitHub Repo**: https://github.com/yourusername/email-template-sender

---

Happy Sending! 📧✨
