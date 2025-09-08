# SEO & Content Generators for RunRise Nation

This directory contains automated generators for SEO optimization and content analysis tools for the RunRise Nation website.

## 🗺️ Sitemap Generator (`generate-sitemap.js`)

Generates an XML sitemap based on your Next.js app directory structure.

### Features
- **Automatic Page Discovery**: Scans all `page.tsx` files in the app directory
- **Smart Prioritization**: Assigns appropriate priorities and change frequencies
- **SEO Optimized**: Follows XML sitemap standards for search engines
- **Configurable**: Easy to customize page priorities and frequencies

### Usage
```bash
npm run generate:sitemap
```

### Output
- Creates `public/sitemap.xml`
- Includes all discovered pages with proper metadata
- Optimized for search engine crawling

### Configuration
Edit the `PAGE_CONFIG` object in the script to customize:
- Page priorities (0.0 - 1.0)
- Change frequencies (daily, weekly, monthly, yearly)
- Site URL

## 🤖 Robots.txt Generator (`generate-robots.js`)

Generates a robots.txt file based on your site structure and content analysis.

### Features
- **Content Analysis**: Analyzes site structure to determine access rules
- **Smart Disallows**: Automatically blocks private/user-specific content
- **Search Engine Friendly**: Includes proper crawl delays and sitemap references
- **Bot-Specific Rules**: Different rules for different search engines

### Usage
```bash
npm run generate:robots
```

### Output
- Creates `public/robots.txt`
- Blocks access to private pages (profile, personal certificates, etc.)
- Allows access to public content
- References sitemap locations

### Configuration
Edit the following arrays in the script:
- `DISALLOWED_PATHS`: Pages to block from search engines
- `ALLOWED_PATHS`: Pages to explicitly allow
- `SITEMAPS`: Sitemap file locations

## 🧠 GLM Text Generator (`generate-glm-txt.js`)

Generates training data for General Language Models based on your website content.

### Features
- **Content Extraction**: Extracts text from React components and pages
- **Structured Output**: Organizes content by type and category
- **Training Ready**: Formats content for language model training
- **Comprehensive Coverage**: Includes all major content types

### Usage
```bash
npm run generate:glm
```

### Output
- Creates `public/glm-training-data.txt`
- Extracts text from pages and components
- Organizes content by type (titles, paragraphs, buttons, etc.)
- Includes structured content sections

### Configuration
Edit the following arrays in the script:
- `INCLUDE_PAGES`: Pages to include in training data
- `INCLUDE_COMPONENTS`: Components to include in training data
- `CONTENT_PATTERNS`: Regex patterns for content extraction

## 🚀 Quick Start

### Generate All Files
```bash
npm run generate:all
# or
npm run seo:generate
```

### Individual Generators
```bash
# Generate sitemap only
npm run generate:sitemap

# Generate robots.txt only
npm run generate:robots

# Generate GLM training data only
npm run generate:glm
```

## 📁 File Structure

```
scripts/
├── generate-sitemap.js    # XML sitemap generator
├── generate-robots.js     # Robots.txt generator
├── generate-glm-txt.js    # GLM training data generator
└── README.md             # This documentation

public/
├── sitemap.xml           # Generated sitemap
├── robots.txt            # Generated robots.txt
└── glm-training-data.txt # Generated GLM training data
```

## ⚙️ Configuration

### Site URL
Update the `SITE_URL` constant in each script with your actual domain:
```javascript
const SITE_URL = 'https://yourdomain.com';
```

### Page Priorities
Customize page priorities in `generate-sitemap.js`:
```javascript
const PAGE_CONFIG = {
  '/': { priority: '1.0', changefreq: 'weekly' },
  '/about': { priority: '0.9', changefreq: 'monthly' },
  // ... more pages
};
```

### Content Rules
Modify robots.txt rules in `generate-robots.js`:
```javascript
const DISALLOWED_PATHS = [
  '/profile',           // User-specific content
  '/race/bib',          // Personal race numbers
  // ... more disallowed paths
];
```

