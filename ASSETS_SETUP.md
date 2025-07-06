# Assets Setup Guide

## Profile Image Setup

1. **Place your profile photo** in the following location:
   ```
   portfolio/public/assets/profile-photo.jpg
   ```

2. **Image requirements:**
   - Format: JPG, PNG, or WebP
   - Size: Recommended 400x400 pixels or larger (square aspect ratio)
   - File name: `profile-photo.jpg` (or update the src in Hero.jsx if using different name)

3. **If the image fails to load**, the component will automatically fall back to showing "AZ" as a placeholder.

## Resume Setup

1. **Place your resume** in the following location:
   ```
   portfolio/public/assets/abdullah-zulfiqar-resume.pdf
   ```

2. **Resume requirements:**
   - Format: PDF (recommended) or any downloadable format
   - File name: `abdullah-zulfiqar-resume.pdf` (or update the href in Hero.jsx if using different name)

3. **The download button** will automatically trigger a download when clicked.

## File Structure

Your assets directory should look like this:
```
portfolio/
├── public/
│   ├── assets/
│   │   ├── profile-photo.jpg    ← Your profile image
│   │   └── abdullah-zulfiqar-resume.pdf    ← Your resume
│   └── vite.svg
└── src/
    └── components/
        └── Hero.jsx    ← Updated to use your image and resume
```

## Customization

If you want to use different file names or formats:

1. **For profile image**: Update the `src` attribute in `src/components/Hero.jsx` line 32
2. **For resume**: Update the `href` attribute in `src/components/Hero.jsx` line 15

## Notes

- The profile image will be automatically cropped to fit the circular container
- The resume download works by creating a temporary link element and triggering a download
- Both files are served from the `public` directory, so they're accessible at runtime 