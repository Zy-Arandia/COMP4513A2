# COMP4513 – Assignment 2
## E-Commerce Clothing Store (React + Vite)
https://comp4513a2.onrender.com/#/ 

This project is a front-end e-commerce application built using React, Vite, and TailwindCSS. It includes a complete product catalog, filtering and sorting features, a shopping cart system, and an admin analytics dashboard.

---

## Features

### Shopping Experience
- Browse a clothing catalog sourced from a JSON dataset.
- Product detail pages include size selection, colour display, quantity adjustment, and add-to-cart functionality.
- Admin-only product analytics panel available inside product pages.

### Filtering and Sorting
Filtering options:
- Gender
- Category
- Colour
- Size

Sorting options:
- Price (low to high)
- Price (high to low)
- Newest

### Shopping Cart System
- Add products with selected size and quantity.
- Update quantity or remove items.
- Subtotal, tax, shipping, and total cost are automatically calculated.
- Shipping destination options include Canada, United States, and International.
- Free shipping for orders over $500.

### Admin Dashboard
Located at `/admin`. Displays:
- Top 10 products by sales
- Top 10 products by profit
- Sales and profit by category
- Pie charts for:
  - Sales by gender
  - Sales by category

### Pages Included
- Home
- Product Details
- Shopping Page
- Shopping Cart
- Login (mock)
- Admin Dashboard
- About
- Footer with repository link

---

## Technology Stack

- React
- Vite
- TailwindCSS
- React Router (HashRouter for deployment)
- Chart.js and react-chartjs-2
- Headless UI
- Swiper.js

---

## Architecture Overview

### Custom Hooks
**useProducts**  
Loads product data, builds dynamic filter options, and computes analytics such as top sales, top profit, category totals, and gender totals.

**useFilters**  
Manages active filters and sorting, and produces the filtered product list.

**useCart**  
Handles cart operations including adding items, removing items, and updating quantities.

### Main Pages
- HomePage
- ShoppingPage
- ProductPage
- ShoppingCartPage
- AdminPage
- LoginPage
- AboutPage

### Components
- Header and footer
- Product cards
- Quantity selector
- Drop-down components

