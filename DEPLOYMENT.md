# GitHub Pages Deployment Guide

## Quick Setup

1. **Repository Setup**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/research-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: "gh-pages" and "/ (root)"
   - Save settings

3. **Enable GitHub Actions**
   - Go to repository settings
   - Navigate to "Actions" section
   - Enable "Allow all actions and reusable workflows"

4. **Configure Base Path** (if needed)
   - If your repository name is different, update:
     - `next.config.ts`: Change `basePath` and `assetPrefix`
     - `.github/workflows/deploy.yml`: Update `NEXT_PUBLIC_BASE_PATH`

## Automatic Deployment

Once configured, your site will automatically deploy when you push to the `main` branch.

## Manual Deployment

```bash
npm run build:static
```

The static files will be generated in the `out/` directory, ready for deployment.

## Custom Domain (Optional)

1. Create a `CNAME` file in the `public/` directory:
   ```
   yourdomain.com
   ```

2. Configure DNS settings with your domain provider

3. Update GitHub Pages settings to use your custom domain

## Troubleshooting

### Build Issues
- Check that all dependencies are installed: `npm install`
- Verify TypeScript compilation: `npm run lint`
- Check Next.js configuration

### Deployment Issues
- Ensure GitHub Actions are enabled
- Check workflow logs for errors
- Verify repository permissions

### 404 Errors
- Check `basePath` configuration in `next.config.ts`
- Ensure all links use the correct base path
- Verify GitHub Pages settings

## Site URL

Your deployed site will be available at:
`https://yourusername.github.io/research-website`