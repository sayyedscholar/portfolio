# Amaanullah Sayyed - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, and TailwindCSS. Features SEO optimization, image optimization, accessibility enhancements, and a functional contact form.

## ✨ Features

- 🎨 Modern, clean, and colorful design with smooth animations
- 🌓 Dark/Light mode toggle with persistent preferences
- 🌍 Multi-language support (English, Hindi, Urdu, Arabic)
- 📝 RTL (Right-to-Left) support for Arabic and Urdu
- 📱 Fully responsive design for all devices
- ⚡ Performance optimized with Next.js Image component
- 🎭 Smooth animations and transitions with Framer Motion
- 📧 Functional contact form with EmailJS integration
- 🔍 SEO optimized with meta tags and Open Graph
- ♿ Accessibility enhanced with ARIA labels and semantic HTML
- 🚀 Easy to deploy to Vercel, Netlify, or any hosting service

## 📋 Sections

- **Hero** - Introduction with animated profile picture and social links
- **About** - Professional background, journey, and core qualities
- **Journey** - Interactive timeline of experience and education with company links
- **Skills** - Technical expertise organized by category with hover effects
- **Projects** - Featured projects with live demos, detailed descriptions, and tech stacks
- **Contact** - Contact information and functional email form

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: TailwindCSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Email Service**: EmailJS
- **Image Optimization**: Next.js Image component

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- EmailJS account (for contact form functionality)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Copy the example environment file:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your EmailJS credentials:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### EmailJS Setup

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name (Amaanullah Sayyed)
4. Get your credentials:
   - Service ID from the Email Services page
   - Template ID from the Email Templates page
   - Public Key from Account > API Keys

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com) and import your repository
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [Netlify](https://netlify.com) and import your repository
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Add environment variables in Netlify dashboard
5. Deploy!

## 🎯 Custom Domain Setup

### Option 1: Using Vercel

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain (e.g., `amaanullah.dev`)
4. Update your domain's DNS settings:
   - Add an A record pointing to Vercel's IP: `76.76.21.21`
   - Or add a CNAME record pointing to `cname.vercel-dns.com`
5. Wait for DNS propagation (can take up to 48 hours)

### Option 2: Using Netlify

1. Go to your site settings in Netlify
2. Navigate to "Domain management"
3. Add your custom domain
4. Update DNS settings as instructed by Netlify
5. Enable HTTPS (automatic with Netlify)

### Recommended Domain Registrars

- [Namecheap](https://www.namecheap.com) - Affordable and reliable
- [Google Domains](https://domains.google) - Easy integration
- [Cloudflare](https://www.cloudflare.com) - Free DNS and CDN

### Update SEO Settings

After setting up your custom domain, update these files:

1. **`app/layout.tsx`** - Update the `url` in OpenGraph metadata:
```typescript
openGraph: {
  url: 'https://yourdomain.com',
  // ...
}
```

2. **`app/layout.tsx`** - Update canonical URL:
```typescript
alternates: {
  canonical: 'https://yourdomain.com',
}
```

## 🔧 Customization

### Update Personal Information

1. **Contact Details** - Edit `app/sections/Contact.tsx`
2. **Social Links** - Edit `app/sections/Hero.tsx`
3. **Projects** - Edit `app/sections/Projects.tsx`
4. **Experience** - Edit `app/sections/Journey.tsx`
5. **Skills** - Edit `app/sections/Skills.tsx`

### Update Profile Picture

Replace `public/profile.jpg` with your own image (recommended size: 400x400px)

### Update Favicon

Replace `public/favicon.svg` with your own icon

### Translations

Edit translation files in `app/i18n/`:
- `en.ts` - English
- `hi.ts` - Hindi
- `ur.ts` - Urdu
- `ar.ts` - Arabic

## 📊 SEO Optimization

The portfolio includes:
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social media previews
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Structured data ready
- ✅ Semantic HTML
- ✅ Image optimization with Next.js Image
- ✅ Sitemap ready (add `sitemap.xml` in public folder)

### Add Google Analytics (Optional)

1. Get your GA4 Measurement ID
2. Add to `app/layout.tsx`:
```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
  strategy="afterInteractive"
/>
```

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Alt text on all images
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 📝 License

© 2024 Amaanullah Sayyed. All rights reserved.

## 📧 Contact

- **Email**: sayyedscholar@gmail.com
- **Phone**: +91 9503240195
- **Location**: Mumbai, India | Dubai, UAE

---

Built with ❤️ using Next.js and TailwindCSS
