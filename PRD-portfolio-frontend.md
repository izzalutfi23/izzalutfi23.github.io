# PRD - Portfolio Frontend React

## 1. Project Overview

**Project Name:** portfolio-frontend
**Type:** Single Page Application (SPA) dengan Static Site Generation (SSG)
**Tech Stack:** React 18 + Vite + jQuery + Existing CSS
**Core Functionality:** Frontend portfolio personal dengan tampilan **SAMA PERSIS** dari versi Blade yang ada, menggunakan data statis dari JSON files
**Target Users:** Pengunjung portfolio (recruiter, client, fellow developers)

---

## 2. Design Reference

**⚠️ DESIGN TIDAK BERUBAH SAMA SEKALI - IKUTIN TEMPLATE YANG ADA PERSIS**

**Source Files (yang akan di-convert):**
- Template: **Dizme** dari ThemeForest (Marketify)
- CSS Files: `public/frontend/css/` (style.css, dark.css, plugins.css, dll)
- JS Files: `public/frontend/js/` (jquery.js, plugins.js, init.js, dll)
- Images: `public/frontend/img/`

**Conversion Mapping:**
| Blade File | React Component |
|------------|-----------------|
| `layout.blade.php` | `MainLayout.jsx` |
| `index.blade.php` | `HomePage.jsx` |
| `portfolio.blade.php` | `PortfolioPage.jsx` |
| `blog.blade.php` | `BlogPage.jsx` |

**Assets yang perlu di-copy:**
```
public/frontend/
├── css/
│   ├── plugins.css
│   ├── dark.css
│   └── style.css
├── js/
│   ├── jquery.js
│   ├── plugins.js
│   └── init.js
├── img/
│   ├── logo/
│   ├── brushes/
│   └── ...
└── fonts/
```

---

## 3. Data Structure

### 3.1 JSON Files Location
```
src/data/
├── portfolio.json      # Data proyek portfolio
├── blog.json          # Data artikel/berita
├── skills.json        # Data skill & keahlian
├── profile.json       # Data profil diri
└── contact.json       # Info kontak
```

### 3.2 Data Schemas

> ⚠️ **Data portfolio.json & blog.json di-export langsung dari database Laravel via Artisan commands**

**portfolio.json** (images diambil dari `public/portfolio-backup/`)
```json
[
  {
    "id": "uuid",
    "title": "Asta Computer Vision",
    "slug": "asta-computer-vision",
    "category": "Web Application",
    "description": "<p>HTML content...</p>",
    "image": "/portfolio-backup/Asta Computer Vision/home.webp",
    "images": [
      "/portfolio-backup/Asta Computer Vision/details/1-dashbiard.webp",
      "/portfolio-backup/Asta Computer Vision/details/2-master-camera.webp"
    ],
    "date": "2024-01-15",
    "created_at": "2024-01-15T00:00:00+00:00"
  }
]
```

**Image Path Structure:**
```
public/portfolio-backup/
├── {Nama Project}/
│   ├── home.webp              ← Main image
│   ├── img-title.webp         ← atau variations ini
│   ├── image-title.webp
│   └── details/
│       ├── 1.webp
│       ├── 2.webp
│       └── ...
```

**blog.json** (exported dari `blogs` table)
```json
[
  {
    "id": "uuid",
    "title": "Article Title",
    "slug": "article-title",
    "category": "Tutorial",
    "description": "<p>HTML content...</p>",
    "image": "/storage/files/.../image.webp",
    "date": "2023-08-22",
    "created_at": "2023-08-22T15:00:17+00:00"
  }
]
```

**skills.json**
```json
{
  "categories": [
    {
      "name": "Frontend",
      "skills": [
        { "name": "React", "level": 90 }
      ]
    }
  ]
}
```

**profile.json**
```json
{
  "name": "Muhammad Izza Lutfi",
  "title": "Full Stack Developer",
  "bio": "Bio text here...",
  "avatar": "/frontend/img/profile.jpg",
  "social": {
    "github": "https://github.com/username",
    "linkedin": "https://linkedin.com/in/username",
    "email": "izzalutfi045@gmail.com"
  }
}
```

**contact.json**
```json
{
  "email": "izzalutfi045@gmail.com",
  "phone": "+6285210539260",
  "address": "Semarang, Central Java, Indonesia",
  "social": {
    "github": "https://github.com/username",
    "linkedin": "https://linkedin.com/in/username",
    "instagram": "https://instagram.com/username"
  }
}
```

---

### 3.3 Data Export Commands (Laravel)

