# Rezso Dubiczki — Online CV

A responsive, bilingual (English/Hungarian) one-page CV built with Next.js App Router, TypeScript and Tailwind CSS v4. The design uses custom CSS for a premium charcoal-and-gold visual style.

## Run locally

Requirements: Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Included

- English / Hungarian language switch
- Dark / light theme switch (saved in localStorage)
- Responsive layout
- Experience timeline based on the supplied CV
- Skills grouped by category
- Contact links
- Download link to the supplied CV PDF

## Personalise the portrait

The hero currently uses an RD monogram placeholder rather than an invented portrait. To use your own photo, add it to `public/profile.jpg` and replace the `.portrait-placeholder` block in `app/page.tsx` with an `<Image>` from `next/image` or a standard `<img>` element. Use a professional, portrait-oriented image.

## Update your CV PDF

The provided PDF is stored as `public/Rezso_CV.pdf`. Replace it with your updated CV using the same filename, or change the download link in `app/page.tsx`.

## Deploy

Push the project to GitHub and import it into Vercel. No database or environment variables are required.

## Notes

The page content is based on the uploaded CV. The language toggle includes an English and Hungarian presentation; company names, dates, email and website are preserved from the source CV.
