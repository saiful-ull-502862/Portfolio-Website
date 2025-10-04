# Md Saiful Islam - Research Website

A modern, professional research website showcasing the work of Md Saiful Islam, Ph.D. candidate in Mechanical Engineering specializing in Finite Element Analysis, biomechanics, and health-tech innovation.

## 🚀 Features

- **Modern Design**: Clean, responsive interface built with Next.js 15 and Tailwind CSS
- **Project Showcase**: Interactive display of research projects with support for images, datasets, and videos
- **Professional Timeline**: Visual timeline of academic and professional experience
- **Publications & Presentations**: Organized display of research outputs
- **Recent Updates**: Dynamic section for latest news and achievements
- **Mobile Responsive**: Optimized for all device sizes
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/research-website.git
cd research-website
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

## 🚀 Deployment to GitHub Pages

### Enable GitHub Pages

1. Go to your repository settings on GitHub
2. Scroll down to the "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Select `main` as the branch and `/ (root)` as the folder
5. Click "Save"

### Automatic Deployment with GitHub Actions (Recommended)

1. Create a `.github/workflows/deploy.yml` file in your repository with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build for GitHub Pages
        run: npm run build && npx next export

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
          publish_branch: gh-pages
```

2. Commit and push this file to your repository
3. Your site will be automatically built and deployed after each push to the main branch
4. Your site will be available at `https://saiful-ull-502862.github.io/Portfolio-Website`

### Manual Deployment (Alternative)

1. Build the static site locally:
```bash
npm run build
npm run export
```

2. The built files will be in the `out` directory
3. You can then serve these files using any static hosting service

## 📁 Project Structure

```
research-website/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page component
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   └── ui/               # shadcn/ui components
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/                   # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── README.md               # This file
```

## 🎨 Customization

### Personal Information

Update your personal information in `src/app/page.tsx`:

```typescript
// Update these values
const personalInfo = {
  name: "Md Saiful Islam",
  title: "Finite Element Analysis & Biomechanics Researcher",
  email: "md-saiful.islam1@louisiana.edu",
  phone: "337-455-0914",
  linkedin: "your-linkedin-url",
  location: "Lafayette, LA"
}
```

### Projects

Add or modify projects in the `projects` array:

```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    institution: "Your Institution",
    period: "2024 - Present",
    description: "Project description...",
    applications: ["Application 1", "Application 2"],
    technologies: ["Technology 1", "Technology 2"],
    image: "/path/to/image.jpg",
    datasets: ["Dataset 1"],
    videos: ["Video 1"]
  }
]
```

### Adding Images and Videos

1. Place images in the `public/` directory
2. Reference them in your components using relative paths
3. For videos, you can embed YouTube/Vimeo links or host video files

### Styling

The website uses Tailwind CSS with a modern color scheme. To customize:

1. Edit `tailwind.config.ts` for theme configuration
2. Modify component styles in `src/app/page.tsx`
3. Add custom CSS in `src/app/globals.css`

## 🔧 Configuration

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to Pages
3. Source: Deploy from a branch
4. Branch: `gh-pages` and `/ (root)`
5. Enable GitHub Actions in repository settings

### Base Path Configuration

If your repository name is different from `research-website`, update:

1. `next.config.ts` - Update `basePath` and `assetPrefix`
2. `.github/workflows/deploy.yml` - Update `NEXT_PUBLIC_BASE_PATH`

## 📱 Mobile Optimization

The website is fully responsive and optimized for mobile devices. Key features:

- Touch-friendly navigation
- Responsive grid layouts
- Optimized images and media
- Mobile-first design approach

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit and push your changes
5. Open a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions or collaboration opportunities:

- Email: md-saiful.islam1@louisiana.edu
- Phone: 337-455-0914
- LinkedIn: [Md Saiful Islam](https://linkedin.com/in/your-profile)

---

Built with ❤️ using Next.js and Tailwind CSS