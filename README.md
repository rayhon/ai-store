# Vite + React + TypeScript + TailwindCSS

## Component Library
When you set up the project, you can tell cursor to install the component library of your choice so later when you ask them to create a component, they will use the component library of your choice as they can examine package.json to see which component library you have installed.

### Other Component Libraries
- [shadcn/ui](https://ui.shadcn.com/): Beautifully designed components built with Radix UI and Tailwind CSS
- [Material UI (MUI)](https://mui.com/): Enterprise-grade, full-featured component library
- [Chakra UI](https://chakra-ui.com/): Modern, accessible component library with great developer experience
- [Ant Design](https://ant.design/): Comprehensive library ideal for data-heavy enterprise applications
- [TailwindUI](https://tailwindui.com/): Collection of pre-built components and templates using Tailwind CSS
- [Radix UI](https://www.radix-ui.com/): Low-level, unstyled components focused on accessibility and customization
- [Headless UI](https://headlessui.com/): Completely unstyled components that integrate seamlessly with Tailwind
- [DaisyUI](https://daisyui.com/): Component library built on top of Tailwind for rapid prototyping



## What are those tsconfig files
- tsconfig.json → Common rules for all TypeScript code (Standard TypeScript configuration)
- tsconfig.app.json → Browser/Frontend specific rules (Vite specific)
- tsconfig.node.json → Node.js/Build tools specific rules (Vite specific)

## What is ESLint
ESLint is a static code analysis tool used to find and fix problems in JavaScript/TypeScript code. Here's a breakdown:

### Main Purposes:
- Find syntax errors
- Enforce coding style rules
- Find potential bugs
- Maintain code consistency

### Common Rules Examples:
- Unused variables
- Missing semicolons
- Inconsistent quotes
- Console logs in production
```typescript
// ESLint will warn/error for:
// Unused variables
const unused = 5;  // ❌ Error: 'unused' is declared but never used

// Missing semicolons (if rule enabled)
const name = "John"  // ❌ Error: Missing semicolon

// Inconsistent quotes
const str1 = "double quotes"
const str2 = 'single quotes'  // ❌ Error: Use consistent quotes

// Console logs in production
console.log('debug');  // ❌ Warning: Unexpected console statement
```

### Configuration (`.eslintrc.json` or `.eslintrc.js`):
```json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "no-console": "warn",
    "quotes": ["error", "single"],
    "semi": ["error", "always"]
  }
}
```

### Benefits:
- Catches errors before runtime
- Enforces team coding standards
- Improves code quality
- Can auto-fix many issues
- Integrates with IDEs/editors

### Common Usage with Other Tools:
- Prettier (formatting)
- TypeScript
- Git hooks (pre-commit)
- CI/CD pipelines

ESLint is particularly useful in team settings where maintaining consistent code style and quality across multiple developers is important.

