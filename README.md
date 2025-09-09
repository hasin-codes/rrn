# RunRise Nation - Next.js Web Application

A modern, production-ready running community website built with Next.js 15, featuring a sophisticated neumorphic design system, comprehensive page structure, and centralized component architecture.

## 🏃‍♂️ Overview

RunRise Nation is a passionate running community platform that showcases the power of modern web development with a focus on user experience, performance, and maintainable code architecture. The application features a unique neumorphic design system that creates depth and visual interest through carefully crafted shadows and lighting effects.

## ✨ Key Features

- **Complete Page Structure** - Home, Events, About, Blog, Profile, and comprehensive sub-pages
- **Advanced Profile System** - User dashboard, personal events, stories, and profile management
- **Neumorphic Design System** - Soft UI with depth and dimension
- **Centralized Styling** - Single source of truth for all card components
- **Production-Ready Architecture** - Clean, maintainable, and scalable code
- **Fully Responsive Design** - Mobile-first approach with desktop optimization
- **Dynamic Navigation** - Smart navbar with scroll-based interactions
- **Content Protection** - Anti-theft measures for images and text
- **Performance Optimized** - Next.js 15 with modern React patterns
- **Type Safety** - Full TypeScript implementation
- **Component Library** - Reusable UI components with Radix UI
- **🔒 Privacy-First SEO** - Advanced SEO system with profile page protection
- **🚀 Automated SEO System** - Smart sitemap, robots.txt, and content generators
- **📊 SEO Analytics** - Google Analytics 4 integration with performance monitoring
- **🔍 Structured Data** - JSON-LD schema markup for better search visibility
- **📱 Social Media SEO** - Open Graph and Twitter Card optimization
- **⚡ Core Web Vitals** - Performance monitoring and optimization
- **🏢 Local SEO** - Location-based optimization for Bangladesh/Dhaka

## 📄 Page Structure

### Main Pages
- **Home (`/`)** - Landing page with hero section and community overview
- **Events (`/events`)** - Upcoming events, registration, and event details
- **About (`/about`)** - Community story, team, mission, and values
- **Blog (`/blog`)** - Running tips, stories, and community insights
- **Profile (`/profile`)** - User dashboard with sidebar navigation and comprehensive features

### Profile Sub-pages (🔒 Privacy Protected)
- **Dashboard (`/profile`)** - Main dashboard with profile card, quick stats, and next event reminder
- **My Profile (`/profile/my-profile`)** - Comprehensive profile management with bento grid layout
- **My Events (`/profile/my-events`)** - Personal event history with table/list views and filtering
- **My Stories (`/profile/my-stories`)** - Story editor with markdown support and AI-assisted writing
- **All Events (`/profile/all-events`)** - Searchable event directory with advanced filtering and pagination

### Engage Sub-pages
- **Register (`/engage/register`)** - Member registration and onboarding
- **Collab (`/engage/collab`)** - Partnership and collaboration opportunities
- **Stories (`/engage/stories`)** - Community story submission
- **FAQ (`/engage/faq`)** - Frequently asked questions and support

### Race Sub-pages (🔒 Privacy Protected)
- **BIB (`/race/bib`)** - Race number download and management
- **Certificates (`/race/certificates`)** - Race completion certificates
- **Essentials (`/race/essentials`)** - Race day checklist and preparation

## 🎨 Design System

### Neumorphic Design Principles

Our design system is built around the concept of **neumorphism** - a design trend that creates the illusion of objects being extruded from or pressed into the background. This creates a soft, tactile interface that feels modern and engaging.

#### Visual Characteristics:
- **Soft Shadows**: Dual shadow system (light highlight + dark shadow)
- **Subtle Depth**: Cards appear to float above the background
- **Minimal Borders**: Clean white borders for definition
- **Consistent Spacing**: Harmonious padding and margins throughout

### Centralized Design System

All card components use a centralized CSS variable system for consistent styling:

