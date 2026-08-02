# 🚀 Personal Portfolio Website - Piyush Singhal

A modern, fully-featured personal portfolio website built with React, featuring smooth animations, beautiful UI components, and integrated backend services for contact form functionality.

## ✨ Features

### 📄 Pages
- 🏠 **Home Page** - Eye-catching hero section with animated profile image, floating shapes, and clickable scroll indicator
- 👤 **About Page** - Personal introduction with dynamic statistics cards and resume download functionality
- 💻 **Skills Page** - Interactive skill bars with smooth progress animations showcasing technical expertise
- 🚀 **Projects Page** - 9 real projects with live demos, GitHub links, and detailed descriptions
- 🎓 **Education Page** - Timeline view of academic background and professional internship experience
- 📧 **Contact Page** - Fully functional contact form with Supabase database integration and EmailJS notifications

### 🎯 Advanced Features
- 🌓 **Light/Dark Mode** - Seamless theme switching with smooth transitions and localStorage persistence
- 📊 **Scroll Progress Bar** - Visual indicator showing page scroll progress
- ✨ **Particle Background** - Animated particle system with connecting lines for visual appeal
- 🎨 **Gradient Animations** - Dynamic gradient effects throughout the site
- 📱 **Fully Responsive** - Optimized for all devices from mobile to desktop
- 🎭 **Framer Motion Animations** - Professional animations on all page elements
- 🔝 **Scroll to Top** - Automatic scroll to top on page navigation
- 🦶 **Modern Footer** - Comprehensive footer with newsletter signup, quick links, and contact info
- 🔄 **Theme Persistence** - User theme preference saved across sessions
- 📧 **Email Notifications** - Automatic email alerts via EmailJS when contact form is submitted
- 💾 **Database Integration** - Contact form submissions stored in Supabase database

### 🗄️ Backend Integration
- **Supabase** - PostgreSQL database for storing contact form submissions
- **EmailJS** - Automated email notifications for new contact form entries
- **Form Validation** - Client-side validation for all form fields

## 🛠️ Technologies Used

- **Frontend Framework:** React 18
- **Routing:** React Router DOM
- **Animations:** Framer Motion
- **Build Tool:** Vite
- **Styling:** CSS3 with custom properties
- **Database:** Supabase (PostgreSQL)
- **Email Service:** EmailJS
- **Deployment Ready:** Optimized for production builds

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup Steps

1. **Clone the repository:**
```bash
git clone https://github.com/piyush06singhal/Portfolio_Website.git
cd Portfolio_Website
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure Environment Variables (optional):**
`src/config/services.js` falls back to working defaults, so the site runs
without a `.env`. To point it at your own Supabase/EmailJS projects, copy
`.env.example` to `.env` and fill in:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

> **Note:** Vite inlines `VITE_*` variables into the built bundle, so these are
> visible to anyone who views source. That's expected for a Supabase *anon*
> key — it's protected by row-level security, not secrecy. Never put a
> `service_role` key here.

4. **Set up the Supabase Database:**
Run `supabase_setup.sql` in your Supabase SQL editor. It creates two tables:
`contact_messages` (contact form) and `newsletter_subscribers` (footer signup),
each with row-level security allowing public inserts and authenticated reads.

5. **Start the development server:**
```bash
npm run dev
```

6. **Build for production:**
```bash
npm run build
```

7. **Preview production build:**
```bash
npm run preview
```

## 🎨 Customization Guide

### Update Personal Information

1. **Home Page** (`src/pages/Home.jsx`):
   - Update name: Change "Piyush Singhal" to your name
   - Modify title: Update "Computer Science Engineering Student"
   - Edit hero description
   - Replace profile image in `/public` folder

2. **About Page** (`src/pages/About.jsx`):
   - Edit the "Who Am I?" section text
   - Update statistics: Years Experience, Projects Completed, Technologies, Certifications
   - Replace resume file: Update `/public/Piyush_Singhal_Resume.pdf` with your resume
   - Change profile image path

3. **Skills Page** (`src/pages/Skills.jsx`):
   - Add/remove skills in each category (Frontend, Backend, Tools & Technologies)
   - Adjust skill proficiency levels (0-100)
   - Modify skill categories as needed

4. **Projects Page** (`src/pages/Projects.jsx`):
   - Update all 9 project cards with your own projects
   - Add project descriptions, technologies, images
   - Update live demo and GitHub repository links
   - Replace project images in `/public` folder

5. **Education Page** (`src/pages/Education.jsx`):
   - Update degree, institution, period, CGPA
   - Modify education timeline
   - Add/update internship experiences
   - Change technologies used in internships

6. **Contact Page** (`src/pages/Contact.jsx`):
   - Update email: piyush.singhal.2004@gmail.com
   - Change phone: +91 9694984312
   - Modify location: Rajasthan, India
   - Update social media links (LinkedIn, GitHub, Instagram, Twitter)
   - Change availability status

7. **Footer** (`src/components/Footer.jsx`):
   - Update contact information
   - Modify social media links
   - Change newsletter subscription text

### Color Scheme

Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary: #6366f1;
  --secondary: #8b5cf6;
  --accent: #ec4899;
  /* ... more colors */
}
```

## 📁 Project Structure

