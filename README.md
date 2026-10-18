# Nayeem's Portfolio

A personal developer portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. It presents an introduction, skills, selected projects, and contact options.

## Getting started

Use Node.js and npm, then install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Contact form configuration

The contact form uses EmailJS. Create a `.env.local` file in the project root and set the values for your EmailJS account:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

The EmailJS public key is used by the browser and is not a private credential. Configure allowed origins and abuse protections in EmailJS; never put private credentials in `NEXT_PUBLIC_*` variables.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |

## Project structure

| Path | Purpose |
| --- | --- |
| `app/` | Next.js app layout, home page, and global styles |
| `components/` | Portfolio sections and shared UI components |
| `data/` | Project and skills content |
| `public/` | Static images, project assets, and the downloadable CV |

## Public content and deployment

This is a public-facing portfolio. Contact details, profile images, project information, and the CV are included in the site or its static assets and may be accessible to anyone when the site is deployed. Review these materials before changing or redeploying the portfolio. A public GitHub repository also makes its full Git history and committed files visible.

Deploy on a platform that supports Next.js, such as Vercel. Add the EmailJS environment variables to the deployment project's environment configuration before enabling the contact form.
