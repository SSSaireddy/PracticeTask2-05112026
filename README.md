# Sainyx LMS — Text Wordmark

Indian-style Learning Management System frontend built with React + Vite. The Sainyx wordmark is rendered as text in a high-contrast serif font; only the letter “y” is yellow. No logo image is used.

## Run locally
1. Install Node.js (LTS).
2. Extract this ZIP and open the `sainyx` folder in VS Code.
3. Open Terminal in that folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite.

## Production build
```bash
npm run build
```

## Netlify
- Build command: `npm run build`
- Publish directory: `dist`

The app uses browser LocalStorage for demo enrolments, lesson completion, quiz scores, profile details, and admin course changes. It has no backend or real authentication; Admin is a demo frontend page.
