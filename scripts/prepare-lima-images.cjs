const fs = require('node:fs');
const path = require('node:path');
const { createRequire } = require('node:module');
const sharp = createRequire(require.resolve('next/package.json'))('sharp');

const sourceRoot = process.argv[2];
if (!sourceRoot) throw new Error('Pass the generated image directory as the first argument.');
const sources = {
  'surquillo': 'exec-49e0c27b-d547-4d2d-99a4-f7eb8152b15c.png',
  'san-isidro': 'exec-04c1d54c-249e-4165-9a7c-4f86bec8d955.png',
  'jesus-maria': 'exec-0a45df93-45dd-4ffe-968b-b18945035e0c.png',
  'miraflores': 'exec-e9311ff4-8f33-4d16-a77e-1d96810cd212.png',
  'barranco': 'exec-ab0855d1-0217-4839-9cde-0dce8944fa7f.png',
  'lince': 'exec-45ce73b0-a44d-41b7-8502-04e08f9c090e.png',
  'san-miguel': 'exec-4ba6b75e-9a4c-46ea-af2e-97fc3e960be1.png',
  'los-olivos': 'exec-cfbb9b8b-7cc1-4663-9322-b69bc7fc6d25.png',
};

async function main() {
  const output = path.join(__dirname, '../public/images/lima');
  fs.mkdirSync(output, { recursive: true });
  for (const [district, name] of Object.entries(sources)) {
    await sharp(path.join(sourceRoot, name)).resize({ width: 1536, withoutEnlargement: true })
      .webp({ quality: 84, effort: 6 }).toFile(path.join(output, `${district}.webp`));
    console.log(district, fs.statSync(path.join(output, `${district}.webp`)).size);
  }
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
