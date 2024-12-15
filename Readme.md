# blog

This is the blog that powers `hariom.dev`, built on
[next.js](https://nextjs.org/) and
deployed to the [cloudflare pages](https://pages.cloudflare.com/).

### Development

```
bun install
bun dev
```

#### Production

```bash
bun build
```

This is connected to the cloudflare pages via github actions. Every push to the master branch will trigger the build and deploy the site.

## Built using AI

This is built completely using AI. I used [v0.dev](https://v0.dev) to generate the entire site. And then I used [Cursor](https://www.cursor.com/) to add the final touches. I am not a professional designer, so I used AI to generate the design. I have given few refrence blog website to the AI to generate the design.

### Blog posts

Every blog post is a markdown file hosted under `pages/$year/`.
