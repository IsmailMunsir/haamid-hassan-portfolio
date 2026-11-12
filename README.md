# Haamid Hassan – personal brand website

React 19 + Vite 8. Same design as the original static site.

## Run
```
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs ./dist (upload this folder to any host)
npm run preview    # test the production build
```
Requires Node.js 20.19+ (https://nodejs.org).

## Editing content
- All text, links and lists: `src/data.js`
- Showreel: set `SHOWREEL_URL` in `src/data.js` (YouTube/Vimeo embed URL or .mp4 path)
- Styling: `src/assets/css/styles.css`
- Photos: `src/assets/img/`
- Sections: `src/components/`

## Contact section
No form. Visitors choose a topic (opens their email app with the subject filled in) or use the email, phone and social links.
