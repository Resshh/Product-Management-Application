# Product Management Application (React)

## Overview

This is a Product Management application built using **React** and **Vite**. The application displays products fetched from the Fake Store API and provides a form to add new products with client-side validation.

This project was developed as part of a React assignment to demonstrate component-based development, routing, API integration, and form handling.

---

## Features

- Home Dashboard
  - Fetches product data from the Fake Store API.
  - Displays products in a card layout.
  - Shows Product Image, Title, Price, and Rating.

- Add Product
  - Form to add a new product.
  - Client-side form validation.
  - Displays the submitted product details in the browser console.

- Navigation
  - React Router for navigation.
  - Home Page
  - Add Product Page

---

## Technologies Used

- React
- Vite
- React Router DOM
- JavaScript (ES6+)
- CSS3
- Fake Store API

---

## API Used

https://fakestoreapi.com/products

---

## Folder Structure

```
src
│
├── components
│   ├── Navbar1.jsx
│   ├── Home.jsx
│   └── AddProduct.jsx
│
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

---

## Form Validation

The application validates the following fields before submission:

- Product Name
  - Required
  - Minimum 3 characters

- Image URL
  - Required

- Price
  - Must be greater than 0

- Rating
  - Must be between 0 and 5

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project folder

```bash
cd product-management-app
```

Install dependencies

```bash
npm install
```

Run the project

```bash
npm run dev
```

---

## Screens

- Home Dashboard
- Add Product Form

---

## Future Improvements

- Backend using Node.js and Express
- MongoDB database integration
- Axios for backend communication
- CRUD Operations
- Product editing and deletion

---

