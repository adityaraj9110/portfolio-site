#!/usr/bin/env node

/**
 * Notion to posts.json Sync Script
 * 
 * Usage:
 *   node scripts/sync-notion.mjs
 *   or: npm run sync:notion
 * 
 * Environment variables required in .env.local:
 *   NOTION_TOKEN=ntn_...
 *   NOTION_DATABASE_ID=...
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Simple .env.local parser
function loadEnv() {
  const envPath = path.join(rootDir, '.env.local');
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    for (const line of content.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const idx = trimmed.indexOf('=');
      if (idx !== -1) {
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}

loadEnv();

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const targetPath = path.join(rootDir, 'src', 'data', 'posts.json');

async function sync() {
  console.log('🔄 Checking Notion credentials...');

  if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
    console.error('❌ Error: NOTION_TOKEN or NOTION_DATABASE_ID is missing in .env.local');
    console.log('👉 Please add your Notion credentials to .env.local:');
    console.log('   NOTION_TOKEN=ntn_...');
    console.log('   NOTION_DATABASE_ID=...');
    console.log('\nKeeping existing src/data/posts.json untouched.');
    process.exit(1);
  }

  console.log(`📡 Fetching database ${NOTION_DATABASE_ID.slice(0, 8)}... from Notion API...`);

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filter: {
          property: 'Featured',
          checkbox: { equals: true },
        },
        sorts: [{ property: 'Impressions', direction: 'descending' }],
        page_size: 10,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error(`❌ Notion API Error (${response.status}):`, errText);
      process.exit(1);
    }

    const data = await response.json();
    const results = data.results || [];

    if (results.length === 0) {
      console.warn('⚠️ Warning: Notion query returned 0 featured rows. Make sure the "Featured" checkbox is checked on your database rows.');
      process.exit(0);
    }

    const posts = results.map((page) => {
      const p = page.properties;
      return {
        id: page.id,
        title: p.Title?.title?.[0]?.plain_text ?? 'Untitled Engineering Note',
        takeaway: p.Takeaway?.rich_text?.[0]?.plain_text ?? '',
        topic: p.Topic?.select?.name ?? 'Engineering',
        url: p.PostURL?.url ?? 'https://www.linkedin.com/in/aditya-raj-9b2165227/',
        impressions: p.Impressions?.number ?? 0,
        reactions: p.Reactions?.number ?? 0,
        comments: p.Comments?.number ?? 0,
        publishedDate: p.PublishedDate?.date?.start ?? '',
      };
    });

    const totalImpressions = posts.reduce((sum, p) => sum + (p.impressions || 0), 0);

    fs.writeFileSync(targetPath, JSON.stringify(posts, null, 2) + '\n');
    console.log(`✅ Success! Synced ${posts.length} posts to src/data/posts.json`);
    console.log(`📊 Total verified reach: ${totalImpressions.toLocaleString()} impressions across top posts.`);
  } catch (error) {
    console.error('❌ Failed to sync Notion posts:', error);
    process.exit(1);
  }
}

sync();
