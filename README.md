# Celestibia - Cloud Solutions Platform

<div align="center">

![Celestibia Banner](public/preview.png)

**Innovative Cloud Solutions for a Connected World**

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

[🌐 Live Demo](https://celestibia.lovable.app) • [📖 Documentation](#features) • [🚀 Getting Started](#getting-started)

</div>

---

## 📋 Overview

Celestibia is a modern, enterprise-grade cloud solutions platform offering comprehensive IT services including Cloud Infrastructure, DevOps, AI/ML, Security, and more. Built with cutting-edge technologies and a focus on performance, accessibility, and user experience.

## ✨ Features

- 🏠 **Beautiful Landing Page** - Engaging hero section with animated gradients
- 📊 **Services Showcase** - Detailed service pages for Cloud, DevOps, AI/ML, Security & more
- 🏢 **Industry Solutions** - Tailored solutions for Healthcare, Finance, Retail, and more
- 📝 **Blog System** - Dynamic blog with individual post pages
- 📞 **Contact Form** - Professional contact page with form validation
- 🔐 **Dual Authentication** - Separate User and Admin login systems
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 🎨 **Dark/Light Mode Ready** - Theme-aware design system

## 🛠️ Tech Stack

### Frontend Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI Component Library |
| **TypeScript** | 5.0+ | Type-Safe Development |
| **Vite** | 5.0+ | Build Tool & Dev Server |

### Styling & UI
| Technology | Purpose |
|------------|---------|
| **Tailwind CSS** | Utility-First CSS Framework |
| **shadcn/ui** | Accessible Component Library |
| **Framer Motion** | Smooth Animations & Transitions |
| **Lucide React** | Beautiful Icon Set |

### State & Data Management
| Technology | Purpose |
|------------|---------|
| **TanStack Query** | Server State Management |
| **React Hook Form** | Form Handling & Validation |
| **Zod** | Schema Validation |
| **React Router DOM** | Client-Side Routing |

### Additional Libraries
| Technology | Purpose |
|------------|---------|
| **Recharts** | Data Visualization |
| **date-fns** | Date Manipulation |
| **Sonner** | Toast Notifications |
| **Embla Carousel** | Touch-Friendly Carousels |

## 📁 Project Structure

```
src/
├── assets/              # Static assets (images, logos)
├── components/
│   ├── home/           # Homepage components
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Industries.tsx
│   │   ├── Testimonials.tsx
│   │   └── ...
│   ├── layout/         # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/             # Reusable UI components (shadcn)
├── contexts/           # React contexts
│   ├── AdminAuthContext.tsx
│   └── UserAuthContext.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
│   ├── services/       # Service detail pages
│   ├── Index.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── ...
└── index.css           # Global styles & design tokens
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd celestibia

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

### Build for Production

```bash
npm run build
# or
bun run build
```

## 🎨 Design System

The project uses a comprehensive design system with:

- **CSS Custom Properties** for theming
- **HSL Color Values** for consistent color management
- **Semantic Tokens** (primary, secondary, accent, muted, etc.)
- **Custom Gradients** and shadows
- **Typography Scale** with DM Sans & Inter fonts

## 📱 Screenshots

### Homepage
![Homepage](public/preview.png)

## 🌐 Live Demo

Visit the live application: **[celestibia.lovable.app](https://celestibia.lovable.app)**

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, services, testimonials |
| About | `/about` | Company information and team |
| Services | `/services` | Overview of all services |
| Industries | `/industries` | Industry-specific solutions |
| Blog | `/blog` | Blog posts and articles |
| Contact | `/contact` | Contact form and information |
| Case Studies | `/case-studies` | Client success stories |

## 🔒 Authentication

The platform features dual authentication:

- **User Login** (`/login`) - For regular users
- **Admin Login** (`/admin/login`) - For administrators with dashboard access

## 📦 Key Dependencies

```json
{
  "react": "^18.3.1",
  "react-router-dom": "^6.30.1",
  "framer-motion": "^12.23.26",
  "@tanstack/react-query": "^5.83.0",
  "tailwindcss": "latest",
  "lucide-react": "^0.462.0"
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is proprietary software. All rights reserved.

---

<div align="center">

**Built with ❤️ by Celestibia Team**

</div>