```css
:root {
  --card-bg: #F0F0F3;
  --card-shadow-light: -6px -6px 20px rgba(255, 255, 255, 0.6);
  --card-shadow-dark: 10px 10px 30px rgba(174, 174, 192, 0.4);
  --card-border: 2.4px solid white;
  --card-border-radius: 0.5rem;
  --card-padding: 1rem 1.5rem;
  --card-gap: 1rem;
}
```

### Color Palette

```css
/* Layout Background */
--layout-bg: linear-gradient(135deg, #B8BCC8, #C8CCD8, #BCC0CC)

/* Card Background */
--card-bg: #F0F0F3

/* Accent Colors */
--primary-accent: #00D8D2
--secondary-accent: #00ead3
--text-primary: #000000
--text-secondary: #00827e
```

### Typography

- **Primary Font**: TexGyre Adventor (Custom)
- **Fallback**: Arial, sans-serif
- **Weight Range**: 400-700
- **Responsive Scaling**: Fluid typography with responsive classes

## 🏗️ Architecture

### Component Structure

```
app/
├── page.tsx                    # Home page
├── events/page.tsx             # Events page
├── about/page.tsx              # About page
├── blog/page.tsx               # Blog page
├── profile/
│   ├── page.tsx                # Profile dashboard
│   ├── layout.tsx              # Profile layout with sidebar
│   ├── my-profile/page.tsx     # Profile management (bento grid)
│   ├── my-events/page.tsx      # Personal events (table/list view)
│   ├── my-stories/page.tsx     # Story editor (markdown + AI)
│   ├── all-events/page.tsx     # Event directory (searchable table)
│   └── components/
│       ├── ProfileCard.tsx     # User profile card
│       ├── QuickStats.tsx      # Running statistics
│       ├── NextEventReminder.tsx # Upcoming event reminder
│       └── ProfileSidebar.tsx  # Navigation sidebar
├── engage/
│   ├── register/page.tsx       # Member registration
│   ├── collab/page.tsx         # Partnership opportunities
│   ├── stories/page.tsx        # Story submission
│   └── faq/page.tsx           # FAQ page
└── race/
    ├── bib/page.tsx            # Race BIB download
    ├── certificates/page.tsx    # Certificates download
    └── essentials/page.tsx     # Race day essentials

components/
├── HeroSection.tsx             # Landing hero with dual layout
├── AboutSection.tsx            # Community information
├── PacersSection.tsx           # Elite pacers showcase
├── StoriesSection.tsx          # Community stories carousel
├── StatsSection.tsx            # Statistics and metrics
├── EventsSection.tsx           # Events and training info
├── Navbar.tsx                  # Dynamic navigation component
├── Footer.tsx                  # Footer with organized links
├── FlowingMenu.tsx             # Animated announcement banner
├── StructuredData.tsx          # JSON-LD schema markup components
├── LocalSEO.tsx                # Local business and event schema
├── SEOImage.tsx                # Optimized image components
├── PerformanceOptimizer.tsx    # Core Web Vitals monitoring
├── SocialSEO.tsx               # Social media optimization
├── TechnicalSEO.tsx            # Technical SEO improvements
├── SEOAnalytics.tsx            # Analytics and monitoring
└── ui/                         # Reusable UI components
    ├── card.tsx
    ├── button.tsx
    ├── animated-testimonials.tsx
    ├── animated-tooltip.tsx
    └── ... (20+ components)

scripts/
├── generate-sitemap.js         # XML sitemap generator (privacy-protected)
├── generate-robots.js          # Robots.txt generator (profile blocking)
├── generate-glm-txt.js         # GLM training data generator (sensitive content excluded)
└── README.md                   # SEO generators documentation

lib/
├── seo.ts                      # SEO utilities with profile page protection
└── utils.ts                    # General utilities

types/
└── global.d.ts                 # Global type declarations
```

### Dynamic Features

