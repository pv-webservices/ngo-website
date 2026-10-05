// Generates the site's illustrative photographs with Gemini (Nano Banana 2 Lite)
// at 1K resolution and stores them as optimized WebP files.
// Usage: node --env-file=.env scripts/generate-images.mjs [name ...]
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';

const MODEL = 'gemini-3.1-flash-lite-image';
const OUTPUT_DIR = 'public/images/generated';
const RAW_DIR = 'output/generated-raw';
const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) throw new Error('GEMINI_API_KEY is missing from .env');

const style =
  'Photorealistic documentary photograph, natural warm daylight, authentic Indian people and setting, genuine emotions, shallow depth of field, Canon 35mm look, high detail. No text, no letters, no watermark, no logos.';

const images = {
  'hero-care': {
    ratio: '16:9',
    prompt:
      'A joyful elderly Indian grandmother with silver hair wearing a beige shawl over a simple saree sits in a sunny garden of a peaceful ashram, smiling warmly while a young Indian female caregiver in a white uniform kneels beside her and gently holds both her hands. Subjects placed in the right half of the frame, the left half is soft bright green garden bokeh with golden morning light.',
  },
  'old-age-home': {
    ratio: '4:3',
    prompt:
      'Inside a clean, bright old age home in India, elderly men and women residents sit together at a long table sharing a nutritious meal of dal, roti and rice on steel plates, a kind female caregiver in a pale blue kurta serves food, everyone smiling and talking.',
  },
  'child-welfare': {
    ratio: '4:3',
    prompt:
      'Underprivileged Indian children aged 6 to 11 sit on a colorful mat in a simple bright classroom of a children welfare home, happily studying with notebooks and pencils while a caring young female volunteer teacher helps a girl, a blackboard softly blurred in the background.',
  },
  'yoga-meditation': {
    ratio: '4:3',
    prompt:
      'A group of Indian senior citizens and adults in white and pastel clothes practice yoga and meditation together on mats outdoors in a green ashram courtyard at sunrise, eyes closed in calm meditation pose, a female instructor at the front, peaceful atmosphere.',
  },
  'medical-support': {
    ratio: '4:3',
    prompt:
      'At a free community health camp in India under a white canopy, a friendly Indian doctor wearing a stethoscope checks the blood pressure of a smiling elderly man in a kurta, a female volunteer with a clipboard and boxes of medicines on a table in the background.',
  },
  'day-care': {
    ratio: '4:3',
    prompt:
      'Cheerful elderly Indian men and women spend the day together in a warm, sunlit day care hall, two of them playing carrom, others laughing and chatting over cups of chai, a caregiver bringing biscuits, potted plants and soft curtains.',
  },
  volunteers: {
    ratio: '4:3',
    prompt:
      'Young Indian volunteers wearing simple orange caps distribute food packets, fruit and warm blankets to grateful elderly people and children outside a modest community ashram, people smiling, sense of community service and kindness.',
  },
  'donate-hands': {
    ratio: '4:3',
    prompt:
      'Close-up of the wrinkled hands of an elderly Indian woman and the hands of a young person together gently holding a glossy red heart shaped object, warm golden sunlight from the left, soft blurred warm background. Hands and heart placed on the left side of the frame.',
  },
  'together-festival': {
    ratio: '4:3',
    prompt:
      'Elderly Indian residents and young children laugh together while lighting clay diyas and making a small rangoli during a Diwali celebration at an ashram courtyard in the evening, warm lamp glow, marigold garlands, a heartwarming intergenerational moment.',
  },
};

async function generate(name, { ratio, prompt }) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': API_KEY,
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${prompt} ${style}` }] }],
        generationConfig: {
          responseModalities: ['IMAGE'],
          imageConfig: { aspectRatio: ratio, imageSize: '1K' },
        },
      }),
    },
  );
  const data = await response.json();
  if (!response.ok)
    throw new Error(
      `${name}: ${response.status} ${JSON.stringify(data.error)}`,
    );
  const part = data.candidates?.[0]?.content?.parts?.find((p) => p.inlineData);
  if (!part) throw new Error(`${name}: no image returned`);
  const buffer = Buffer.from(part.inlineData.data, 'base64');
  await writeFile(`${RAW_DIR}/${name}.png`, buffer);
  const info = await sharp(buffer)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(`${OUTPUT_DIR}/${name}.webp`);
  console.log(`${name}: ${info.width}x${info.height}, ${info.size} bytes`);
}

await mkdir(OUTPUT_DIR, { recursive: true });
await mkdir(RAW_DIR, { recursive: true });
const requested = process.argv.slice(2);
const selected = Object.entries(images).filter(
  ([name]) => !requested.length || requested.includes(name),
);
const results = await Promise.allSettled(
  selected.map(([name, config]) => generate(name, config)),
);
results
  .filter((r) => r.status === 'rejected')
  .forEach((r) => console.error(r.reason.message));
