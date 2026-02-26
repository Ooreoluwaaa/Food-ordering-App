# Chuks Kitchen – Food Ordering & Customer Management UI

## 🔎 Project Overview

This project is a responsive frontend implementation of the **Chuks Kitchen Food Ordering & Customer Management System**.

The goal was to convert the provided Figma UI design into functional, well-structured, and responsive web pages using clean HTML and CSS.

The system allows users to:
- View onboarding/landing information
- Register (Sign Up)
- Log in (Sign In)
- Browse food details
- View delivery details

This is a frontend-only implementation.  
There is no backend, authentication system, or API integration as stated in the project brief.

---

## 🚀 Live Preview

Live URL: 

---

## 🛠 Tech Stack Used

- **HTML5**
  - Semantic structure
  - Accessible markup
- **CSS3**
  - Flexbox
  - CSS Grid
  - Media Queries
- **JavaScript (Vanilla JS)**
  - Form validation (Sign In & Sign Up)
  - Password visibility toggle
  - Mobile navigation toggle
  - Hamburger toggle

### Why These Technologies?

The project brief required:
- No backend
- No APIs
- No frameworks

Therefore, pure HTML, CSS, and minimal JavaScript were used to maintain simplicity and clarity.

---

## 📂 Project Structure

project-root/

- index.html (Onboarding / Landing Page)
- sign-in.html (Sign In Page)
- sign-up.html (Sign Up Page)
- food-details.html (Food Details Page)
- delivery-details.html (Delivery Details Page)

css/
- index.css
- sign-in.css
- sign-up.css
- food-details.css
- delivery-details.css

js/
- sign-in.js
- sign-up.js

assets/
- images and icons

Each page has its own CSS file to maintain separation of concerns and readability.

---

## 📱 Responsiveness Strategy

The layout adapts across multiple screen sizes using media queries.

Breakpoints used:

- 1024px (Tablet / Small laptop)
- 768px (Tablet / Large mobile)
- 480px (Standard mobile)
- 360px (Small mobile devices)

Techniques used:
- Flexbox for layout alignment
- CSS Grid for footer layout
- Responsive image switching
- Full-width scalable buttons
- Percentage-based widths

The layout maintains spacing, alignment, and visual hierarchy across screen sizes.

---

## 🎨 Design Interpretation

The Figma design was translated into structured HTML sections including:

- Hero section (image + content layout)
- Feature highlights
- Authentication forms
- Food details page
- Delivery details page
- Footer section

Assumptions:
- Forms simulate behavior using frontend validation only.
- Some spacing values were interpreted proportionally where exact values were not specified.
- No backend functionality was implemented as instructed.

---

## ⚙ JavaScript Functionality

JavaScript was used only where necessary:

- Password visibility toggle
- Basic client-side form validation
- Error message display
- Mobile navigation toggle (if applicable)

Not implemented (as per project brief):
- Authentication system
- Cart functionality
- Order processing
- API integration

The focus was on UI behavior and clean structure rather than application logic.

---

## 🚧 Limitations

- No backend integration
- No real authentication
- No persistent data storage
- No real cart system

---

## 🔮 Future Improvements

With more time, the following could be implemented:

- Backend integration
- Full authentication system
- Shopping cart and order tracking
- Improved accessibility support
- Reusable validation utility functions
- Performance optimization

---
