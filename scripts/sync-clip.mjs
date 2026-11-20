#!/usr/bin/env node

/**
 * 1-Command Clipboard Sync
 * 
 * Usage:
 *   npm run sync:clip
 * 
 * Reads the LinkedIn posts copied to your clipboard by the bookmarklet,
 * validates the structure, and writes to src/data/posts.json.
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const targetPath = path.join(rootDir, 'src', 'data', 'posts.json');

try {
  let clipboardText = '';
  try {
    clipboardText = execSync('pbpaste', { encoding: 'utf8' });
  } catch {
    console.error('❌ Could not read clipboard using pbpaste.');
    process.exit(1);
  }

  if (!clipboardText || !clipboardText.trim().startsWith('[')) {
    console.error('❌ No LinkedIn post JSON found on your clipboard.');
    console.log('👉 First click your "⚡ Sync to Portfolio" bookmark on LinkedIn, then run this command again!');
    process.exit(1);
  }

  const posts = JSON.parse(clipboardText);

  if (!Array.isArray(posts) || posts.length === 0) {
    console.error('❌ Clipboard data is not a valid list of posts.');
    process.exit(1);
  }

  const totalImpressions = posts.reduce((sum, p) => sum + (Number(p.impressions) || 0), 0);

  fs.writeFileSync(targetPath, JSON.stringify(posts, null, 2) + '\n');

  console.log(`\n🎉 SUCCESS! Updated src/data/posts.json with ${posts.length} posts from your clipboard!`);
  console.log(`📊 Total verified reach: ${totalImpressions.toLocaleString()} impressions across top posts.\n`);
  posts.forEach((p, i) => {
    console.log(`   ${i + 1}. [${p.impressions.toLocaleString()} views] ${p.title.slice(0, 70)}...`);
  });
  console.log('');
} catch (error) {
  console.error('❌ Error processing clipboard:', error.message);
  process.exit(1);
}
