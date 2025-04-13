# Theo's Online Portfolio - Simplified Version

A clean and modern portfolio website built with Next.js and styled-components. This simplified version is designed to be easier to understand for Next.js beginners.

## Features

- 🌙 Light/Dark mode toggle
- 📱 Fully responsive design
- 🔄 Data stored in JSON files for easy updates
- 🎨 Clean design with animations

## Technologies Used

- **Next.js**: React framework for building websites
- **TypeScript**: Adds type safety to JavaScript
- **Styled Components**: For styling components
- **Framer Motion**: For animations

## Project Structure - Simplified

```
├── public/             # Images and static files
├── src/
│   ├── app/            # Page components
│   │   ├── about/      # About page
│   │   ├── contact/    # Contact page
│   │   ├── experience/ # Experience page
│   │   ├── projects/   # Projects page
│   │   └── page.tsx    # Home page
│   ├── components/     # Reusable components
│   ├── data/           # JSON data files (edit these to update your content)
│   │   ├── profile.json
│   │   ├── projects.json
│   │   ├── experience.json
│   │   └── skills.json
│   ├── styles/         # Theme and global styles
│   └── types/          # TypeScript types
```

## How to Use

1. **Edit Your Data**: Update the JSON files in `src/data/` to change your information
2. **Customize Colors**: Edit the theme in `src/styles/theme.ts`
3. **Add Projects**: Add new projects to `src/data/projects.json`

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Updating Your Information

### Profile Information

Edit `src/data/profile.json` to update your personal information, such as:
- Name
- Job title
- Contact information
- Social media links

### Projects

Edit `src/data/projects.json` to update your projects. For each project, you can specify:
- Title
- Description
- Technologies used
- Images
- Links to GitHub and live demo

### Work Experience

Edit `src/data/experience.json` to update your work history.

### Skills

Edit `src/data/skills.json` to update your skills and expertise.

## Deployment

When you're ready to publish your portfolio, you can deploy it to platforms like Vercel, Netlify, or GitHub Pages. 