Data portfolio & blog di-export langsung dari database menggunakan Artisan commands:

```bash
# Export portfolio saja
php artisan export:portfolio

# Export blog saja
php artisan export:blog

# Export semua sekaligus
php artisan export:all

# Custom output path
php artisan export:portfolio --output=public/data/portfolio.json
```

**Output location:** `public/portfolio.json` & `public/blog.json`
**Format:** Array JSON langsung `[{...}, {...}]`
**Urutan:** Diurutkan berdasarkan `date DESC`

**Files:**
- `app/Console/Commands/ExportPortfolioJson.php`
- `app/Console/Commands/ExportBlogJson.php`
- `app/Console/Commands/ExportAllJson.php`

**Image Matching Logic:**
- Portfolio images diambil dari folder `public/portfolio-backup/{nama_project}/`
- Nama folder MATCH 100% dengan field `name` di database
- Main image priority: `home.webp` → `img-title.webp` → `image-title.webp` → `tumbnail.webp` → `cover.webp`
- Detail images diambil dari folder `details/` di dalam folder project

### 4.1 Pages & Routing

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page dengan intro, featured portfolio, latest blog |
| `/portfolio` | Portfolio | Semua project dengan filter kategori |
| `/portfolio/:slug` | PortfolioDetail | Detail satu project |
| `/blog` | Blog | Semua artikel dengan pagination |
| `/blog/:slug` | BlogDetail | Detail satu artikel |
| `/about` | About | About me, skills visualization |
| `/contact` | Contact | Form kontak & info kontak |

### 4.2 Core Features

1. **Home Page**
   - Hero section dengan intro & CTA
   - Featured portfolio (3-6 items)
   - Latest blog posts (3 items)
   - Skills overview
   - Service section
   - Contact section

2. **Portfolio Page**
   - Grid/List view toggle
   - Filter by category
   - Search functionality
   - Detail page dengan image gallery

3. **Blog Page**
   - Carousel/list view dengan excerpt
   - Category filter
   - Pagination
   - Detail page

4. **About Page**
   - Profile photo & bio
   - Skills breakdown (visual bars/charts)
   - Experience/Timeline
   - Social links

5. **Contact Page**
   - Contact form (Name, Email, Phone, Subject, Message)
   - Contact info (email, phone, address)
   - Social media links
   - Google Maps embed

### 4.3 Global Features

- **Navigation**: Sticky header dengan mobile hamburger menu
- **Footer**: Copyright, links
- **Preloader**: Loading animation
- **Progress Bar**: Scroll to top
- **Mouse Cursor**: Custom cursor effect
- **Magic Cursor**: Cursor effect on interactive elements
- **Responsive**: Mobile-friendly
- **SEO**: Meta tags, Open Graph, sitemap
- **Dark Mode**: Dark theme (sesuai template)

---

## 5. Technical Requirements

### 5.1 Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.x",
  "jquery": "^3.7.x"
}
```

### 5.2 Dev Dependencies
```json
{
  "vite": "^5.x",
  "@vitejs/plugin-react": "^4.x"
}
```

### 5.3 Project Structure
```
portfolio-frontend/
├── public/
│   └── frontend/           # Copy dari project Laravel
│       ├── css/
│       ├── js/
│       ├── img/
│       └── fonts/
├── src/
│   ├── assets/             # Local assets
│   ├── components/         # React components
│   │   ├── layout/        # Header, Footer, MainLayout
│   │   └── sections/      # Home, Portfolio, Blog, dll
│   ├── data/              # JSON data files
│   ├── pages/             # Page components
│   ├── App.jsx            # Main app
│   ├── main.jsx           # Entry point
│   └── index.css         # Import CSS files
├── index.html
├── vite.config.js
└── package.json
```

### 5.4 CSS Integration Strategy

Karena menggunakan CSS existing, kita import CSS di `index.css`:
```css
/* Import dari public/frontend/css/ */
@import '../public/frontend/css/plugins.css';
@import '../public/frontend/css/dark.css';
@import '../public/frontend/css/style.css';