```
portfolio/
├── assets-src/                       # Full-res originals (never deployed)
├── public/                           # Served as-is; optimised assets only
│   ├── favicon.svg
│   ├── og-image.jpg                  # Social share card (1200x630)
│   ├── about-portrait.webp           # Generated by `npm run images`
│   ├── hero-portrait.webp
│   ├── _redirects                    # Netlify SPA fallback
│   ├── Piyush_Singhal_Resume.pdf
│   └── [project-images]
├── scripts/
│   ├── gen-icons.cjs                 # Extracts brand paths from simple-icons
│   ├── optimize-images.cjs           # Resizes/compresses to WebP
│   └── spa-fallback.cjs              # Copies index.html -> 404.html
├── src/
│   ├── components/
│   │   ├── Navbar / Footer / ThemeToggle
│   │   ├── AnimatedRoutes.jsx        # AnimatePresence route transitions
│   │   ├── PageTransition.jsx
│   │   ├── Preloader.jsx             # Name reveal + curtain wipe
│   │   ├── CustomCursor.jsx          # Dot + trailing ring
│   │   ├── AmbientBackground.jsx     # Blobs, spotlight, film grain
│   │   ├── ParticleBackground.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── TiltCard.jsx              # Cursor-reactive 3D tilt + glare
│   │   ├── SplitText.jsx             # Per-character reveal
│   │   ├── MagneticButton.jsx        # Leans toward the cursor
│   │   ├── CountUp.jsx               # Counts up when scrolled into view
│   │   ├── Timeline.jsx              # Line draws on scroll
│   │   ├── SkillTile.jsx             # Logo + percentage ring
│   │   └── icons/                    # brandIcons (generated) + customIcons
│   ├── pages/                        # Home, About, Skills, Projects,
│   │                                 # Education, Contact (+ matching .css)
│   ├── config/services.js            # Supabase / EmailJS config
│   ├── data/socialLinks.jsx          # Shared social icon set
│   ├── hooks/useReducedMotion.js
│   ├── utils/motion.js               # Shared framer-motion variants
│   ├── App.jsx / App.css
│   ├── main.jsx
│   └── index.css                     # CSS variables, focus rings, a11y
├── .env                              # Optional overrides (not in repo)
├── vercel.json                       # Vercel SPA rewrites + cache headers
├── netlify.toml                      # Netlify build + SPA fallback
├── index.html                        # Entry point, SEO + Open Graph tags
├── supabase_setup.sql                # contact_messages + newsletter tables
└── README.md
```

### NPM Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Vite dev server on :5173 |
| `npm run build` | Production build (auto-runs `spa-fallback`) |
| `npm run preview` | Serve the built output locally |
| `npm run icons` | Regenerate `src/components/icons/brandIcons.js` |
| `npm run images` | Re-compress `assets-src/` originals into `public/` |

## 🎯 Featured Projects

The portfolio showcases 9 real projects:

1. **Smart Study Management Platform (StudyFlow)** - Next.js, TypeScript, Supabase
2. **YouTube Video Classifier** - Python, Anvil, Google Collab, YouTube API, ML
3. **LinkedIn Automation** - Next.js, AI, OAuth, Analytics, TypeScript
4. **IntentOS** - AI, Decision Intelligence, Intent Recognition, Planning
5. **Weather Application** - HTML5, CSS3, JavaScript, OpenWeather API
6. **Finance Manager Application** - Next.js, TypeScript, Supabase, 2FA
7. **PDF Chat Application** - Python, Streamlit, LangChain, FAISS, Google AI
8. **AI Holiday Planner** - AI, React, Calendar Analysis
9. **AI Medicine Assistant** - Python, Streamlit, AI, Healthcare

## Features Breakdown

### Animations
- Smooth page transitions with Framer Motion
- Hover effects on cards and buttons
- Scroll indicators and progress bar
- Floating shapes and particles
- Progress bar animations
- Gradient shift animations
- Typing effect animations
- Ripple effects

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktops
- Hamburger menu for mobile devices
- Responsive typography
- Flexible grid layouts

### UI Components
- Gradient text effects
- Glass-morphism cards
- Custom scrollbar
- Interactive buttons with glow effects
- Timeline layout
- Particle background system
- Theme toggle button
- Scroll progress indicator
- Newsletter signup form
- Availability status badge
- Social media integration

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

This project can be deployed on:
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

### Deploy to Vercel:
```bash
npm install -g vercel
vercel
```

## 📧 Contact Form Setup

### Supabase Configuration:
1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Run the SQL script from `supabase_setup.sql`
3. Get your project URL and anon key from Settings > API
4. Add them to your `.env` file

### EmailJS Configuration:
1. Create an account at [emailjs.com](https://www.emailjs.com)
2. Create an email service and template
3. Get your Service ID, Template ID, and Public Key
4. Add them to your `.env` file

## 🎨 Color Customization

Edit CSS variables in `src/index.css`:
```css
:root {
  --primary: #6366f1;      /* Primary brand color */
  --secondary: #8b5cf6;    /* Secondary color */
  --accent: #ec4899;       /* Accent color */
  --dark: #0f172a;         /* Dark background */
  --dark-light: #1e293b;   /* Light dark background */
  --text: #f1f5f9;         /* Text color */
  --text-secondary: #cbd5e1; /* Secondary text */
}
```

## 📱 Responsive Breakpoints

- Mobile: < 576px
- Tablet: 576px - 968px
- Desktop: > 968px

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👨‍💻 Author

**Piyush Singhal**
- GitHub: [@piyush06singhal](https://github.com/piyush06singhal)
- LinkedIn: [Piyush Singhal](https://www.linkedin.com/in/piyush06singhal/)
- Email: piyush.singhal.2004@gmail.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Framer Motion for smooth animations
- Supabase for backend services
- EmailJS for email functionality

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Created with ❤️ using React, Framer Motion, Supabase, and EmailJS
