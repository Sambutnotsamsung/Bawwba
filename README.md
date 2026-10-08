# Bawwaba

License-plate school pickup console. Cameras read plates at the gate, the app matches them to registered guardians, and staff release the right students. English and Arabic (RTL), installable on phones and gate tablets, works offline for the app shell.

## Features
- **Gate:** live "at the gate" card, stats, recent scans, manual plate lookup
- **Pickup board:** released cars with student names, "Handed over" check-off, full-screen display
- **Review queue:** low-confidence reads wait for staff to release or hold, with undo
- **Vehicles:** register, search (plate, guardian or student) and remove, with plate-format and duplicate checks
- **Log and chart:** every scan, plus scans per minute
- **Settings:** auto-release confidence threshold, alert sound and vibration

## Run locally
```bash
python3 -m http.server 8080
# open http://localhost:8080
```
Service workers need `localhost` or HTTPS, so do not open `index.html` as a file.

## Deploy to GitHub Pages
```bash
git init -b main
git add .
git commit -m "Bawwaba pickup console"
git remote add origin https://github.com/<you>/bawwaba.git
git push -u origin main
```
Then in the repo go to **Settings > Pages > Source: GitHub Actions**. The workflow in `.github/workflows/pages.yml` checks the JavaScript and publishes the site on every push to `main`.

## Connect to Base44 (optional)
Without `config.js` the app runs on demo data. To use your Base44 `Vehicle` and `LprEvent` entities, copy `config.example.js` to `config.js` and fill in the app ID and key. In live mode the app loads vehicles, polls `LprEvent` every 3 seconds, writes manual lookups, and updates `status` when staff release or hold.

**Read this first:** anything in `config.js` is visible to every visitor of the site. Use a key limited to these entities, never an admin key, and do not commit `config.js` (it is git-ignored, so the GitHub Pages build will not include it). For a real school deployment, put the keys behind a backend function or serve the app from a private network. Verify the base URL and header name in `src/adapter.js` against your Base44 API docs, and check that Base44 allows requests from your site's origin.

"Handed over" is stored per device in live mode. To share it across gate tablets, add a `handed_over` boolean to `LprEvent` and update `mark()` in `app.js`.

## Structure
```
index.html          app shell
styles.css          styles
app.js              app logic (demo data, UI, i18n)
src/adapter.js      Base44 connection (off by default)
sw.js               offline cache
manifest.webmanifest, icons/
.github/workflows/pages.yml
```

## Roadmap
Staff login with admin/user roles from the `User` entity, a shared handed-over field, and a real camera-to-`LprEvent` bridge.

MIT licensed.
