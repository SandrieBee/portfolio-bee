# Bea Sandara Abonales | Portfolio

A responsive personal portfolio website for a Computer Science graduate, showcasing projects, an undergraduate thesis, certificates, technical skills, and contact information. Content is loaded dynamically from Supabase, so it can be updated without changing the source code.

**Live site:** TODO: add your Vercel URL here

## Features

- **Projects gallery** with category filters and an automatic image slideshow per project
- **Featured undergraduate thesis section**: "A Quantitative Robustness Audit of Fine-Tuned YOLOv5n and YOLO11n: Defining the Operational Failure Point in Online Automated Proctoring"
- **Certificates and achievements** with category filters and a full-size preview dialog
- **Technical skills** grouped by category
- **Contact form** with validation, a honeypot field against spam bots, and success and error feedback
- **Three themes**: Light, Night, and Pink, plus an Auto option that follows the device. The choice is remembered per device, with no flash on load
- **Accessible and responsive**: semantic HTML, keyboard-friendly controls, visible focus states, reduced-motion support, and layouts from small phones to wide desktops
- **Loading, error, and empty states** for every data-driven section

## Tech stack

| Area | Technology |
| --- | --- |
| Frontend | React, Vite, JavaScript |
| Styling | Tailwind CSS (CSS-variable design tokens for theming) |
| Routing | React Router |
| Animation | Motion (`motion/react`) |
| Forms | React Hook Form |
| Icons | Hugeicons |
| Backend | Supabase (PostgreSQL, Storage) |
| Hosting | Vercel (frontend), Supabase (backend) |

## How it works

Components never talk to Supabase directly. Data flows through small layers:

```
Component -> hook (useAsyncData) -> service -> Supabase
```

- **Services** are the only files that import the Supabase client.
- **Hooks** handle loading, error, and retry state.
- **Components** only render, including loading, error, and empty states.

## Data and security

Security is enforced in the database, not in the interface:

- **Row Level Security (RLS)** is enabled on every table, with deny by default.
- Visitors can only **read published** content.
- The public can **only insert** into the contact messages table. They cannot read, edit, or delete it.
- Images and documents are stored in **public Supabase Storage buckets**, and uploads happen only through the Supabase dashboard.
- Only a public (publishable) key is used in the frontend. No secret keys are stored in the project.

## Deployment

The site is deployed on Vercel from the `main` branch, so every push redeploys automatically. Content is managed in the Supabase dashboard.

## Usage

This is my personal portfolio. Please don't copy or reuse its code, design, text, photos, or certificates without my permission. Feel free to look around, and to get in touch if you'd like to ask about it.

## Contact

**Bea Sandara Abonales**
Computer Science graduate, Caraga State University

- GitHub: https://github.com/SandrieBee
- LinkedIn: https://www.linkedin.com/in/beaabonales16
- Email: beasandara.abonales16@gmail.com