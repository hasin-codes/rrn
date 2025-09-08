#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * GLM Text Generator for RunRise Nation
 * 
 * This script generates GLM (General Language Model) training text based on the website content.
 * It extracts text content from pages and components to create training data for language models.
 */

// Configuration
const OUTPUT_FILE = 'public/glm-training-data.txt';
const MAX_CONTENT_LENGTH = 10000; // Maximum characters per page

// Content extraction patterns
const CONTENT_PATTERNS = {
  // React component patterns
  title: /<h[1-6][^>]*>([^<]+)<\/h[1-6]>/gi,
  paragraph: /<p[^>]*>([^<]+)<\/p>/gi,
  button: /<button[^>]*>([^<]+)<\/button>/gi,
  link: /<a[^>]*>([^<]+)<\/a>/gi,
  
  // Text content patterns
  textContent: /['"`]([^'"`]{10,})['"`]/g,
  jsxText: />([^<>{}\n]{10,})</g,
  
  // Meta content
  description: /description['":\s]*['"`]([^'"`]+)['"`]/gi,
  keywords: /keywords['":\s]*['"`]([^'"`]+)['"`]/gi,
};

// Pages to include in GLM training data
const INCLUDE_PAGES = [
  'app/page.tsx',
  'app/about/page.tsx',
  'app/events/page.tsx',
  'app/blog/page.tsx',
  'app/engage/register/page.tsx',
  'app/engage/collab/page.tsx',
  'app/engage/stories/page.tsx',
  'app/engage/faq/page.tsx',
  'app/race/essentials/page.tsx',
];

// Components to include
const INCLUDE_COMPONENTS = [
  'components/HeroSection.tsx',
  'components/AboutSection.tsx',
  'components/EventsSection.tsx',
  'components/PacersSection.tsx',
  'components/StoriesSection.tsx',
  'components/StatsSection.tsx',
  'components/Navbar.tsx',
  'components/Footer.tsx',
];

/**
 * Extract text content from a file
 */
function extractTextContent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const extractedText = [];
    
    // Extract different types of content
    for (const [type, pattern] of Object.entries(CONTENT_PATTERNS)) {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        const text = match[1].trim();
        if (text.length > 5 && text.length < 200) {
          extractedText.push({
            type,
            text: text.replace(/\s+/g, ' '),
            source: path.basename(filePath)
          });
        }
      }
    }
    
    // Extract JSX text content more broadly
    const jsxMatches = content.match(/>([^<>{}\n]{10,200})</g);
    if (jsxMatches) {
      jsxMatches.forEach(match => {
        const text = match.slice(1, -1).trim();
        if (text && !text.includes('{') && !text.includes('}') && text.length > 10) {
          extractedText.push({
            type: 'jsx-text',
            text: text.replace(/\s+/g, ' '),
            source: path.basename(filePath)
          });
        }
      });
    }
    
    return extractedText;
  } catch (error) {
    console.warn(`Warning: Could not read file ${filePath}:`, error.message);
    return [];
  }
}

/**
 * Generate GLM training text from extracted content
 */
