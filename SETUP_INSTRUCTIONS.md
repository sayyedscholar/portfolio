# Portfolio Setup Instructions

## 🚀 Quick Start Guide

Follow these steps to get your portfolio up and running:

### 1. Install Dependencies

You need to run this command to install the EmailJS package that was added:

```bash
npm install
```

**Note**: If you encounter PowerShell execution policy errors on Windows, run PowerShell as Administrator and execute:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 2. Configure EmailJS

The contact form now uses EmailJS to send emails. Follow these steps:

#### A. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

#### B. Add Email Service
1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the authentication steps
5. Note down your **Service ID**

#### C. Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template structure:

**Subject**: New Contact from {{from_name}}

**Content**:
```
Hello {{to_name}},

You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

#### D. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (also called API Key)
3. Copy it

#### E. Configure Environment Variables
1. Create a file named `.env.local` in the root directory
2. Add your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the values with your actual credentials from EmailJS.

### 3. Test the Application

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and test:
- ✅ All pages load correctly
- ✅ Dark/light mode toggle works
- ✅ Language switcher works
- ✅ Contact form submits successfully
- ✅ Animations are smooth

### 4. Build for Production

Before deploying, test the production build:
```bash
npm run build
npm start
```

## 📝 What Was Improved

### ✅ SEO Enhancements
- **Meta Tags**: Added comprehensive meta tags including description, keywords, author
- **Open Graph**: Full Open Graph support for social media previews (Facebook, LinkedIn)
- **Twitter Cards**: Twitter Card meta tags for better Twitter sharing
- **Canonical URLs**: Added canonical URL for SEO
- **Robots**: Configured robots meta for search engine crawling
- **Verification**: Added Google verification placeholder

**Files Modified**: `app/layout.tsx`

### ✅ Performance Optimization
- **Next.js Image**: Replaced `<img>` tags with Next.js `<Image>` component
- **Priority Loading**: Profile image loads with priority for faster LCP
- **Automatic Optimization**: Images are automatically optimized and served in modern formats

**Files Modified**: `app/sections/Hero.tsx`

### ✅ Accessibility Improvements
- **Alt Text**: Descriptive alt text on profile image
- **ARIA Labels**: Added aria-label and title attributes to links
- **Semantic HTML**: Improved heading hierarchy (h1 → h2 → h3)
- **Keyboard Navigation**: All interactive elements are keyboard accessible

**Files Modified**: `app/sections/Hero.tsx`, `app/sections/About.tsx`

### ✅ Project Enhancements
- **Detailed Descriptions**: Enhanced project descriptions with tech stack details
- **Live Demo Links**: Added demo URLs where available
- **GitHub Links**: Placeholder for GitHub repository links
- **Visual Indicators**: Color-coded badges for demo and GitHub links
- **Better UX**: Links open in new tabs with proper security attributes

**Files Modified**: `app/sections/Projects.tsx`

### ✅ UI Polish
- **Hover Animations**: Added smooth hover effects on cards and buttons
- **Transitions**: Implemented CSS transitions for better interactivity
- **Scale Effects**: Cards lift and scale on hover
- **Glow Effects**: Subtle glow animations on interactive elements
- **Custom Animations**: Added fade-in, slide-in animations via CSS

**Files Modified**: `app/globals.css`, `app/sections/Skills.tsx`

### ✅ Functional Contact Form
- **EmailJS Integration**: Contact form now sends real emails
- **Error Handling**: Proper error messages and success feedback
- **Validation**: Form validation with helpful error messages
- **Fallback**: Graceful fallback if EmailJS is not configured
- **Visual Feedback**: Color-coded success/error messages

**Files Modified**: `app/sections/Contact.tsx`, `package.json`

### ✅ Documentation
- **Comprehensive README**: Detailed setup and deployment instructions
- **Custom Domain Guide**: Step-by-step custom domain setup
- **EmailJS Setup**: Complete EmailJS configuration guide
- **Deployment Options**: Instructions for Vercel and Netlify
- **Customization Guide**: How to personalize the portfolio

**Files Modified**: `README.md`

## 🌐 Deployment Checklist

Before deploying to production:

- [ ] Install dependencies: `npm install`
- [ ] Configure EmailJS credentials in `.env.local`
- [ ] Test contact form functionality
- [ ] Update personal information in all sections
- [ ] Replace profile picture (`public/profile.jpg`)
- [ ] Update social media links in Hero section
- [ ] Test production build: `npm run build`
- [ ] Choose hosting platform (Vercel/Netlify)
- [ ] Add environment variables to hosting platform
- [ ] Deploy!
- [ ] (Optional) Set up custom domain
- [ ] (Optional) Add Google Analytics
- [ ] (Optional) Submit sitemap to Google Search Console

## 🎯 Custom Domain Setup

### Recommended: amaanullah.dev

1. **Purchase Domain**
   - Go to [Namecheap](https://www.namecheap.com) or [Google Domains](https://domains.google)
   - Search for `amaanullah.dev`
   - Complete purchase

2. **Configure DNS (Vercel)**
   - In Vercel project settings → Domains
   - Add `amaanullah.dev`
   - Add DNS records as instructed:
     - Type: A, Name: @, Value: 76.76.21.21
     - Type: CNAME, Name: www, Value: cname.vercel-dns.com

3. **Update Portfolio**
   - Edit `app/layout.tsx`
   - Change `url: 'https://amaanullah.dev'` in openGraph
   - Change `canonical: 'https://amaanullah.dev'` in alternates

4. **Wait for Propagation**
   - DNS changes can take 24-48 hours
   - Check status: [https://dnschecker.org](https://dnschecker.org)

## 🐛 Troubleshooting

### Contact Form Not Working
- Verify EmailJS credentials are correct
- Check browser console for errors
- Ensure environment variables are set in hosting platform
- Test EmailJS credentials directly on EmailJS dashboard

### Images Not Loading
- Ensure `public/profile.jpg` exists
- Check image file size (should be < 5MB)
- Verify Next.js Image component syntax

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Clear `.next` folder: `rm -rf .next`
- Try `npm run build` again

### Styling Issues
- The CSS warnings about `@tailwind` and `@apply` are normal for Tailwind CSS
- They don't affect functionality
- Clear browser cache if styles aren't updating

## 📞 Support

If you need help:
1. Check the [README.md](README.md) for detailed documentation
2. Review Next.js documentation: [https://nextjs.org/docs](https://nextjs.org/docs)
3. Check EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)

---

**Good luck with your portfolio! 🚀**
