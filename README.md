# Celestibia - Cloud Solutions Platform

<div align="center">

![Celestibia Banner] ![front](https://github.com/user-attachments/assets/d20d96bd-d172-4470-a303-57126cd0f2cf)


**Innovative Cloud Solutions for a Connected World**

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)

[🌐 Live Demo](https://celestibia.lovable.app) • [📖 Documentation](#features) • [🚀 Getting Started](#getting-started)

</div>

---

## 📋 Overview

Celestibia is a modern, enterprise-grade cloud solutions platform offering comprehensive IT services including Cloud Infrastructure, DevOps, AI/ML, Security, and more. Built with cutting-edge technologies and a focus on performance, accessibility, and user experience.

## ✨ Features

- 🏠 **Beautiful Landing Page** - Engaging hero section with animated gradients
- 📊 **Services Showcase** - Detailed service pages for Cloud, DevOps, AI/ML, Security & more
- 🏢 **Industry Solutions** - Tailored solutions for Healthcare, Finance, Retail, and more
- 📝 **Blog System** - Dynamic blog with CMS, individual post pages, and SEO meta tags
- 📞 **Contact Form** - Professional contact page with database storage
- 🔐 **Secure Admin Authentication** - Role-based admin access with Supabase Auth
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 🎨 **Dark/Light Mode Ready** - Theme-aware design system
- 🗄️ **Persistent Database** - All data stored securely in cloud database

## 🛠️ Tech Stack

### Frontend Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI Component Library |
| **TypeScript** | 5.0+ | Type-Safe Development |
| **Vite** | 5.0+ | Build Tool & Dev Server |

### Backend & Database
| Technology | Purpose |
|------------|---------|
| **Supabase** | Backend-as-a-Service |
| **PostgreSQL** | Relational Database |
| **Row Level Security** | Data Protection |
| **Supabase Auth** | Secure Authentication |

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
├── integrations/       # Supabase client & types
│   └── supabase/
├── lib/                # Utility functions & storage
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

- Node.js 18+ (recommended: Node.js 20+)
- npm, yarn, or bun package manager
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd celestibia

# Install dependencies
npm install
# or with yarn
yarn install
# or with bun
bun install
```

### Environment Setup

Create a `.env` file in the root directory (or copy from `.env.example` if available):

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

> **Note:** If you're using Lovable Cloud, these environment variables are automatically configured for you.

### Running Locally

```bash
# Start the development server
npm run dev
# or
yarn dev
# or
bun dev
```

The app will be available at **http://localhost:5173** (or the next available port).

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build
npm run preview
```

The build output will be in the `dist/` folder, ready for deployment.

## 🔒 Admin Setup

1. Navigate to `/admin/signup` to create your first admin account
2. The first user to sign up will automatically be granted admin privileges
3. Login at `/admin` to access the admin dashboard
4. From the dashboard you can:
   - View and manage contact form submissions
   - Create, edit, and delete blog posts
   - Manage SEO meta tags for blog content

## 🗄️ Database Schema

### Tables

| Table | Purpose |
|-------|---------|
| `blogs` | Blog posts with SEO metadata |
| `contacts` | Contact form submissions |
| `user_roles` | Admin role assignments |

### Security

- **Row Level Security (RLS)** enabled on all tables
- **Public read access** for blogs (for website visitors)
- **Admin-only access** for contacts and blog management
- **Secure authentication** via Supabase Auth

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

### Admin Routes

| Page | Route | Description |
|------|-------|-------------|
| Admin Login | `/admin` | Admin authentication |
| Admin Signup | `/admin/signup` | Create admin account |
| Admin Dashboard | `/admin/dashboard` | Manage blogs & contacts |
| Forgot Password | `/admin/forgot-password` | Password reset |

## 📦 Key Dependencies

```json
{
  "react": "^18.3.1",
  "react-router-dom": "^6.30.1",
  "framer-motion": "^12.23.26",
  "@tanstack/react-query": "^5.83.0",
  "@supabase/supabase-js": "^2.x",
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
