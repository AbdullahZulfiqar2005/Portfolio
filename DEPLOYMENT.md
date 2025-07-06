# Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages or Vercel.

## 🚀 GitHub Pages Deployment

### Step 1: Prepare Your Repository

1. **Create a new repository** on GitHub (if you haven't already)
2. **Push your code** to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/AbdullahZulfiqar2005/portfolio.git
   git push -u origin main
   ```

### Step 2: Deploy to GitHub Pages

1. **Install gh-pages** (already done):
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Deploy the website**:
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Click "Save"

4. **Wait for deployment**:
   - GitHub will build and deploy your site
   - Your site will be available at: `https://abdullahzulfiqar2005.github.io/portfolio`

### Step 3: Custom Domain (Optional)

1. **Add a custom domain**:
   - In the Pages settings, enter your custom domain
   - Add a CNAME record pointing to `abdullahzulfiqar2005.github.io`
   - Create a `CNAME` file in the `public` folder with your domain

## 🌐 Vercel Deployment

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Deploy

1. **Login to Vercel**:
   ```bash
   vercel login
   ```

2. **Deploy your project**:
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - Link to existing project or create new
   - Confirm project settings
   - Wait for deployment

### Step 3: Configure Domain

1. **Go to Vercel Dashboard**
2. **Select your project**
3. **Go to Settings > Domains**
4. **Add your custom domain**

## 🔧 Environment Variables

If you need to add environment variables:

### GitHub Pages
- Add them in your repository settings under "Secrets and variables"

### Vercel
- Add them in your project settings under "Environment Variables"

## 📝 Post-Deployment Checklist

- [ ] Test all links and forms
- [ ] Verify responsive design on different devices
- [ ] Check dark/light mode toggle
- [ ] Test contact form functionality
- [ ] Verify social media links
- [ ] Check meta tags and SEO
- [ ] Test loading speed
- [ ] Verify accessibility features

## 🔄 Updating Your Site

### GitHub Pages
```bash
npm run deploy
```

### Vercel
```bash
vercel --prod
```

## 🐛 Troubleshooting

### Common Issues

1. **Build fails**:
   - Check for syntax errors
   - Verify all dependencies are installed
   - Check console for error messages

2. **Styles not loading**:
   - Ensure Tailwind CSS is properly configured
   - Check if `index.css` is imported in `main.jsx`

3. **Images not showing**:
   - Verify image paths are correct
   - Check if images are in the `public` folder

4. **Deployment fails**:
   - Check GitHub Actions logs
   - Verify repository permissions
   - Ensure all files are committed

### Getting Help

- Check the [Vite documentation](https://vitejs.dev/)
- Review [Tailwind CSS docs](https://tailwindcss.com/)
- Check [Framer Motion docs](https://www.framer.com/motion/)

## 📊 Performance Optimization

1. **Optimize images**:
   - Use WebP format
   - Compress images
   - Use appropriate sizes

2. **Minimize bundle size**:
   - Remove unused dependencies
   - Use dynamic imports for large components

3. **Enable caching**:
   - Set appropriate cache headers
   - Use service workers if needed

## 🔒 Security

1. **HTTPS**: Both GitHub Pages and Vercel provide HTTPS by default
2. **Content Security Policy**: Consider adding CSP headers
3. **Dependencies**: Regularly update dependencies for security patches

---

Your portfolio is now live! 🎉 