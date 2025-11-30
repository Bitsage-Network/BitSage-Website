# 🌟 BitSage Network Website

<div align="center">

![BitSage Network](public/SVG/BitSage.svg)

**The Future of Verifiable Computing**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[🌐 Live Website](https://bitsage.network) • [📚 Documentation](https://docs.bitsage.network) • [💬 Discord](https://discord.gg/QAXDpa7F5K) • [🐦 Twitter](https://twitter.com/bitsagenetwork)

</div>

---

## 🚀 About BitSage Network

BitSage Network is building the future of **verifiable computing** - a decentralized GPU compute marketplace that combines the power of distributed computing with cryptographic verification. Our platform enables creators, developers, and enterprises to access professional-grade GPU compute while ensuring computational integrity through our hybrid verification model.

### ✨ Key Features

- 🔐 **Hybrid Verification**: Combining ZK proofs, deterministic recomputation, and TEE attestation
- 🎨 **Creator-Focused**: Optimized for rendering, AI training, and game development
- 🌐 **Decentralized**: Distributed network of GPU providers worldwide
- 🤖 **AI-Powered**: Sage AI assistants for workflow optimization
- 💎 **Token Economy**: Powered by the $SAGE token ecosystem

---

## 🛠️ Tech Stack

This website is built with modern web technologies:

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Bitsage-Network/bitsage-website.git
cd bitsage-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── blog/              # Blog articles
│   ├── careers/           # Job postings
│   ├── docs/              # Documentation
│   └── ...                # Other pages
├── components/            # Reusable React components
│   ├── ui/               # Base UI components
│   ├── sections/         # Page sections
│   └── ...               # Feature components
├── lib/                  # Utility functions and configurations
├── store/                # State management
└── types/                # TypeScript type definitions

public/
├── images/               # Static images
├── blog/                 # Blog post images
├── icons/                # Icon assets
└── ...                   # Other static assets
```

---

## 🎨 Design System

Our design system is built on:

- **Colors**: Cosmic theme with deep blues, purples, and cyan accents
- **Typography**: Modern, clean fonts optimized for readability
- **Components**: Reusable, accessible components with consistent styling
- **Animations**: Smooth, purposeful animations that enhance UX
- **Responsive**: Mobile-first design that works on all devices

---

## 📝 Content Management

### Blog Posts

Blog posts are managed as React components in `src/app/blog/`. Each post includes:

- SEO-optimized metadata
- Social media sharing integration
- AI-generated featured images
- Related articles suggestions

### Adding New Content

1. **Blog Post**: Create a new directory in `src/app/blog/[slug]/`
2. **Page**: Add new route in `src/app/`
3. **Component**: Add reusable components in `src/components/`

---

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any required environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Deployment

The website is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create** a new branch for your feature
4. **Make** your changes
5. **Test** thoroughly
6. **Submit** a pull request

### Contribution Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all checks pass before submitting PR

### Areas for Contribution

- 🐛 **Bug Fixes**: Help us squash bugs
- ✨ **Features**: Add new functionality
- 📚 **Documentation**: Improve our docs
- 🎨 **Design**: Enhance UI/UX
- 🌐 **Translations**: Help us go global
- ♿ **Accessibility**: Make the site more accessible

---

## 📊 Performance

This website is optimized for performance:

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Excellent ratings
- **Bundle Size**: Optimized with code splitting
- **Images**: Next.js Image optimization
- **Caching**: Aggressive caching strategies

---

## 🔒 Security

Security is a top priority:

- **HTTPS**: All traffic encrypted
- **CSP**: Content Security Policy implemented
- **Dependencies**: Regular security audits
- **Best Practices**: Following OWASP guidelines

---

## 📈 Analytics & Monitoring

- **Performance**: Real User Monitoring (RUM)
- **Errors**: Automatic error tracking
- **Usage**: Privacy-focused analytics
- **Uptime**: 99.9% uptime monitoring

---

## 🌍 Roadmap

### Q1 2025
- [ ] Enhanced mobile experience
- [ ] Advanced search functionality
- [ ] Multi-language support
- [ ] Improved accessibility

### Q2 2025
- [ ] Interactive demos
- [ ] Advanced animations
- [ ] Community features
- [ ] API documentation portal

### Q3 2025
- [ ] Real-time network statistics
- [ ] Provider onboarding flow
- [ ] Advanced filtering
- [ ] Performance dashboard

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Vercel** for seamless deployment
- **Open Source Community** for inspiration and tools
- **BitSage Community** for feedback and support

---

## 📞 Support

Need help? We're here for you:

- 💬 **Discord**: [Join our community](https://discord.gg/QAXDpa7F5K)
- 📧 **Email**: support@bitsage.network
- 🐦 **Twitter**: [@bitsagenetwork](https://twitter.com/bitsagenetwork)
- 📚 **Docs**: [docs.bitsage.network](https://docs.bitsage.network)

---

<div align="center">

**Built with ❤️ by the BitSage Team**

[Website](https://bitsage.network) • [Discord](https://discord.gg/QAXDpa7F5K) • [Twitter](https://twitter.com/bitsagenetwork) • [GitHub](https://github.com/Bitsage-Network)

</div>