#### Smart Navigation
- **Scroll-based hiding**: Navbar adapts based on scroll direction
- **Dynamic padding**: Main content padding adjusts with navbar visibility
- **Smooth transitions**: 300ms ease-in-out animations
- **Mobile optimization**: Touch-friendly interactions

#### Content Protection
- **Text selection disabled**: Prevents content theft
- **Image protection**: Disabled dragging and right-click
- **Interactive elements**: Proper user-select for forms and buttons

## 🚀 Technology Stack

### Core Framework
- **Next.js 15** - React framework with App Router
- **React 18** - Latest React with concurrent features
- **TypeScript** - Full type safety

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **Custom CSS Variables** - Centralized design tokens

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Performance & Analytics
- **Vercel Analytics** - Performance monitoring
- **Speed Insights** - Core Web Vitals tracking
- **Image Optimization** - Next.js Image component
- **Google Analytics 4** - Advanced SEO tracking and reporting
- **SEO Analytics** - Real-time SEO score monitoring
- **Performance Monitoring** - Core Web Vitals tracking and optimization

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: > 1280px

### Layout Strategies
- **Mobile-First**: Base styles for mobile, enhanced for larger screens
- **Flexible Grid**: CSS Grid with responsive columns
- **Fluid Typography**: Responsive text scaling
- **Adaptive Images**: Optimized image loading with Next.js

### Responsive Features
- **Grid Systems**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Responsive Text**: `text-sm sm:text-base lg:text-lg`
- **Responsive Spacing**: `space-y-2 sm:space-y-4 lg:space-y-6`
- **Responsive Padding**: `p-4 sm:p-6 lg:p-8`
- **Responsive Margins**: `mx-2 sm:mx-4 md:mx-6 lg:mx-0`

## 🎯 Component Features

### HeroSection
- **Dual Layout**: Mobile stack, desktop side-by-side
- **Animated Counter**: CountUp component for statistics
- **Responsive Images**: Optimized runner and sneaker images
- **Height Consistency**: Perfect card alignment across devices

### Events Page
- **Event Cards**: Detailed event information with registration
- **Responsive Grid**: Mobile single-column, desktop two-column
- **Event Categories**: Challenge, Marathon, Fun Run, Trail
- **Registration CTAs**: Direct call-to-action buttons

### Blog Page
- **Article Grid**: Mobile single-column, desktop two-column
- **Rich Content**: Author info, read time, categories
- **Hover Effects**: Interactive card animations
- **Content Preview**: Excerpts with "Read More" buttons

### About Page
- **Team Profiles**: Grid layout with responsive columns
- **Timeline**: Community milestones and achievements
- **Mission & Values**: Comprehensive community information
- **Call-to-Action**: Join community buttons

### Profile System
- **Dashboard (`/profile`)**: Main dashboard with profile card, quick stats, and next event reminder
- **My Profile (`/profile/my-profile`)**: Comprehensive profile management with bento grid layout
- **My Events (`/profile/my-events`)**: Personal event history with table/list views and filtering
- **My Stories (`/profile/my-stories`)**: Story editor with markdown support and AI-assisted writing
- **All Events (`/profile/all-events`)**: Searchable event directory with advanced filtering and pagination
- **Responsive Layout**: Mobile stack, desktop side-by-side with collapsible sidebar
- **Data Visualization**: Running stats, achievements, and progress tracking
- **Privacy Protection**: All profile pages excluded from SEO indexing

## 🔧 Development

### Available Scripts
```bash
npm run dev              # Start development server
npm run build            # Build for production (includes SEO generation)
npm run start            # Start production server
npm run lint             # Run ESLint
npm run generate:sitemap # Generate XML sitemap
npm run generate:robots  # Generate robots.txt
npm run generate:glm     # Generate GLM training data
npm run generate:all     # Generate all SEO files
npm run seo:generate     # Alias for generate:all
```

