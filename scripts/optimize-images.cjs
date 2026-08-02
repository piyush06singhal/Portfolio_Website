// Author-time image optimisation. Source photos in public/ were straight from
// WhatsApp (one was 1.9 MB); this emits web-sized WebP next to them.
// Re-run with: npm run images
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

// Full-resolution originals live outside public/ so they are never served or
// deployed — only the optimised output below ships.
const src = path.join(__dirname, '..', 'assets-src')
const pub = path.join(__dirname, '..', 'public')

const JOBS = [
  {
    from: 'about-portrait-original.png',
    to: 'about-portrait.webp',
    width: 900,
    quality: 82
  },
  {
    from: 'hero-portrait-original.jpg',
    to: 'hero-portrait.webp',
    width: 800,
    quality: 85
  },
  {
    // Social share card — 1200x630 is the Open Graph standard. Contained on
    // the site's dark background so the portrait isn't cropped through.
    from: 'hero-portrait-original.jpg',
    to: 'og-image.jpg',
    width: 1200,
    height: 630,
    fit: 'contain',
    background: '#0f172a',
    format: 'jpeg',
    quality: 86
  }
]

const kb = (n) => `${(n / 1024).toFixed(0)} KB`

;(async () => {
  for (const job of JOBS) {
    const from = path.join(src, job.from)
    const dest = path.join(pub, job.to)

    if (!fs.existsSync(from)) {
      console.log(`skip   ${job.from} (missing)`)
      continue
    }

    let pipeline = sharp(from)
      .rotate()
      .resize({
        width: job.width,
        height: job.height,
        fit: job.fit || 'inside',
        background: job.background || '#000000',
        withoutEnlargement: !job.height
      })

    pipeline =
      job.format === 'jpeg'
        ? pipeline.jpeg({ quality: job.quality, mozjpeg: true })
        : pipeline.webp({ quality: job.quality })

    await pipeline.toFile(dest)

    const before = fs.statSync(from).size
    const after = fs.statSync(dest).size
    const saved = (((before - after) / before) * 100).toFixed(1)

    console.log(
      `${job.to.padEnd(22)} ${kb(before).padStart(8)} -> ${kb(after).padStart(7)}  (-${saved}%)`
    )
  }
})()
