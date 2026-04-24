# Trade Log Pro

Premium trading journal. Track trades, calculate performance, review by calendar, enforce pre-trade discipline.

All data stored locally on your device. No signup, no server, no tracking.

---

## What you need

- **Node.js 18+** (check with `node --version`)
- A free **GitHub** account
- A free **Vercel** or **Netlify** account (pick one)

That's it.

---

## Run it locally first (optional but recommended)

```bash
cd trade-log-pro
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). Everything should work — onboarding, log a trade, check markets.

**To test on your phone on the same WiFi:** when `npm run dev` starts, it also prints a "Network" URL like `http://192.168.x.x:5173`. Open that URL on your phone's browser. Same WiFi required.

---

## Deploy to Vercel (easiest, recommended)

### Option A — via GitHub (zero CLI, most reliable)

1. Create a new repository on GitHub (e.g. `trade-log-pro`). Keep it private if you want.
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/trade-log-pro.git
   git push -u origin main
   ```
3. Go to **[vercel.com](https://vercel.com)** → sign up with GitHub → **Add New Project** → pick your repo → click **Deploy**.
4. Wait ~60 seconds. You'll get a URL like `trade-log-pro-alvin.vercel.app`.

Every time you `git push`, Vercel auto-redeploys. Free forever for personal use.

### Option B — via Vercel CLI

```bash
npm install -g vercel
cd trade-log-pro
vercel
```

Follow the prompts. First time asks you to sign in. It'll give you a preview URL immediately and a production URL after.

To push to production later:
```bash
vercel --prod
```

---

## Deploy to Netlify (alternative)

### Via CLI

```bash
npm install -g netlify-cli
cd trade-log-pro
npm run build
netlify deploy
# When happy:
netlify deploy --prod
```

### Via drag-and-drop

1. Run `npm run build` locally. A `dist/` folder is created.
2. Go to **[app.netlify.com/drop](https://app.netlify.com/drop)**.
3. Drag the `dist/` folder onto the page. Done. You get a URL.

---

## Installing on your phone as an app (PWA)

Once deployed to a URL:

**iOS (Safari):**
1. Open your Vercel/Netlify URL in Safari.
2. Tap the Share button (square with up-arrow) → **Add to Home Screen**.
3. Name it, tap Add. The icon appears on your home screen and opens fullscreen — no browser chrome.

**Android (Chrome):**
1. Open your URL in Chrome.
2. Tap the three-dot menu → **Install app** (or **Add to Home screen**).
3. Confirm. Same thing — standalone app icon, fullscreen.

The app works offline for everything except market prices (those need internet).

---

## Sharing with others

Just send them the URL. Each person who opens it gets their own empty journal — their data is stored in their own browser and never leaves their device. You can't see each other's trades.

If you want people to see *your* screenshots/examples, use the Claude artifact Publish feature instead, since this version starts empty for every visitor.

---

## Custom domain (optional)

On Vercel or Netlify dashboard → Settings → Domains → Add your own domain (e.g. `tradelog.yourname.com`). Both platforms walk you through it. Free.

---

## Tech stack

- **React 18** + **Vite** — fast builds, fast reloads
- **Recharts** — the equity curve
- **Lucide** — icons
- **localStorage** — all data local to device
- **Binance / CoinGecko / Frankfurter** — live market prices (free, no keys)

No backend. No database. No analytics. It's just you and your trades.

---

## What to do when you outgrow localStorage

localStorage caps at ~5 MB per domain. With compressed screenshots this is maybe 200-300 trades before you hit the wall. When that happens:

- Export your trades to CSV regularly from Settings (already built in)
- Or tell Claude to migrate storage to IndexedDB (unlimited) — it's a 50-line change

---

## License

Yours. Do what you want with it.
