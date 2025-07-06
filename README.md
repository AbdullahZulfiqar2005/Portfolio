# Abdullah Zulfiqar - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Showcasing my skills, projects, and experience as a Computer Science student.

## 🚀 Features

- **Modern Design**: Clean, minimal UI with beautiful animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **SEO Optimized**: Meta tags and social media optimization
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Accessible**: Follows web accessibility best practices

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages / Vercel

## 📋 Sections

1. **Hero Section**: Introduction with profile picture and social links
2. **About**: Personal introduction and key highlights
3. **Skills**: Technical skills with progress bars
4. **Projects**: Project showcase with tech stacks and links
5. **Experience**: Professional experience and availability
6. **Contact**: Contact form and social media links

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbdullahZulfiqar2005/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 🚀 Deployment

### GitHub Pages

1. **Add GitHub Pages dependency**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add scripts to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages**
   - Go to your repository settings
   - Navigate to Pages section
   - Select `gh-pages` branch as source

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts to complete deployment**

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.jsx` - Name, tagline, and social links
- `src/components/About.jsx` - Personal description and highlights
- `src/components/Skills.jsx` - Skills and proficiency levels
- `src/components/Projects.jsx` - Project details and links
- `src/components/Contact.jsx` - Contact information

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `src/index.css`
- **Animations**: Adjust animation settings in `tailwind.config.js`

### Meta Tags

Update the meta tags in `index.html` for SEO and social media sharing.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

The website includes a dark/light mode toggle that:
- Persists user preference in localStorage
- Respects system preference on first visit
- Smoothly transitions between themes

## 🔧 Development

### Project Structure

```
src/
├── components/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **GitHub**: [@AbdullahZulfiqar2005](https://github.com/AbdullahZulfiqar2005)
- **Email**: abdullah.zulfiqar@example.com

---

Made with ❤️ by Abdullah Zulfiqar
