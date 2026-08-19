# newaddy-redirects

Splash pages for five domains. Each plays a short branded video, then sends the visitor to [newaddy.ai](https://newaddy.ai/).

| File | Video | Point this hostname at the Netlify site |
|---|---|---|
| `app.html` | `NA-app6sec.mp4` | `app.newaddy.ai` |
| `blog.html` | `NA-blog.mp4` | `blog.newaddy.ai` |
| `live.html` | `NA-live.mp4` | `live.newaddy.ai` |
| `shop.html` | `NA-shop.mp4` | `shop.newaddy.ai` |
| `store.html` | `NA-store.mp4` | `store.newaddy.ai` |

White background, floating logo, copy: **hi!! redirect in process to newaddy.ai**. Video autoplays muted. Redirects when the video ends, or after 10 seconds, whichever comes first.

Videos and `logo-floating.png` are already in `assets/`.

## 1. GitHub

```bash
cd /Users/ciscomacbook/Documents/Claude/Projects/newaddy-redirects
git init
git add .
git commit -m "Splash redirects to newaddy.ai"
gh repo create newaddy-redirects --public --source=. --remote=origin --push
```

Or create `newaddy-redirects` empty on github.com, then:

```bash
git remote add origin git@github.com:YOURUSER/newaddy-redirects.git
git branch -M main
git push -u origin main
```

## 2. Netlify

1. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**
2. Pick the `newaddy-redirects` repo
3. Build settings: leave **Build command** empty, **Publish directory** `.`
4. Deploy

## 3. Point the five domains

In Netlify → **Domain management** → **Add domain alias** for each:

- `app.newaddy.ai`
- `blog.newaddy.ai`
- `live.newaddy.ai`
- `shop.newaddy.ai`
- `store.newaddy.ai`

DNS (at your registrar), for each hostname:

```
CNAME  app    <your-site>.netlify.app
CNAME  blog   <your-site>.netlify.app
CNAME  live   <your-site>.netlify.app
CNAME  shop   <your-site>.netlify.app
CNAME  store  <your-site>.netlify.app
```

If a hostname is an **apex** (example.com, no subdomain), use Netlify’s A/AAAA/ALIAS records instead of CNAME.

`netlify.toml` already maps those hosts to the matching HTML. If your real hostnames differ, edit the `Host` lists there and the map in `index.html`.

## Check

Open `app.html` locally, or after deploy:

- Logo bobs on white
- Video starts (muted — browsers block unmuted autoplay)
- After the clip (or 10s) you land on https://newaddy.ai/
