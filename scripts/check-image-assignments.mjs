import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

// Check primary assignments, not renderings of the same service/project detail.
const files = [
  'src/lib/content.ts',
  'src/components/hero.tsx',
  'src/components/ui.tsx',
  'src/app/page.tsx',
  'src/app/nosotros/page.tsx',
  'src/app/verificador-sunarp/page.tsx',
];
const assignments = files.flatMap(file =>
  [...readFileSync(file, 'utf8').matchAll(/(?:image:\s*|src=)"(\/images\/[^"\s]+)"/g)]
    .map(match => ({ file, image: match[1] })),
);
const paths = new Map();
const hashes = new Map();
for (const assignment of assignments) {
  assert(!paths.has(assignment.image), `Repeated primary image: ${assignment.image} in ${assignment.file} and ${paths.get(assignment.image)}`);
  paths.set(assignment.image, assignment.file);
  const bytes = readFileSync(`public${assignment.image}`);
  const hash = createHash('sha256').update(bytes).digest('hex');
  assert(!hashes.has(hash), `Duplicate image contents: ${assignment.image} and ${hashes.get(hash)}`);
  hashes.set(hash, assignment.image);
}
assert(assignments.length >= 25, 'Expected all service, project and section image assignments.');
console.log(`PASS: ${assignments.length} primary image assignments, all files exist, no duplicate paths or file contents.`);
