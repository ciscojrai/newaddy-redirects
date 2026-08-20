# newaddy-redirects

WIP splash for every Newaddy and AddyLife TLD. Each plays a short clip, then
sends the visitor to **https://newaddy.ai/** (FavAtlas will live there).

**Do not attach `newaddy.ai` to this Netlify site.** That hostname is the
globe (FavAtlas → Newaddy) at the `favatlas` Netlify project. This splash
site only holds the other TLDs. If `.ai` is added here, visitors never
reach the map.

## Newaddy

| Host | Page | Video |
|---|---|---|
| newaddy.app | `app.html` | NA-app6sec.mp4 |
| newaddy.blog | `blog.html` | NA-blog.mp4 |
| newaddy.live | `live.html` | NA-live.mp4 |
| newaddy.shop | `shop.html` | NA-shop.mp4 |
| newaddy.store | `store.html` | NA-store.mp4 |

Also mapped: `newaaddy.*` (double-a spelling).

## AddyLife

| Host | Page | Video |
|---|---|---|
| addylife.app | `al-app.html` | AL-app5sec.mp4 |
| addylife.biz | `al-biz.html` | AL-online.mp4 (no dedicated .biz clip) |
| addylife.online | `al-online.html` | AL-online.mp4 |
| addylife.site | `al-site.html` | AL-site.mp4 |
| addylife.store | `al-store.html` | AL-store.mp4 |

White background, floating logo, copy: **hi!! redirect in process to newaddy.ai**.
Video autoplays muted. Redirects when the clip ends, or after 10 seconds.

Repo: https://github.com/ciscojrai/newaddy-redirects

## Deploy

1. Netlify → Import `ciscojrai/newaddy-redirects`
2. Publish directory `.` · no build command
3. Domain management → add every host in the tables above
4. DNS at the registrar, for each hostname:

```
CNAME  @    <your-site>.netlify.app     # only if the DNS host allows CNAME flattening
```

Apex TLDs (`.app`, `.blog`, `.live`, `.shop`, `.store`, `.biz`, `.online`, `.site`)
usually need **Netlify DNS** or an ALIAS/ANAME. A raw CNAME on apex is often
blocked. Easiest: add the domain in Netlify and use the nameservers they give you.

If a hostname is not in the table, edit `netlify.toml` and the map in `index.html`.
