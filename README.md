# Enlite - Home page

Modern, responsive landing page for Enlite - a prebiotic soda brand. Built with Next.js, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Local Development

First, clone the repository and install dependencies:

```bash
bash
git clone <your-repo-url>
cd enlite-website
npm install
```

Then, run the development server:

```bash
# install & run
yarn
yarn dev
# or
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Deploying to Vercel

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com), the platform from the creators of Next.js.

### Deploy Steps

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Install Vercel CLI (Optional)**

   ```bash
   npm install -g vercel
   ```

3. **Deploy Options**:

   **Option 1: Direct from GitHub**
   - Push your code to GitHub
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Vercel will automatically detect Next.js and configure the build settings
   - Click "Deploy"

   **Option 2: Using Vercel CLI**

   ```bash
   # Login to Vercel
   vercel login

   # Deploy
   vercel
   ```

4. **Environment Variables**
   - If your app uses environment variables, add them in Vercel:
     - Go to Project Settings → Environment Variables
     - Add each variable from your `.env.local`

5. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow the DNS configuration instructions

### Automatic Deployments

Once deployed, Vercel will automatically create new deployments whenever you push to your GitHub repository:

- Push to `main` → Production deployment
- Push to other branches → Preview deployment

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
