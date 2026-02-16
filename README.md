# LUNA — Landing Page

A premium dark-mode React landing site for **LUNA**, a workplace wellness platform for cycle-aware task management.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Moon background image

To use the moon image in the hero:

1. Copy your moon image to **`public/assets/moon-bg.png`**.
2. If you used the image from Cursor, it may be at:
   `~/.cursor/projects/.../assets/Black_and_White_Modern_The_Universe_Presentation-....png`
   Copy that file to `public/assets/moon-bg.png`.

If the file is missing, the hero still shows a subtle purple gradient fallback.

## Build

```bash
npm run build
npm run preview
```

## Stack

- React 18 + Vite
- React Router
- Framer Motion (animations)
- CSS variables (dark purple theme)

## Pages

- **Home** — Hero (moon + particles + blobs), problem stats, What is LUNA, science, benefits, waitlist CTA
- **How it works** — 3 steps, workflow diagram, use cases, FAQs, waitlist
- **About** — Team placeholder, mission, contact form, social links

Footer includes Privacy, Terms, and Data Ethics links.
