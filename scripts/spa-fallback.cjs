// GitHub Pages has no rewrite rules — it serves 404.html for unknown paths.
// Copying index.html there makes deep links like /projects work on Pages the
// same way vercel.json / netlify.toml handle it on the other hosts.
const fs = require('fs')
const path = require('path')

const dist = path.join(__dirname, '..', 'dist')
const index = path.join(dist, 'index.html')
const fallback = path.join(dist, '404.html')

if (!fs.existsSync(index)) {
  console.error('spa-fallback: dist/index.html not found — run the build first.')
  process.exit(1)
}

fs.copyFileSync(index, fallback)
console.log('spa-fallback: wrote dist/404.html')
