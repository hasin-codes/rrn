#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Robots.txt Generator for RunRise Nation
 * 
 * This script generates a robots.txt file based on the site structure and content.
 * It analyzes the page structure to determine what should be allowed/disallowed for search engines.
 */

// Configuration
const SITE_URL = 'https://runrisenation.com'; // Update this with your actual domain
const OUTPUT_FILE = 'public/robots.txt';

// Pages that should be disallowed for search engines
const DISALLOWED_PATHS = [
  '/profile',           // User-specific content
  '/race/bib',          // Personal race numbers
  '/race/certificates', // Personal certificates
  '/api/',              // API endpoints
  '/_next/',            // Next.js internal files
  '/admin/',            // Admin pages (if any)
  '/private/',          // Private content
];

// Pages that should be allowed (explicitly)
const ALLOWED_PATHS = [
  '/',                  // Home page
  '/about',             // About page
  '/events',            // Events page
  '/blog',              // Blog page
  '/engage/register',   // Registration page
  '/engage/collab',     // Collaboration page
  '/engage/stories',    // Stories page
  '/engage/faq',        // FAQ page
  '/race/essentials',   // Race essentials (public info)
];

// Sitemap locations
const SITEMAPS = [
  '/sitemap.xml',
  '/sitemap-index.xml'  // If you have multiple sitemaps
];

/**
 * Generate robots.txt content based on site structure
 */
function generateRobotsTxt() {
  let robotsTxt = `# Robots.txt for RunRise Nation
# Generated automatically based on site structure
# Last updated: ${new Date().toISOString()}

User-agent: *

# Allow access to main content pages
`;

  // Add allowed paths
  for (const path of ALLOWED_PATHS) {
    robotsTxt += `Allow: ${path}\n`;
  }

  robotsTxt += `\n# Disallow access to private/user-specific content\n`;

  // Add disallowed paths
  for (const path of DISALLOWED_PATHS) {
    robotsTxt += `Disallow: ${path}\n`;
  }

  // Add common disallowed patterns
  robotsTxt += `
# Disallow common patterns
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /*.txt$
Disallow: /_next/static/
Disallow: /api/
Disallow: /admin/
Disallow: /private/
Disallow: /temp/
Disallow: /tmp/

# Allow specific file types that are useful for SEO
Allow: /*.css$
Allow: /*.js$
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.gif$
Allow: /*.svg$
Allow: /*.webp$
Allow: /*.ico$

# Crawl delay (optional - be respectful to search engines)
Crawl-delay: 1

# Sitemap locations
`;

  // Add sitemap references
  for (const sitemap of SITEMAPS) {
    robotsTxt += `Sitemap: ${SITE_URL}${sitemap}\n`;
  }

  // Add specific rules for different bots
  robotsTxt += `
# Specific rules for different search engines

# Googlebot
User-agent: Googlebot
Allow: /
Crawl-delay: 1

# Bingbot
User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Yandex
User-agent: YandexBot
Allow: /
Crawl-delay: 2

# Baidu
User-agent: Baiduspider
Allow: /
Crawl-delay: 2

# Block aggressive crawlers
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: BLEXBot
Disallow: /
`;

  return robotsTxt;
}

/**
 * Analyze site structure to determine robots.txt rules
 */
function analyzeSiteStructure() {
  const appDir = path.join(process.cwd(), 'app');
  const analysis = {
    totalPages: 0,
    publicPages: 0,
    privatePages: 0,
    apiEndpoints: 0,
    staticAssets: 0
  };

  try {
    // Count pages in app directory
    const pages = findPages(appDir);
    analysis.totalPages = pages.length;
    
    // Categorize pages
    for (const page of pages) {
      if (DISALLOWED_PATHS.some(disallowed => page.startsWith(disallowed))) {
        analysis.privatePages++;
      } else {
        analysis.publicPages++;
      }
    }

    // Check for API routes
    const apiDir = path.join(appDir, 'api');
    if (fs.existsSync(apiDir)) {
      analysis.apiEndpoints = countFiles(apiDir, '.ts') + countFiles(apiDir, '.js');
    }

    // Check static assets
    const publicDir = path.join(process.cwd(), 'public');
    if (fs.existsSync(publicDir)) {
      analysis.staticAssets = countFiles(publicDir);
    }

  } catch (error) {
    console.warn('Warning: Could not analyze site structure:', error.message);
  }

  return analysis;
}

/**
 * Recursively find pages in directory
 */
function findPages(dir, basePath = '') {
  const pages = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (['node_modules', '.next', 'components', 'lib', 'hooks', 'scripts'].includes(item)) {
          continue;
        }
        
        const newBasePath = basePath + '/' + item;
        pages.push(...findPages(fullPath, newBasePath));
      } else if (item === 'page.tsx') {
        const pagePath = basePath || '/';
        pages.push(pagePath);
      }
    }
  } catch (error) {
    // Directory doesn't exist or can't be read
  }
  
  return pages;
}

/**
 * Count files in directory recursively
 */
function countFiles(dir, extension = null) {
  let count = 0;
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        count += countFiles(fullPath, extension);
      } else if (!extension || item.endsWith(extension)) {
        count++;
      }
    }
  } catch (error) {
    // Directory doesn't exist or can't be read
  }
  
  return count;
}

/**
 * Main function
 */
function main() {
  console.log('🤖 Generating robots.txt for RunRise Nation...');
  
  // Analyze site structure
  const analysis = analyzeSiteStructure();
  console.log('📊 Site Analysis:');
  console.log(`   Total pages: ${analysis.totalPages}`);
  console.log(`   Public pages: ${analysis.publicPages}`);
  console.log(`   Private pages: ${analysis.privatePages}`);
  console.log(`   API endpoints: ${analysis.apiEndpoints}`);
  console.log(`   Static assets: ${analysis.staticAssets}`);
  
  // Generate robots.txt content
  const robotsContent = generateRobotsTxt();
  
  // Ensure public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // Write robots.txt file
  fs.writeFileSync(OUTPUT_FILE, robotsContent, 'utf8');
  
  console.log(`✅ Robots.txt generated successfully: ${OUTPUT_FILE}`);
  console.log(`📄 File size: ${(robotsContent.length / 1024).toFixed(2)} KB`);
  console.log(`🚫 Disallowed paths: ${DISALLOWED_PATHS.length}`);
  console.log(`✅ Allowed paths: ${ALLOWED_PATHS.length}`);
  console.log(`🗺️  Sitemap references: ${SITEMAPS.length}`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { generateRobotsTxt, analyzeSiteStructure, DISALLOWED_PATHS, ALLOWED_PATHS };
