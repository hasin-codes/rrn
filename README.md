# RunRise Nation - Next.js Web Application

A modern, production-ready running community website built with Next.js 15, featuring a sophisticated neumorphic design system, comprehensive page structure, and centralized component architecture.

## 🏃‍♂️ Overview

RunRise Nation is a passionate running community platform that showcases the power of modern web development with a focus on user experience, performance, and maintainable code architecture. The application features a unique neumorphic design system that creates depth and visual interest through carefully crafted shadows and lighting effects.

## ✨ Key Features

- **Complete Page Structure** - Home, Events, About, Blog, Profile, and sub-pages
- **Neumorphic Design System** - Soft UI with depth and dimension
- **Centralized Styling** - Single source of truth for all card components
- **Production-Ready Architecture** - Clean, maintainable, and scalable code
- **Fully Responsive Design** - Mobile-first approach with desktop optimization
- **Dynamic Navigation** - Smart navbar with scroll-based interactions
- **Content Protection** - Anti-theft measures for images and text
- **Performance Optimized** - Next.js 15 with modern React patterns
- **Type Safety** - Full TypeScript implementation
- **Component Library** - Reusable UI components with Radix UI

## 📄 Page Structure

### Main Pages
- **Home (`/`)** - Landing page with hero section and community overview
- **Events (`/events`)** - Upcoming events, registration, and event details
- **About (`/about`)** - Community story, team, mission, and values
- **Blog (`/blog`)** - Running tips, stories, and community insights
- **Profile (`/profile`)** - User dashboard, stats, and account management

### Engage Sub-pages
- **Register (`/engage/register`)** - Member registration and onboarding
- **Collab (`/engage/collab`)** - Partnership and collaboration opportunities
- **Stories (`/engage/stories`)** - Community story submission
- **FAQ (`/engage/faq`)** - Frequently asked questions and support

### Race Sub-pages
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
├── profile/page.tsx            # Profile page
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
└── ui/                         # Reusable UI components
    ├── card.tsx
    ├── button.tsx
    ├── animated-testimonials.tsx
    ├── animated-tooltip.tsx
    └── ... (20+ components)
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

### Profile Page
- **User Dashboard**: Statistics and activity tracking
- **Responsive Layout**: Mobile stack, desktop side-by-side
- **Data Visualization**: Running stats and achievements
- **Activity Feed**: Recent activities and milestones

## 🔧 Development

### Prerequisites
- Node.js >= 18.17.0
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/runrise-nation.git

# Navigate to project directory
cd runrise-nation

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Environment Setup
1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

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

## 📊 Performance

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

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Configure build settings
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Compatible with Next.js
- **AWS Amplify**: Full-stack deployment
- **Docker**: Containerized deployment

## 🤝 Contributing

### Code Standards
- **TypeScript**: Strict type checking enabled
- **ESLint**: Follow configured linting rules
- **Component Structure**: Use established patterns
- **Documentation**: Comment complex logic

### Pull Request Process
1. Fork the repository
2. Create feature branch
3. Make changes following code standards
4. Test across all breakpoints
5. Submit pull request with description

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

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