// Author-time generator: pulls official brand paths out of simple-icons and
// writes a plain JS module, so `simple-icons` stays a devDependency and never
// ships to the browser. Re-run with: npm run icons
const fs = require('fs')
const path = require('path')
const si = require('simple-icons')

// key -> [simple-icons slug, colour override or null]
// `null` colour means "use currentColor" (for brands whose mark is near-black
// and would vanish in dark mode).
const MAP = {
  c: ['siC', null],
  cpp: ['siCplusplus', null],
  python: ['siPython', null],
  java: ['siOpenjdk', '#E76F00'],
  javascript: ['siJavascript', null],
  sql: ['siMysql', null],
  react: ['siReact', null],
  node: ['siNodedotjs', null],
  html: ['siHtml5', null],
  express: ['siExpress', 'currentColor'],
  mongodb: ['siMongodb', null],
  tensorflow: ['siTensorflow', null],
  git: ['siGit', null],
  docker: ['siDocker', null],
  linux: ['siLinux', null],
  postman: ['siPostman', null],
  firebase: ['siFirebase', null]
}

const out = {}
for (const [key, [slug, override]] of Object.entries(MAP)) {
  const icon = si[slug]
  if (!icon) throw new Error(`simple-icons is missing ${slug}`)
  out[key] = {
    title: icon.title,
    color: override || `#${icon.hex}`,
    path: icon.path
  }
}

const header = `// GENERATED FILE — do not edit by hand.
// Official brand paths extracted from the \`simple-icons\` devDependency at
// author time (see scratchpad/gen-icons.cjs). All marks are single-path,
// filled, on a 24x24 viewBox.

`

const body = `export const brandIcons = ${JSON.stringify(out, null, 2)}\n`

const dest = path.join(__dirname, '..', 'src', 'components', 'icons', 'brandIcons.js')
fs.writeFileSync(dest, header + body)
console.log(`wrote ${Object.keys(out).length} icons -> ${dest}`)
