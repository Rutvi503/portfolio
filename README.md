# Rutvi Rathod - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, and Tailwind CSS. Features a beautiful dark theme with glassmorphism effects, smooth animations, and a professional design.

## 🚀 Features

- **Modern Design**: Dark theme with gradient accents and glassmorphism effects
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth scroll navigation and hover animations
- **Performance**: Optimized with Next.js Image and modern CSS
- **Accessible**: Proper semantic HTML and ARIA labels
- **SEO Optimized**: Meta tags and Open Graph support

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment on Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Deploy:

```bash
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect Next.js and deploy

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Hero.tsx          # Hero section with profile
│   │   ├── About.tsx         # About section
│   │   ├── Skills.tsx        # Skills with progress bars
│   │   ├── Projects.tsx      # Featured projects
│   │   ├── Contact.tsx       # Contact form and info
│   │   └── Navigation.tsx    # Smooth scroll navigation
│   ├── globals.css           # Global styles and animations
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page
├── public/
│   ├── rutu.jpg              # Profile picture
│   └── Rutvi Rathod_Resume.pdf # Resume
└── package.json
```

## 🎨 Customization

### Colors

The color scheme is defined in `app/globals.css` using CSS custom properties:

- Primary: Blue (#3b82f6)
- Secondary: Purple (#8b5cf6)
- Accent: Cyan (#06b6d4)

### Content

Update the following files to customize your content:

- `app/components/Hero.tsx` - Name, title, and bio
- `app/components/About.tsx` - About section content
- `app/components/Skills.tsx` - Skills and technologies
- `app/components/Projects.tsx` - Featured projects
- `app/components/Contact.tsx` - Contact information

### Images

Replace `public/rutu.jpg` with your profile picture and `public/Rutvi Rathod_Resume.pdf` with your resume.

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Optimized images with Next.js Image component
- CSS animations with hardware acceleration
- Minimal JavaScript bundle
- Static generation for fast loading

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Code Quality

- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety
- Error boundaries for error handling

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

## 📞 Contact

Rutvi Rathod - [rutvirathod@email.com](mailto:rutvirathod@email.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
