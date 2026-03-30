# Abisha's Portfolio - Horizon

A modern, animated portfolio website showcasing professional experience, achievements, skills, and projects. Built with cutting-edge web technologies and designed with a focus on user experience and performance.

## 🌟 Features

- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations** - GSAP-powered scroll animations and transitions
- **Dark/Light Mode** - Theme switching support
- **Interactive Components** - Modal views, carousels, and interactive sections
- **Certificate Viewing** - Built-in functionality to view certificates and credentials
- **Experience Details** - Detailed modal views for work experience with certificate links
- **Project Showcase** - Grid-based project display with descriptions
- **Skills Section** - Categorized skills display
- **Achievement Gallery** - Hackathons, competitions, and recognitions
- **Contact Form** - Integrated EmailJS for contact inquiries
- **Performance Optimized** - Fast load times and smooth user interactions

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional animation library with ScrollTrigger

### UI Components
- **Shadcn/ui** - High-quality React components
- **Phosphor Icons** - Beautiful icon library

### Testing & Development
- **Vitest** - Unit testing framework
- **Playwright** - E2E testing
- **ESLint** - Code linting

### External Services
- **EmailJS** - Email notification service
- **ImageKit** - Image optimization and hosting

## 📋 Portfolio Sections

### 1. Hero Section
Landing section with eye-catching introduction and call-to-action buttons.

### 2. Navigation
Sticky navbar with smooth scrolling to different portfolio sections.

### 3. About Section
Introduction to background, expertise, and professional summary.

### 4. Experience Section
- Work experience timeline
- Internship details
- Job responsibilities and achievements
- **Certificate viewing** - Click to view internship certificates

### 5. Skills Section
Organized display of technical and professional skills across different categories.

### 6. Projects Section
Showcase of built projects with descriptions, tech stack, and live/repo links.

### 7. Achievements & Certifications
- **Achievements**: Hackathon wins, competitions, and recognitions
  - View achievement details in modal
  - Team information and project descriptions
- **Certifications**: Professional certifications with details
  - Certification name, issuing organization, and date
  - **View Certificate** button to display credential images
  - Searchable and organized

### 8. Education
Academic qualifications and institution details.

### 9. Contact Section
Contact form with EmailJS integration for easy communication.

### 10. Footer
Quick links and social media connectivity.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or Bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/abisha-s-horizon.git
   cd abisha-s-horizon
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add EmailJS credentials:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```
   - See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for detailed instructions

4. **Start development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```
   The site will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
# or
bun run build
```

### Run Tests
```bash
npm run test
# or
bun run test
```

### Preview Production Build
```bash
npm run preview
# or
bun run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── AboutSection.tsx
│   ├── AchievementsSection.tsx
│   ├── ContactSection.tsx
│   ├── ExperienceSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── Preloader.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   └── ui/             # Shadcn/ui components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
├── assets/             # Static assets
├── test/               # Test files
├── App.tsx
├── main.tsx
└── index.css
```

## 🎯 Key Features in Detail

### Certificate Viewing
- **Experience Certificates**: View internship certificates directly from experience details
- **Certification Credentials**: Display professional certification images
- Click "View Certificate" button to open fullscreen image viewer

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interactions

### Performance
- Lazy loading of images
- GSAP optimized animations
- CSS-in-JS with Tailwind
- Production bundle optimization

## 📝 Content Management

Content data is organized in component files:
- **Experiences**: `src/components/ExperienceSection.tsx`
- **Achievements**: `src/components/AchievementsSection.tsx`
- **Skills**: `src/components/SkillsSection.tsx`
- **Projects**: `src/components/ProjectsSection.tsx`

Simply update the data objects to modify portfolio content.

## 🔗 Links & Resources

- **Portfolio**: [Live Site](https://your-portfolio-url.com)
- **EmailJS Setup**: [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)
- **Repository**: [GitHub](https://github.com/yourusername/abisha-s-horizon)

## 🎨 Customization

### Theme
- Edit `tailwind.config.ts` for color schemes
- Modify CSS variables in `src/index.css`

### Animations
- GSAP configurations in component files
- ScrollTrigger settings for scroll-based animations
- Adjust timing and easing functions as needed

### Components
- UI components from `src/components/ui/` can be customized
- Modify Shadcn/ui component styles in component files

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Abisha S**
- Portfolio: [https://your-portfolio-url.com](https://your-portfolio-url.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- GSAP for animation library
- Shadcn/ui for component library
- Phosphor Icons for icon set
- Tailwind CSS for styling
- Vite for build tooling
- The open-source community

---

Made with ❤️ by Abisha S
