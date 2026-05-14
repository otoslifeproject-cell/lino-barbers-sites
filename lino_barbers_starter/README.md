# Lino Barbers Sites — starter system

Three separate shop sites, one shared Astro codebase:

- `/il-barbiere/`
- `/histon-barbers/`
- `/parkers-barbers/`

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Astro gives you.

## Deploy

1. Create a new GitHub repo, for example `lino-barbers-sites`.
2. Upload/push this folder.
3. Import the repo into Vercel.
4. Set build command: `npm run build`.
5. Set output directory: `dist`.

## Edit shop details

Update:

```txt
src/data/shops.ts
```

Each shop has its own:

- name
- tagline
- intro
- logo
- address
- phone
- Booksy link
- social links
- services
- opening hours
- SEO title/description
- theme

## Immediate missing details

Ask Lino for:

- final trading name for all 3 shops
- addresses
- phone numbers
- opening hours
- correct Booksy link/widget for each shop
- Instagram/Facebook handles
- whether to show prices on the website or only in Booksy
- real photos for each shop
- domains or preferred domain names

## Brand split

- Il Barbiere: heritage / classic / premium / established
- Histon Barbers: local / village / friendly / reliable
- Parker's Barbers: sharper / modern / clean Cambridge identity

## Important rule

Parker's is Lino's third shop, not a competitor. Do not list it in competitor-collision checks except as an owned brand needing separation from the other two.