function generateGLMText(extractedContent) {
  let glmText = `# GLM Training Data for RunRise Nation
# Generated from website content for language model training
# Generated on: ${new Date().toISOString()}

## Website Overview
RunRise Nation is a passionate running community platform that showcases the power of modern web development with a focus on user experience, performance, and maintainable code architecture. The application features a unique neumorphic design system that creates depth and visual interest through carefully crafted shadows and lighting effects.

## Content Categories

`;

  // Group content by type
  const contentByType = {};
  extractedContent.forEach(item => {
    if (!contentByType[item.type]) {
      contentByType[item.type] = [];
    }
    contentByType[item.type].push(item);
  });

  // Generate content for each type
  for (const [type, items] of Object.entries(contentByType)) {
    glmText += `### ${type.toUpperCase()} CONTENT\n\n`;
    
    // Remove duplicates and limit content
    const uniqueItems = [...new Set(items.map(item => item.text))];
    const limitedItems = uniqueItems.slice(0, 50); // Limit to 50 items per type
    
    limitedItems.forEach((text, index) => {
      glmText += `${index + 1}. ${text}\n`;
    });
    
    glmText += `\n`;
  }

  // Add structured content sections
  glmText += `## STRUCTURED CONTENT SECTIONS

### HERO SECTION CONTENT
The hero section showcases the main value proposition of RunRise Nation, featuring compelling headlines, call-to-action buttons, and visual elements that engage visitors immediately.

### ABOUT SECTION CONTENT
The about section provides detailed information about the running community, its mission, values, and the people behind the organization.

### EVENTS SECTION CONTENT
The events section highlights upcoming running events, training sessions, and community activities with detailed descriptions and registration information.

### PACERS SECTION CONTENT
The pacers section showcases elite runners and pace leaders who help guide community members in their running journey.

### STORIES SECTION CONTENT
The stories section features inspiring running stories from community members, sharing experiences, achievements, and personal journeys.

### STATS SECTION CONTENT
The stats section displays impressive statistics about the community, including member count, events completed, and other key metrics.

### NAVIGATION CONTENT
The navigation system provides clear pathways for users to explore different sections of the website, including main pages and sub-sections.

### FOOTER CONTENT
The footer contains important links, contact information, and additional resources for community members.

## CONTENT PATTERNS AND STRUCTURE

### Call-to-Action Patterns
- Registration and signup prompts
- Event participation invitations
- Community engagement requests
- Resource access prompts

### Informational Content Patterns
- Feature descriptions
- Benefit explanations
- Process outlines
- FAQ responses

### Community-Focused Content
- Member testimonials
- Success stories
- Training tips
- Event announcements

## TECHNICAL CONTENT CONTEXT

### Design System References
- Neumorphic design elements
- Color palette descriptions
- Typography specifications
- Layout principles

### Performance Features
- Responsive design mentions
- Mobile optimization references
- Loading performance notes
- User experience enhancements

### Community Features
- Member registration processes
- Event management systems
- Story submission workflows
- Collaboration opportunities

## CONTENT OPTIMIZATION NOTES

### SEO-Friendly Content
- Keyword-rich descriptions
- Meta content optimization
- Structured data references
- Search engine friendly URLs

### User Experience Content
- Clear navigation instructions
- Helpful error messages
- Success confirmations
- Progress indicators

### Accessibility Content
- Screen reader friendly text
- Alt text descriptions
- Focus management instructions
- Keyboard navigation support

## END OF GLM TRAINING DATA

Total content items extracted: ${extractedContent.length}
Content types: ${Object.keys(contentByType).length}
Generated on: ${new Date().toISOString()}
`;

  return glmText;
}

/**
 * Process all files and extract content
 */
function processFiles() {
  const allContent = [];
  
  // Process pages
  console.log('📄 Processing pages...');
  for (const pagePath of INCLUDE_PAGES) {
    const fullPath = path.join(process.cwd(), pagePath);
    if (fs.existsSync(fullPath)) {
      const content = extractTextContent(fullPath);
      allContent.push(...content);
      console.log(`   ✓ ${pagePath} (${content.length} items)`);
    } else {
      console.log(`   ✗ ${pagePath} (not found)`);
    }
  }
  
  // Process components
  console.log('🧩 Processing components...');
  for (const componentPath of INCLUDE_COMPONENTS) {
    const fullPath = path.join(process.cwd(), componentPath);
    if (fs.existsSync(fullPath)) {
      const content = extractTextContent(fullPath);
      allContent.push(...content);
      console.log(`   ✓ ${componentPath} (${content.length} items)`);
    } else {
      console.log(`   ✗ ${componentPath} (not found)`);
    }
  }
  
  return allContent;
}

/**
 * Main function
 */
function main() {
  console.log('🧠 Generating GLM training data for RunRise Nation...');
  
  // Process all files
  const extractedContent = processFiles();
  
  console.log(`📊 Content Analysis:`);
  console.log(`   Total content items: ${extractedContent.length}`);
  
  // Group by type for analysis
  const contentByType = {};
  extractedContent.forEach(item => {
    contentByType[item.type] = (contentByType[item.type] || 0) + 1;
  });
  
  console.log(`   Content by type:`);
  for (const [type, count] of Object.entries(contentByType)) {
    console.log(`     ${type}: ${count} items`);
  }
  
  // Generate GLM text
  const glmText = generateGLMText(extractedContent);
  
  // Ensure public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // Write GLM training data file
  fs.writeFileSync(OUTPUT_FILE, glmText, 'utf8');
  
  console.log(`✅ GLM training data generated successfully: ${OUTPUT_FILE}`);
  console.log(`📄 File size: ${(glmText.length / 1024).toFixed(2)} KB`);
  console.log(`📝 Total characters: ${glmText.length.toLocaleString()}`);
  console.log(`🎯 Content items processed: ${extractedContent.length}`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { extractTextContent, generateGLMText, processFiles };
