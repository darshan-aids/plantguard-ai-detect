# Contributing to PlantGuard AI

Thank you for your interest in contributing to PlantGuard AI! We welcome contributions from the community.

## Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/your-username/plantguard-ai-detect.git
   cd plantguard-ai-detect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Fill in your environment variables
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## Code Standards

### TypeScript
- Use TypeScript for all new code
- Follow existing naming conventions
- Add proper type definitions
- Avoid `any` types when possible

### React
- Use functional components with hooks
- Follow React best practices
- Use proper prop types and interfaces
- Implement proper error boundaries

### Testing
- Write tests for new features
- Ensure all tests pass: `npm test`
- Aim for good test coverage
- Use descriptive test names

### Code Style
- Run `npm run lint` before committing
- Follow existing code formatting
- Use meaningful variable and function names
- Add comments for complex logic

## Git Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, tested code
   - Follow the code standards above
   - Update documentation if needed

3. **Test your changes**
   ```bash
   npm run lint
   npm test
   npm run build
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push and create a pull request**
   ```bash
   git push origin feature/your-feature-name
   ```

## Commit Message Format

We follow conventional commit format:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example: `feat: add image validation with file size limits`

## Pull Request Guidelines

- Fill out the pull request template completely
- Include screenshots for UI changes
- Reference any related issues
- Ensure all checks pass
- Keep pull requests focused and atomic
- Update documentation if needed

## Issue Reporting

When reporting issues:

- Use clear, descriptive titles
- Provide steps to reproduce
- Include expected vs actual behavior
- Add screenshots/videos if applicable
- Specify your environment (browser, OS, etc.)

## Feature Requests

For new features:

- Check if similar features exist
- Provide clear use cases
- Consider implementation complexity
- Be open to discussion and feedback

## Code Review Process

- All code changes require review
- Address reviewer feedback promptly
- Be respectful in discussions
- Learn from the review process

## Getting Help

- Check existing documentation
- Search through issues first
- Ask questions in discussions
- Be specific about your problem

## Types of Contributions

We welcome:

- **Bug fixes** - Help us squash bugs
- **Feature development** - Add new functionality
- **Documentation** - Improve our docs
- **Testing** - Add or improve tests
- **Performance** - Make the app faster
- **Accessibility** - Make the app more accessible
- **UI/UX** - Improve user experience

## Development Tips

- Use the browser dev tools for debugging
- Test on different screen sizes
- Consider mobile users
- Test with different image types and sizes
- Keep performance in mind

## Security

- Never commit sensitive data (API keys, passwords)
- Report security issues privately
- Follow security best practices
- Use environment variables for configuration

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

Thank you for contributing to PlantGuard AI! 🌱