const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '../../packages/excalidraw/dist/prod/fonts');
const dest = path.resolve(__dirname, '../public/fonts');

function copyDir(s, d) {
  if (!fs.existsSync(s)) return;
  fs.mkdirSync(d, { recursive: true });
  for (const name of fs.readdirSync(s)) {
    const srcPath = path.join(s, name);
    const destPath = path.join(d, name);
    const stat = fs.statSync(srcPath);
    if (stat.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  copyDir(src, dest);
  console.log('Copied fonts from', src, 'to', dest);
} catch (err) {
  console.error('Failed to copy fonts:', err.message);
  process.exit(1);
}
