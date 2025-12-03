# LUX-PRO-IMMO Real Estate Website

A modern, responsive real estate website for LUX-PRO-IMMO built with React, Vite, and Tailwind CSS.

## Features

- 🏠 **Property Listings** - Browse latest properties with filtering options
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern Design** - Clean, professional interface matching brand guidelines
- 🔍 **Property Search** - Advanced search functionality
- 📰 **News & Blog** - Market updates and property advice
- 📞 **Contact Integration** - Easy-to-use contact forms
- ⚡ **Tailwind CSS** - Utility-first CSS framework for rapid development

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS** - CSS transformations
- **Google Fonts** - Poppins & Open Sans typography

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn installed
- Git (optional)

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Start development server:**

```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
lux-pro-immo/
├── src/
│   ├── components/
│   │   ├── Homepage.jsx        # Main homepage component
│   │   ├── Navigation.jsx      # Header navigation
│   │   ├── HeroSection.jsx     # Hero with search
│   │   ├── AboutSection.jsx    # About company section
│   │   ├── PropertiesSection.jsx # Property listings
│   │   ├── NewsSection.jsx     # News and blog
│   │   ├── CTASection.jsx      # Call-to-action
│   │   └── Footer.jsx          # Footer
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind imports
├── index.html
├── package.json
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
└── README.md
```

## Design System

### Colors (Tailwind Config)

- **Primary:** `#85053B` (Maroon) - Use `text-primary` or `bg-primary`
- **Black:** `#000000` - Use `text-black` or `bg-black`
- **White:** `#FFFFFF` - Use `text-white` or `bg-white`
- **Text Gray:** `#939393` - Use `text-text-gray`
- **Background Grays:** 
  - Gray 50: `#F9FAFB` - Use `bg-gray-50`
  - Gray 100: `#F3F4F6` - Use `bg-gray-100`
  - Gray 200: `#E5E7EB` - Use `bg-gray-200`

### Typography

- **Headings:** Poppins (400, 600, 700, 800) - Use `font-poppins`
- **Body:** Open Sans (400, 600, 700) - Use `font-opensans`

### Custom Tailwind Classes

```css
/* Fonts */
font-poppins
font-opensans

/* Colors */
text-primary
bg-primary
text-text-gray

/* Shadows */
shadow-card
shadow-property
shadow-search
shadow-hero-card

/* Backdrop Blur */
backdrop-blur-xs
```

### Responsive Breakpoints

- **Mobile First:** Default (375px+)
- **Tablet:** `md:` (768px+)
- **Desktop:** `lg:` (1024px+)
- **Large Desktop:** `xl:` (1280px+)

## Customizing Tailwind

Edit `tailwind.config.js` to customize:

```js
export default {
  theme: {
    extend: {
      colors: {
        primary: '#85053B',
        'text-gray': '#939393',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

## Deployment

The built files in `dist/` can be deployed to any static hosting service:

- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3**
- **Azure Static Web Apps**

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Development Tips

### Using Tailwind IntelliSense

Install the "Tailwind CSS IntelliSense" VSCode extension for:
- Autocomplete for Tailwind classes
- Linting and validation
- Hover previews
- Syntax highlighting

### Adding Custom Utilities

Add custom utilities in `src/index.css`:

```css
@layer utilities {
  .custom-class {
    /* your styles */
  }
}
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

Copyright © LUX-PRO-IMMO 2025. All rights reserved.

## Contact

For questions or support, contact LUX-PRO-IMMO:
- 📞 +352 24 83 69 63
- 📞 +352 661 265 022
- 📍 4, Op de Leemen, L-5846 Fentange, Luxembourg
