import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

// Leer el SVG
const svgBuffer = readFileSync('./public/icon.svg');

// Generar icon-192x192.png
await sharp(svgBuffer)
  .resize(192, 192)
  .png()
  .toFile('./public/icon-192x192.png');

console.log('✓ icon-192x192.png generado');

// Generar icon-512x512.png
await sharp(svgBuffer)
  .resize(512, 512)
  .png()
  .toFile('./public/icon-512x512.png');

console.log('✓ icon-512x512.png generado');

// Generar favicon.ico (16x16, 32x32, 48x48)
await sharp(svgBuffer)
  .resize(32, 32)
  .png()
  .toFile('./public/favicon-32x32.png');

console.log('✓ favicon-32x32.png generado');

await sharp(svgBuffer)
  .resize(16, 16)
  .png()
  .toFile('./public/favicon-16x16.png');

console.log('✓ favicon-16x16.png generado');

console.log('\n✅ Todos los iconos generados correctamente!');
