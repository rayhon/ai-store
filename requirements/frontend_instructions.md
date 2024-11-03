# Project Overview
This is a modern e-commerce application built with React, TypeScript, and Vite. The project uses shadcn/ui components and TailwindCSS for styling. Key features include:

- Product browsing by categories
- Product search functionality
- Shopping cart management
- Product sorting (price, rating)
- Responsive design
- Dark mode support

# Feature Requirements

## Homepage
- Display product categories with icons
- Show product count per category
- Clickable category cards for navigation

## Category Page
- Display products in a grid layout
- Product cards with image, title, price, and add to cart button
- Pagination (12 items per page)
- Search functionality
- Sort products by:
  - Price (low to high)
  - Price (high to low)
  - Rating

## Product Details
- Modal view with detailed product information
- Quantity selector
- Add to cart functionality
- Product images
- Rating display
- Product specifications

## Shopping Cart
- Popup cart view
- Add/remove items
- Quantity management
- Total price calculation
- Empty cart state handling

# Relevant Documentation

## Component Library
The project uses shadcn/ui components, which are built on top of Radix UI. Key components:
- Card
- Dialog
- Sheet
- Button
- Input
- Select
- Pagination
- Badge


# Current File Structure
```
root/
├── src/
│ ├── components/
│ │ ├── Layout.tsx # Main layout component
│ │ ├── ProductDetail.tsx # Product modal component
│ │ └── ui/ # shadcn/ui components
│ ├── pages/
│ │ ├── HomePage.tsx # Home page component
│ │ └── CategoryPage.tsx # Category page component
│ ├── data/
│ │ ├── categories.ts # Category data
│ │ └── products.ts # Product data
│ ├── lib/
│ │ └── utils.ts # Utility functions
│ ├── types.ts # TypeScript interfaces
│ ├── App.tsx # Main application component
│ ├── main.tsx # Application entry point
│ └── index.css # Global styles
├── public/ # Static assets
│ └── favicon.ico
├── .eslintrc.json # ESLint configuration
├── .gitignore # Git ignore rules
├── .prettierrc # Prettier configuration
├── components.json # shadcn/ui components config
├── index.html # HTML entry point
├── package.json # Project dependencies and scripts
├── postcss.config.js # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
├── tsconfig.node.json # TypeScript Node configuration
└── vite.config.ts # Vite configuration
```