## 🔧 Customization

### Adding New Pages
1. Create your page in the `app/` directory
2. The sitemap generator will automatically detect it
3. Add custom configuration to `PAGE_CONFIG` if needed

### Modifying Content Extraction
Edit the `CONTENT_PATTERNS` object in `generate-glm-txt.js`:
```javascript
const CONTENT_PATTERNS = {
  title: /<h[1-6][^>]*>([^<]+)<\/h[1-6]>/gi,
  paragraph: /<p[^>]*>([^<]+)<\/p>/gi,
  // Add your own patterns
};
```

### Excluding Files
Modify the exclusion lists in each script:
```javascript
// In generate-sitemap.js and generate-robots.js
if (['node_modules', '.next', 'public', 'components', 'lib', 'hooks', 'scripts'].includes(item)) {
  continue;
}
```

## 📊 Output Examples

### Sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://runrisenation.com/</loc>
    <lastmod>2024-01-15T10:30:00.000Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- ... more URLs -->
</urlset>
```

### Robots.txt
```
User-agent: *
Allow: /
Allow: /about
Allow: /events
Disallow: /profile
Disallow: /race/bib
Sitemap: https://runrisenation.com/sitemap.xml
```

### GLM Training Data
```
# GLM Training Data for RunRise Nation
## HERO SECTION CONTENT
1. Join the Ultimate Running Community
2. Transform Your Running Journey
3. Connect with Elite Pacers
...
```

## 🎯 Best Practices

### SEO Optimization
1. **Run generators regularly**: Update sitemap and robots.txt when adding new pages
2. **Monitor file sizes**: Keep sitemap under 50MB and 50,000 URLs
3. **Test robots.txt**: Use Google Search Console to verify crawling rules
4. **Update priorities**: Adjust page priorities based on content importance

### Content Management
1. **Review extracted content**: Check GLM training data for accuracy
2. **Update patterns**: Modify extraction patterns as your content structure evolves
3. **Exclude sensitive content**: Ensure private information isn't included in training data
4. **Version control**: Track changes to generated files

### Performance
1. **Run during build**: Include generators in your build process
2. **Cache results**: Consider caching for large sites
3. **Monitor execution time**: Optimize scripts for large content bases
4. **Error handling**: Check console output for warnings and errors

## 🐛 Troubleshooting

### Common Issues

#### Scripts not found
```bash
# Make sure you're in the project root
cd /path/to/your/project
npm run generate:sitemap
```

#### Permission errors
```bash
# Make scripts executable (Unix/Mac)
chmod +x scripts/*.js
```

#### Missing files
- Ensure all referenced pages and components exist
- Check file paths in configuration arrays
- Verify the `app/` directory structure

#### Large file sizes
- Reduce content extraction patterns
- Limit the number of included files
- Add content length limits

### Getting Help

1. **Check console output**: All scripts provide detailed logging
2. **Verify file paths**: Ensure all referenced files exist
3. **Review configuration**: Check constants and arrays in each script
4. **Test individually**: Run each generator separately to isolate issues

## 📈 Monitoring

### Sitemap Monitoring
- Submit sitemap to Google Search Console
- Monitor indexing status
- Check for crawl errors

### Robots.txt Monitoring
- Use Google Search Console robots.txt tester
- Monitor crawl statistics
- Verify disallowed pages aren't being crawled

### GLM Data Quality
- Review extracted content for accuracy
- Check for sensitive information
- Validate content structure and formatting

## 🔄 Automation

### CI/CD Integration
Add to your build process:
```json
{
  "scripts": {
    "build": "npm run generate:all && next build"
  }
}
```

### Scheduled Updates
Set up cron jobs or GitHub Actions to regenerate files regularly:
```yaml
# .github/workflows/seo-update.yml
name: SEO Update
on:
  schedule:
    - cron: '0 0 * * 0'  # Weekly
jobs:
  update-seo:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm run generate:all
      - run: git add public/ && git commit -m "Update SEO files"
```

## 📝 License

These generators are part of the RunRise Nation project and follow the same license terms.