### Build Process
The build process automatically includes SEO optimization:
1. **SEO Generation** - Runs `npm run generate:all` to create sitemap, robots.txt, and GLM data
2. **Next.js Build** - Compiles the application with all optimizations
3. **Static Generation** - Pre-renders all pages for optimal performance
4. **SEO Integration** - All SEO files are included in the build output

### SEO Configuration
Update the following files with your actual information:
- **Site URL**: Update `SITE_URL` in generator scripts
- **Analytics ID**: Add your Google Analytics 4 measurement ID
- **Business Info**: Update local business schema in `components/LocalSEO.tsx`
- **Social Media**: Configure social sharing in `components/SocialSEO.tsx`

## 🎨 Customization

### Modifying Card Styles
All card components use the centralized design system. To modify card appearance:

1. **Edit CSS Variables** in `app/globals.css`:
```css
:root {
  --card-bg: #YOUR_COLOR;           /* Card background */
  --card-shadow-light: YOUR_SHADOW; /* Light shadow */
  --card-shadow-dark: YOUR_SHADOW;  /* Dark shadow */
  --card-border: YOUR_BORDER;       /* Border style */
}
```

2. **Apply Changes**: All cards will automatically update across the entire application

### Adding New Pages
1. Create page in appropriate `app/` subdirectory
2. Use consistent layout structure with FlowingMenu
3. Apply `.neumorphic-card` class for styling
4. Follow responsive design patterns
5. Update navbar links if needed

### Adding New Components
1. Create component in `components/` directory
2. Use `.neumorphic-card` class for consistent styling
3. Follow existing patterns for responsive design
4. Export component for use in pages

## 📊 Performance & SEO Results

### Optimization Strategies
- **Image Optimization**: Next.js Image component with responsive sizing
- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Unused code elimination
- **CSS Optimization**: Tailwind CSS purging
- **Bundle Analysis**: Built-in bundle analyzer

### Core Web Vitals
- **LCP**: Optimized with image preloading
- **FID**: Minimal JavaScript execution
- **CLS**: Stable layout with proper sizing

### SEO Performance
- **✅ 100% Lighthouse SEO Score** - With proper implementation
- **✅ Rich Snippets** - Structured data for enhanced search results
- **✅ Local Search Visibility** - Optimized for Bangladesh/Dhaka searches
- **✅ Social Media Optimization** - Enhanced sharing on all platforms
- **✅ Mobile-First Indexing** - Fully responsive and mobile-optimized
- **✅ Core Web Vitals** - Optimized for Google's ranking factors

### Generated SEO Files
- **🗺️ Sitemap.xml** - 9 public URLs with proper priorities and change frequencies (profile pages excluded)
- **🤖 Robots.txt** - Smart search engine directives with 14 disallowed paths (comprehensive profile protection)
- **🧠 GLM Training Data** - 950 content items for language model training (sensitive content excluded)
- **📊 Analytics Integration** - Google Analytics 4 with SEO tracking
- **🔍 Schema Markup** - Local business, events, and FAQ structured data
- **🔒 Privacy Protection** - All profile pages and sensitive content excluded from SEO indexing

## 👤 Advanced Profile System

### Comprehensive User Management
RunRise Nation features a sophisticated profile system that provides users with complete control over their running journey and personal data.

#### Profile Dashboard (`/profile`)
- **Profile Card**: User information with Strava integration (demo mode)
- **Quick Stats**: Running statistics, weekly goals, and progress tracking
- **Next Event Reminder**: Upcoming events with registration status
- **Responsive Layout**: Mobile-optimized with collapsible sidebar navigation

#### Profile Management (`/profile/my-profile`)
- **Bento Grid Layout**: Organized, scannable form sections
- **Comprehensive Forms**: Personal details, social links, professional info
- **Running Preferences**: Distance preferences, event types, community involvement
- **Photo Upload**: Profile picture management with preview
- **Compact Design**: Reduced scrolling with efficient space utilization

