# Portfolio Website

A professional portfolio website built with Next.js, Tailwind CSS, and Framer Motion. This website showcases my skills, projects, and experience as a Software Engineer, Full Stack Developer, Flutter Developer, and UI/UX Designer.

## Features

- Responsive design that works on all devices
- Interactive UI with smooth animations using Framer Motion
- Dark/Light mode toggle with theme persistence
- Project showcase with filtering capability
- Contact form with validation
- SEO optimization

## Technologies Used

- Next.js 13 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Shadcn UI Components
- React Hook Form & Zod for form validation

## Project Structure

```
my-portfolio/
├── app/                      # Next.js app directory
│   ├── layout.tsx            # Root layout with navbar & footer
│   ├── page.tsx              # Home page entry point
│   └── globals.css           # Global styles
├── components/               # Reusable UI components
│   ├── AnimatedText.tsx      # Animated text component
│   ├── ContactForm.tsx       # Contact form component
│   ├── Footer.tsx            # Footer component
│   ├── Navbar.tsx            # Navigation component
│   ├── ProjectCard.tsx       # Project card component
│   └── ThemeToggle.tsx       # Theme toggle component
├── data/                     # Data files
│   └── projects.ts           # Project data
├── lib/                      # Utility functions
│   └── utils.ts              # Helper functions
├── public/                   # Static assets
├── sections/                 # Page sections
│   ├── About.tsx             # About section
│   ├── Contact.tsx           # Contact section
│   ├── Hero.tsx              # Hero section
│   └── Projects.tsx          # Projects section
```

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Navigate to the project directory:
   ```
   cd portfolio
   ```

3. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

This portfolio is configured for deployment on Vercel:

1. Push your code to a GitHub repository.
2. Sign up for a Vercel account at [vercel.com](https://vercel.com).
3. Import your GitHub repository.
4. Vercel will automatically detect Next.js and deploy your site.

## Customization

To customize this portfolio:

1. Update personal information in components and sections.
2. Modify projects in the `data/projects.ts` file.
3. Replace sample images with your own project screenshots.
4. Adjust colors in `tailwind.config.ts` to match your personal brand.
5. Update contact information in the Contact section.

## License

This project is licensed under the MIT License.