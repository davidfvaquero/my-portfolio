# David Fernández's Portfolio

This is a personal portfolio web app built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**. It showcases projects, skills, personal information, and includes a working contact form.

## Demo

You can see a live demo (if deployed) or run it locally by following the instructions below.

---

## Main Technologies

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Nodemailer](https://nodemailer.com/) (for the contact form)

---

## Project Structure

```
my-portfolio/
├── public/                # Images, favicon, and CV
├── src/
│   └── app/
│       ├── layout.tsx     # Global layout, meta tags, and favicon
│       ├── page.tsx       # Main page (Home)
│       ├── about/         # "About me" section
│       ├── skills/        # Skills section
│       ├── projects/      # Projects list and detail
│       ├── contact/       # Contact form
│       ├── components/    # Navbar and Footer
│       └── api/contact/   # API for the contact form
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies and scripts
└── ...
```

### Main Pages
- `/`            → Home
- `/about`       → About me
- `/skills`      → Skills
- `/projects`    → Projects
- `/projects/[slug]` → Project detail
- `/contact`     → Contact

---

## Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or yarn install
   ```
3. **Set up environment variables for the contact form:**
   Create a `.env.local` file in the root with:
   ```env
   GMAIL_USER=your-email@gmail.com
   GMAIL_PASS=your-app-password
   ```
   > **Note:** You must use a Gmail app password. [Official guide](https://support.google.com/accounts/answer/185833?hl=en)

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the result.

---

## Customization
- **Projects:** Edit the projects array in `src/app/projects/page.tsx` and `src/app/projects/[slug]/page.tsx`.
- **Skills:** Modify the array in `src/app/skills/page.tsx`.
- **Personal info:** Change texts and images in the relevant pages.
- **Images & CV:** Replace files in the `public/` folder.

---

## Deployment

This project is ready to be deployed on [Vercel](https://vercel.com/) or any platform compatible with Next.js.

1. Push the repository to GitHub.
2. Connect it to Vercel and set the environment variables (`GMAIL_USER`, `GMAIL_PASS`).
3. Done!

---

## Accessibility & Responsiveness
- The design is fully responsive and accessible.
- The mobile menu features smooth animations and supports keyboard and screen readers.
- SEO and social meta tags are included.

---

## Useful Scripts
- `npm run dev`    → Development
- `npm run build`  → Production build
- `npm run start`  → Production server
- `npm run lint`   → Code linting

---

## Credits & Resources
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Nodemailer](https://nodemailer.com/)

---

## License

This project is for personal use. You can adapt and reuse it for your own portfolio, crediting the original author.
