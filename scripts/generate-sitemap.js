#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * XML Sitemap Generator for RunRise Nation
 * 
 * This script automatically generates a sitemap.xml file based on the Next.js app directory structure.
 * It scans all page.tsx files and creates appropriate sitemap entries with proper priorities and change frequencies.
 */

// Configuration
const SITE_URL = 'https://runrisenation.com'; // Update this with your actual domain
const OUTPUT_FILE = 'public/sitemap.xml';

// Page priorities and change frequencies based on content type
const PAGE_CONFIG = {
  // Main pages - high priority
  '/': { priority: '1.0', changefreq: 'weekly' },
  '/about': { priority: '0.9', changefreq: 'monthly' },
  '/events': { priority: '0.9', changefreq: 'weekly' },
  '/blog': { priority: '0.8', changefreq: 'weekly' },
  
  // Engage pages - medium-high priority
  '/engage/register': { priority: '0.8', changefreq: 'monthly' },
  '/engage/collab': { priority: '0.7', changefreq: 'monthly' },
  '/engage/stories': { priority: '0.7', changefreq: 'weekly' },
  '/engage/faq': { priority: '0.6', changefreq: 'monthly' },
  
  // Race pages - medium priority
  '/race/bib': { priority: '0.6', changefreq: 'monthly' },
  '/race/certificates': { priority: '0.6', changefreq: 'monthly' },
  '/race/essentials': { priority: '0.6', changefreq: 'monthly' },
  
  // Profile page - medium priority
  '/profile': { priority: '0.7', changefreq: 'weekly' }
};

/**
 * Recursively scan directory for page.tsx files
 */
function findPages(dir, basePath = '') {
  const pages = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other non-app directories
        if (['node_modules', '.next', 'public', 'components', 'lib', 'hooks', 'scripts'].includes(item)) {
          continue;
        }
        
        const newBasePath = basePath + '/' + item;
        pages.push(...findPages(fullPath, newBasePath));
      } else if (item === 'page.tsx') {
        // Found a page file
        const pagePath = basePath || '/';
        pages.push(pagePath);
      }
    }
  } catch (error) {
    console.warn(`Warning: Could not read directory ${dir}:`, error.message);
  }
  
  return pages;
}

/**
 * Generate XML sitemap content
 */
function generateSitemap(pages) {
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Sort pages by priority (highest first)
  const sortedPages = pages.sort((a, b) => {
    const priorityA = PAGE_CONFIG[a]?.priority || '0.5';
    const priorityB = PAGE_CONFIG[b]?.priority || '0.5';
    return parseFloat(priorityB) - parseFloat(priorityA);
  });

  for (const page of sortedPages) {
    const config = PAGE_CONFIG[page] || { priority: '0.5', changefreq: 'monthly' };
    const url = `${SITE_URL}${page}`;
    
    sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${config.priority}</priority>
  </url>`;
  }

  sitemap += `
</urlset>`;

  return sitemap;
}

/**
 * Main function
 */
function main() {
  console.log('🗺️  Generating sitemap for RunRise Nation...');
  
  // Find all pages in the app directory
  const appDir = path.join(process.cwd(), 'app');
  const pages = findPages(appDir);
  
  console.log(`📄 Found ${pages.length} pages:`);
  pages.forEach(page => {
    const config = PAGE_CONFIG[page] || { priority: '0.5', changefreq: 'monthly' };
    console.log(`   ${page} (priority: ${config.priority}, changefreq: ${config.changefreq})`);
  });
  
  // Generate sitemap content
  const sitemapContent = generateSitemap(pages);
  
  // Ensure public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // Write sitemap file
  fs.writeFileSync(OUTPUT_FILE, sitemapContent, 'utf8');
  
  console.log(`✅ Sitemap generated successfully: ${OUTPUT_FILE}`);
  console.log(`🌐 Sitemap contains ${pages.length} URLs`);
  console.log(`📊 Total size: ${(sitemapContent.length / 1024).toFixed(2)} KB`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { generateSitemap, findPages, PAGE_CONFIG };