#### Event Management (`/profile/my-events`)
- **Dual View Modes**: Table view for detailed data, list view for quick browsing
- **Advanced Filtering**: Search by name, location, status, and distance
- **Event History**: Complete record of registered, completed, and upcoming events
- **Results Tracking**: Finish times, positions, and achievement badges
- **Certificate Downloads**: One-click access to race completion certificates

#### Story Creation (`/profile/my-stories`)
- **Markdown Editor**: Full markdown support with live preview
- **AI-Assisted Writing**: "Polish my writing" feature for content enhancement
- **Image Upload**: Featured image support with preview functionality
- **Story Gallery**: Published and draft stories with engagement metrics
- **Content Management**: Edit, delete, and share story functionality

#### Event Directory (`/profile/all-events`)
- **Searchable Table**: Advanced filtering and sorting capabilities
- **Modern UI/UX**: Responsive design with hover effects and visual feedback
- **Pagination**: Efficient handling of large event datasets
- **Event Details**: Comprehensive information including fees, discounts, and availability
- **Registration Integration**: Direct event joining with status management

### 🔒 Privacy & Security Features

#### SEO Protection
- **Complete Exclusion**: All profile pages excluded from search engine indexing
- **Robots.txt Blocking**: Multiple layers of search engine blocking
- **Metadata Protection**: `noindex, nofollow` directives for sensitive pages
- **Content Protection**: Personal data never included in AI training data

#### Data Security
- **User Data Isolation**: Personal information completely separated from public content
- **Search Engine Blocking**: Comprehensive robots.txt with profile page exclusions
- **Sitemap Exclusion**: Profile pages never listed in XML sitemap
- **AI Training Protection**: Sensitive content excluded from language model training

## 🚀 SEO & Content Generation

### Automated SEO System
RunRise Nation includes a comprehensive SEO system that automatically generates and optimizes content for search engines while maintaining strict privacy protection for user data.

#### SEO Generators
- **🗺️ Sitemap Generator** - Automatically creates XML sitemap from your app structure (privacy-protected)
- **🤖 Robots.txt Generator** - Smart search engine directives with comprehensive profile page blocking
- **🧠 GLM Text Generator** - Extracts content for language model training (sensitive content excluded)

#### SEO Components
- **📊 Structured Data** - JSON-LD schema markup for rich search results
- **📄 Dynamic Metadata** - Smart page metadata generation
- **🖼️ Image SEO** - Optimized images with proper alt text
- **⚡ Performance SEO** - Core Web Vitals monitoring and optimization
- **🏢 Local SEO** - Location-based optimization for Bangladesh/Dhaka
- **📱 Social SEO** - Open Graph and Twitter Card optimization
- **🔧 Technical SEO** - URL optimization, canonical management, and more

#### Usage
```bash
# Generate all SEO files
npm run generate:all

# Generate individual files
npm run generate:sitemap    # XML sitemap
npm run generate:robots     # robots.txt
npm run generate:glm        # GLM training data
```

#### SEO Features
- **Automatic Discovery** - Scans app directory for pages
- **Smart Prioritization** - Assigns appropriate SEO priorities
- **Content Analysis** - Analyzes site structure for optimal SEO
- **Privacy Protection** - Automatically excludes profile pages and sensitive content
- **Performance Monitoring** - Tracks Core Web Vitals
- **Analytics Integration** - Google Analytics 4 with SEO tracking
- **Real-time Monitoring** - SEO score monitoring in development
- **Profile Page Security** - Complete SEO exclusion for user data protection

### SEO Implementation
The SEO system is automatically integrated into your build process:
1. **Pre-build Generation** - SEO files are created before Next.js build
2. **Vercel Integration** - Seamless deployment with proper headers
3. **Automatic Updates** - Regenerates files when content changes
4. **Production Ready** - Optimized for search engine crawling

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Automatic Configuration**: Vercel auto-detects Next.js framework
3. **SEO Integration**: SEO files are automatically generated during build
4. **Deploy**: Push to main branch for automatic deployment

