# Devesh Dubey - Portfolio

A high-end, modern, 3D interactive personal portfolio for Devesh Dubey, built with Next.js, React, Three.js (React Three Fiber), Framer Motion, and Tailwind CSS.

## Features

- **3D Visuals & Canvas**: Floating data ecosystem generated via `Three.js` + `React Three Fiber`.
- **Smooth Scrolling & Animations**: Orchestrated seamlessly using `Framer Motion`.
- **Responsive Layout**: Designed to look professional across mobile, tablet, and desktop viewports.
- **Glassmorphism**: Soft background blur overlays applied carefully throughout the user interface.
- **Dynamic Content**: Data injected from a centralized resume object for easy future modifications.
- **SEO Optimized**: Pre-configured metadata and open-graph fields in Next.js.

## Tech Stack

- [Next.js (App Router)](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Framer Motion](https://www.framer.com/motion/)

## Setup & Local Development

1. **Clone the repository and install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Adding Resume PDF

Place your resume PDF inside the `public` folder and name it `resume.pdf`. The download links map to `/resume.pdf`.

## Deploying to Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to GitHub.
2. Sign up on [Vercel](https://vercel.com/) and create a New Project.
3. Import the GitHub repository.
4. Keep the default Build Settings (`npm run build`).
5. Click **Deploy**. Your site will be live within minutes.

## Structure

- `app/`: Next.js 14 App Router config, layouts, global CSS.
- `components/`: Modular UI sections (Hero, About, Skills, Projects, Contact, Navbar, Footer).
- `components/canvas/`: Contains `react-three-fiber` canvases (e.g. Hero3D.tsx).
- `data/`: Resume information stored in `resume.ts` for clean separation of content.
- `public/`: Static assets (fonts, resume, icons).
- `utils/`: Tailwind class merge utilities (`cn`).

## License

This project is open-source and available under the MIT License.
