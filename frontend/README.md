# 📖 Novelix — Frontend

The React client for **Novelix**, a full-stack book library app. Handles browsing, cart management, authentication, and checkout — all wired to the [Novelix backend API](../backend).

<details>
<summary><strong>📑 Table of Contents</strong></summary>

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Pages](#pages)
- [Environment Notes](#environment-notes)

</details>

## Features

- 📚 Book grid with real cover images (Open Library API)
- 🔍 Individual book detail pages
- 🛒 Cart with quantity tracking (Context API — no duplicate entries)
- 🔐 Signup/Login (JWT stored in `localStorage`)
- 🔒 Protected checkout route — redirects to `/login` if not authenticated
- 📦 Delivery details form → order confirmation page
- 🎨 Custom design system (Tailwind CSS, Fraunces + Inter fonts, lucide-react icons)

## Tech Stack

| Category      | Tools                          |
|---------------|----------------------------------|
| UI Library    | React                             |
| Routing       | React Router                      |
| Styling       | Tailwind CSS                      |
| HTTP Client   | Axios                             |
| Icons         | lucide-react                       |
| State         | React Context API (cart state)      |

## Folder Structure

```
frontend/
├── public/
├── src/
│   ├── components/     # Navbar, BookCard, ProtectedRoute
│   ├── context/        # CartContext (cart state + logic)
│   ├── pages/           # Home, BookDetail, Cart, Checkout, Login, Signup, OrderSuccess
│   ├── utils/            # getCover.js (Open Library cover lookup)
│   ├── App.js             # Routes
│   └── index.js
├── tailwind.config.js
└── package.json
```

## Getting Started

> Requires the [backend](../backend) running on `http://localhost:5000` for API calls to work.

```bash
cd frontend
npm install
npm start
```

Runs at **http://localhost:3000**.

## Available Scripts

| Command         | What it does                          |
|-----------------|------------------------------------------|
| `npm start`     | Runs the app in development mode          |
| `npm run build` | Builds a production-ready bundle to `/build` |
| `npm test`      | Runs the test runner (CRA default)        |

## Pages

| Route             | Page             | Notes                          |
|-------------------|------------------|----------------------------------|
| `/`                | Home             | All books grid                    |
| `/book/:id`        | Book Detail      | Title + description               |
| `/cart`            | Cart             | Add/remove, quantity display       |
| `/checkout`        | Checkout         | 🔒 Protected — requires login       |
| `/login`           | Login            |                                      |
| `/signup`          | Signup           |                                      |
| `/order-success`   | Order Success    | Shown after placing an order         |

## Environment Notes

- No `.env` file needed on the frontend — the backend URL (`http://localhost:5000`) is currently hardcoded in API calls.
- Book cover images are fetched live from Open Library at render time, so image quality/availability varies per book.

---
Part of the [Novelix](../../) project — see the [root README](../../README.md) for the full-stack overview.