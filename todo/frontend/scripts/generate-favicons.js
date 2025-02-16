import sharp from 'sharp';
import path from 'path';

const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' }
];

async function generateFavicons() {
  const inputSvg = path.join(process.cwd(), 'public', 'favicon.svg');
  
  for (const { size, name } of sizes) {
    await sharp(inputSvg)
      .resize(size, size)
      .png()
      .toFile(path.join(process.cwd(), 'public', name));
    
    console.log(`Generated ${name}`);
  }
}

generateFavicons().catch(console.error);
