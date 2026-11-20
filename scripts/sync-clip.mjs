#!/usr/bin/env node

/**
 * 1-Command LinkedIn Sync (from Download or Clipboard)
 * 
 * Usage:
 *   npm run sync:clip
 * 
 * Checks for:
 *   1. ~/Downloads/posts.json (auto-downloaded by the bookmarklet)
 *   2. Mac Clipboard (pbpaste)
 * Validates the data, updates src/data/posts.json, and prints verified metrics.
 */

import fs from 'fs';
import path from 'path';
import os from 'os';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const targetPath = path.join(rootDir, 'src', 'data', 'posts.json');

const downloadsDir = path.join(os.homedir(), 'Downloads');
const downloadedPostsFile = path.join(downloadsDir, 'posts.json');

let rawData = '';
let source = '';

// 1. Check ~/Downloads/posts.json first
if (fs.existsSync(downloadedPostsFile)) {
  try {
    rawData = fs.readFileSync(downloadedPostsFile, 'utf8');
    source = 'Downloads folder (~/Downloads/posts.json)';
    // Remove temporary download file
    try { fs.unlinkSync(downloadedPostsFile); } catch {}
  } catch {}
}

// 2. Fall back to Mac clipboard (pbpaste)
if (!rawData) {
  try {
    const clip = execSync('pbpaste', { encoding: 'utf8' }).trim();
    if (clip.startsWith('[') && clip.endsWith(']')) {
      rawData = clip;
      source = 'Mac Clipboard';
    }
  } catch {}
}

if (!rawData) {
  console.log('\n❌ No fresh LinkedIn post data found.');
  console.log('👉 Steps to sync:');
  console.log('   1. Open LinkedIn: linkedin.com/in/aditya-raj-9b2165227/recent-activity/all/');
  console.log('   2. Scroll down so your posts load.');
  console.log('   3. Click your "⚡ Sync to Portfolio" bookmark.');
  console.log('   4. Run this command again: npm run sync:clip\n');
  process.exit(1);
}

try {
  const posts = JSON.parse(rawData);

  if (!Array.isArray(posts) || posts.length === 0) {
    console.error('❌ Data is not a valid list of posts.');
    process.exit(1);
  }

  const totalImpressions = posts.reduce((sum, p) => sum + (Number(p.impressions) || 0), 0);

  fs.writeFileSync(targetPath, JSON.stringify(posts, null, 2) + '\n');

  console.log(`\n🎉 SUCCESS! Loaded ${posts.length} posts from ${source}!`);
  console.log(`📊 Total verified reach: ${totalImpressions.toLocaleString()} impressions across top posts.`);
  console.log(`💾 Saved to src/data/posts.json\n`);
  posts.forEach((p, i) => {
    console.log(`   ${i + 1}. [${p.impressions.toLocaleString()} views] ${p.title.slice(0, 65)}...`);
  });
  console.log('');
} catch (error) {
  console.error('❌ Failed to parse JSON:', error.message);
  process.exit(1);
}