/* Custom React overrides jika diperlukan */
```

---

## 6. Component Architecture

### 6.1 Layout Components
```
src/components/layout/
├── MainLayout.jsx      # Wrapper dengan preloader, cursor, progress bar
├── Header.jsx          # Navigation bar
├── MobileMenu.jsx      # Hamburger menu
└── Footer.jsx          # Copyright section
```

### 6.2 Page Sections
```
src/components/sections/
├── Hero.jsx            # Hero section (#home)
├── About.jsx           # About section (#about)
├── Portfolio.jsx       # Portfolio section (#portfolio)
├── Service.jsx         # Service section (#service)
├── Blog.jsx            # Blog section (#blog)
├── Contact.jsx         # Contact section (#contact)
├── Map.jsx             # Google Maps
└── Copyright.jsx       # Copyright
```

### 6.3 UI Components
```
src/components/ui/
├── Button.jsx
├── Card.jsx
├── Badge.jsx
├── Input.jsx
├── Textarea.jsx
└── Image.jsx
```

### 6.4 Data Components
```
src/components/
├── PortfolioGrid.jsx
├── PortfolioCard.jsx
├── PortfolioDetail.jsx
├── BlogList.jsx
├── BlogCard.jsx
├── BlogDetail.jsx
├── SkillsSection.jsx
├── ContactForm.jsx
└── SocialLinks.jsx
```

---

## 7. Milestones

### Phase 1: Setup & Base
- [ ] Initialize Vite + React project
- [ ] Copy `public/frontend/` folder
- [ ] Setup CSS imports
- [ ] Setup React Router
- [ ] Create MainLayout component (dengan preloader, cursor, progress bar)
- [ ] Create Header & MobileMenu components

### Phase 2: Data Setup
- [x] Export portfolio.json dari database (via `php artisan export:portfolio`)
- [x] Export blog.json dari database (via `php artisan export:blog`)
- [ ] Create profile.json, contact.json, skills.json (static data)
- [ ] Copy images ke project React
- [ ] Create data loader utility

### Phase 3: Page Components
- [ ] Create HomePage dengan semua sections
- [ ] Create PortfolioPage dengan filtering
- [ ] Create BlogPage dengan carousel
- [ ] Create AboutPage
- [ ] Create ContactPage dengan form

### Phase 4: jQuery Integration
- [ ] Initialize jQuery plugins (di useEffect)
- [ ] Initialize custom JS (init.js equivalent)
- [ ] Handle carousel, wow animations, dll
- [ ] Handle contact form submission

### Phase 5: Polish & Deploy
- [ ] Test semua sections
- [ ] Test responsive design
- [ ] Test dark mode
- [ ] Build & deploy

---

## 8. Notes & Constraints

### ⚠️ Important Rules:
1. **DESAIN 100% SAMA** - Jangan ubah visual sama sekali
2. **CSS TIDAK BERUBAH** - Pakai CSS files yang ada
3. **JS FUNCTIONS SAMA** - jQuery plugins, animations, dll harus work sama
4. **DATA DARI JSON** - Tidak ada database, semua dari JSON files
5. **DARK MODE** - Template sudah dark by default

### Konversi Blade → React:
- `{{ url('/') }}` → `/` (route)
- `{{ asset('path') }}` → `/frontend/path`
- `{{ route('name') }}` → `/` atau `/portfolio` dll
- `{{ date('Y') }}` → `new Date().getFullYear()`
- `{{ Request::segment(1) }}` → `useLocation()` dari react-router-dom
- `@if()` → `{condition && }` atau ternary
- `@foreach()` → `.map()`
- `@yield('container')` → children atau Outlet
- jQuery selectors → refs + useEffect

### Form Contact:
- Form submission bisa connect ke Laravel API endpoint yang ada
- Atau pakai service seperti Formspree/EmailJS

---

## 9. Referensi File Laravel (Source)

### Data Files (Exported):
```
public/
├── portfolio.json          # Export dari portfolios table
├── blog.json              # Export dari blogs table
└── portfolio-backup/       # Source images (folder = nama project)
    ├── Asta Computer Vision/
    │   ├── home.webp
    │   └── details/
    ├── Aplikasi Meta GPS/
    │   ├── img-title.webp
    │   └── details/
    └── ...
```

### Blade Templates:
```
resources/views/home/
├── layout.blade.php      # Main layout (header, footer, contact section)
├── index.blade.php       # Home page sections
├── portfolio.blade.php   # Portfolio page
└── blog.blade.php        # Blog page
```

### Assets:
```
public/frontend/
├── css/style.css         # Main styles
├── css/dark.css          # Dark mode styles
├── css/plugins.css       # Plugin styles
├── js/jquery.js          # jQuery
├── js/plugins.js         # jQuery plugins
├── js/init.js            # Custom initialization
└── img/                  # All images
```

### Export Commands:
```
app/Console/Commands/
├── ExportPortfolioJson.php
├── ExportBlogJson.php
└── ExportAllJson.php
```
