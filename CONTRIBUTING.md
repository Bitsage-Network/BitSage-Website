# Contributing to BitSage Network Website

Thank you for your interest in contributing to the BitSage Network website! We welcome contributions from the community and are excited to work with you.

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git

### Setting Up Your Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/bitsage-website.git
   cd bitsage-website
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```

## 🔄 Development Workflow

### Creating a New Feature

1. **Create a new branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards

3. **Test your changes**:
   ```bash
   npm run build
   npm run lint
   ```

4. **Commit your changes** with a descriptive message:
   ```bash
   git commit -m "feat: add new feature description"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub

### Commit Message Convention

We use conventional commits for clear and consistent commit messages:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:
```
feat: add new blog post component
fix: resolve mobile navigation issue
docs: update README with new instructions
```

## 📝 Code Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` types when possible

### React Components

- Use functional components with hooks
- Follow the existing component structure
- Use proper prop types and default values

### Styling

- Use Tailwind CSS classes
- Follow the existing design system
- Ensure responsive design (mobile-first)

### File Organization

```
src/
├── app/                 # Next.js pages
├── components/          # Reusable components
│   ├── ui/             # Base UI components
│   └── sections/       # Page sections
├── lib/                # Utilities and configurations
└── types/              # TypeScript definitions
```

## 🎨 Design Guidelines

### Colors

- Follow the cosmic theme (blues, purples, cyans)
- Use the predefined color palette in Tailwind config
- Ensure proper contrast ratios for accessibility

### Typography

- Use the established font hierarchy
- Ensure readability across all devices
- Follow semantic HTML structure

### Components

- Create reusable, accessible components
- Use consistent naming conventions
- Include proper ARIA labels and roles

## 🧪 Testing

### Before Submitting

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Run linting**:
   ```bash
   npm run lint
   ```

3. **Test on multiple devices** and browsers

4. **Check accessibility** with screen readers and keyboard navigation

## 📋 Pull Request Guidelines

### Before Creating a PR

- [ ] Code follows the established patterns
- [ ] All tests pass
- [ ] No linting errors
- [ ] Changes are documented
- [ ] Responsive design is maintained
- [ ] Accessibility standards are met

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Other (please describe)

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested with screen reader
- [ ] Cross-browser testing completed

## Screenshots
(If applicable, add screenshots of your changes)

## Additional Notes
Any additional context or notes for reviewers
```

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Description** of the issue
2. **Steps to reproduce** the problem
3. **Expected behavior**
4. **Actual behavior**
5. **Browser and device** information
6. **Screenshots** if applicable

## 💡 Feature Requests

For feature requests, please provide:

1. **Clear description** of the feature
2. **Use case** and motivation
3. **Proposed implementation** (if you have ideas)
4. **Alternative solutions** considered

## 🏷️ Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements to docs
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `priority: high` - High priority issues

## 🤝 Community Guidelines

### Be Respectful

- Use welcoming and inclusive language
- Respect differing viewpoints and experiences
- Accept constructive criticism gracefully
- Focus on what's best for the community

### Be Collaborative

- Help others learn and grow
- Share knowledge and resources
- Provide constructive feedback
- Celebrate others' contributions

## 📞 Getting Help

If you need help or have questions:

- 💬 **Discord**: [Join our community](https://discord.gg/QAXDpa7F5K)
- 📧 **Email**: developers@bitsage.network
- 🐛 **Issues**: Create a GitHub issue

## 🎉 Recognition

Contributors will be recognized in:

- GitHub contributors list
- Release notes for significant contributions
- Community Discord channels
- Annual contributor highlights

Thank you for contributing to BitSage Network! 🚀
