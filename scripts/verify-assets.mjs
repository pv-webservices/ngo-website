import sharp from 'sharp';
import assert from 'node:assert/strict';
const original = await sharp('public/banking detail.jpeg')
  .extract({ left: 680, top: 66, width: 267, height: 279 })
  .removeAlpha()
  .raw()
  .toBuffer();
const prepared = await sharp('public/images/donation-qr.png')
  .extract({ left: 14, top: 8, width: 267, height: 279 })
  .removeAlpha()
  .raw()
  .toBuffer();
assert(
  original.equals(prepared),
  'Prepared donation QR must preserve every supplied pixel',
);
console.log(
  'PASS: all pixels in the supplied donation QR are preserved. No transaction was performed.',
);