#### Vercel Configuration
The project includes optimized `vercel.json` for SEO file serving:
```json
{
  "headers": [
    {
      "source": "/sitemap.xml",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/xml"
        },
        {
          "key": "Cache-Control",
          "value": "public, max-age=86400, s-maxage=86400"
        }
      ]
    }
  ]
}
```

#### Deployment Process
1. **Pre-build**: SEO generators run automatically (`npm run generate:all`)
2. **Build**: Next.js compiles with all optimizations
3. **Deploy**: All files including SEO files are deployed
4. **Serve**: SEO files served with proper headers

### Other Platforms
- **Netlify**: Compatible with Next.js and SEO generators
- **AWS Amplify**: Full-stack deployment with SEO support
- **Docker**: Containerized deployment with SEO integration

### Current Deployment Status
✅ **Production Ready** - All deployment issues have been resolved:
- ✅ **Vercel Configuration Fixed** - Removed invalid functions config
- ✅ **SEO Generators Working** - Automatic sitemap, robots.txt, and GLM generation
- ✅ **Build Process Optimized** - All 21 pages generate successfully (including profile system)
- ✅ **TypeScript Compliant** - No compilation errors
- ✅ **Performance Optimized** - Static generation with Core Web Vitals
- ✅ **Profile System Complete** - Full user management with privacy protection
- ✅ **SEO Security Implemented** - Profile pages excluded from search engine indexing

### Troubleshooting Deployment
If you encounter deployment issues:
1. **Check Build Logs**: Ensure all dependencies are installed
2. **Verify Configuration**: Make sure `vercel.json` is properly formatted
3. **Test Locally**: Run `npm run build` to verify everything works
4. **Check SEO Files**: Verify sitemap.xml and robots.txt are generated

### Recent Updates
- **Advanced Profile System**: Complete user management with dashboard, events, stories, and profile editing
- **Privacy-First SEO**: Comprehensive protection of user data from search engine indexing
- **Modern UI/UX**: Bento grid layouts, searchable tables, and AI-assisted writing features
- **SEO Security**: Profile pages completely excluded from sitemap, robots.txt, and AI training data
- **Fixed Vercel Deployment Error**: Removed invalid `functions` configuration
- **Simplified Configuration**: Streamlined `vercel.json` to essential headers only
- **Maintained SEO Functionality**: All SEO features remain fully functional with enhanced privacy protection
- **Verified Build Process**: Local testing confirms successful deployment readiness

### Quick Deployment Checklist
Before deploying to production:
- [ ] **Test Build Locally**: `npm run build` completes successfully
- [ ] **Verify SEO Files**: Check that `public/sitemap.xml` and `public/robots.txt` exist
- [ ] **Check Profile Protection**: Verify profile pages are excluded from SEO files
- [ ] **Update Configuration**: Replace placeholder values (analytics IDs, business info)
- [ ] **Check Domain**: Update `SITE_URL` in generator scripts if needed
- [ ] **Test Profile System**: Verify all profile pages load correctly
- [ ] **Deploy**: Push to main branch for automatic Vercel deployment


## 🙏 Acknowledgments

- **Radix UI** - Accessible component primitives
- **Tailwind CSS** - Utility-first CSS framework
- **Next.js Team** - Amazing React framework
- **Framer Motion** - Smooth animations
- **Community** - For inspiration and feedback

## 📞 Contact

- **Website**: [runrisenation.com](https://runrisenation.com)
- **Email**: info.runrisenation@gmail.com
- **Phone**: +8801819903343
- **Location**: House No. 1, Road No. 6, Section - 12, Block E, Extended Rupnagar R/A, Pallabi, Mirpur, Dhaka-1216

---

**Built with ❤️ by the RunRise Nation Team**

*"Every step has meaning"* - Join our running community and discover the joy of running together.