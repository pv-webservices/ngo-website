import sharp from 'sharp';
// Prepares the logo and the lossless donation QR code from client-supplied files.
// Photographs are prepared separately by scripts/prepare-photos.mjs.
await sharp('public/ngo-website-logo.webp')
  .resize(256, 256, { fit: 'contain', background: '#ffffff' })
  .webp({ quality: 92 })
  .toFile('public/images/logo.webp');
// Preserve the supplied QR pixels and quiet zone, with lossless output.
await sharp('public/banking detail.jpeg')
  .extract({ left: 680, top: 66, width: 267, height: 279 })
  .extend({ top: 8, bottom: 8, left: 14, right: 14, background: '#fff' })
  .png()
  .toFile('public/images/donation-qr.png');
console.log('Prepared logo and QR code.');
