# 📚 Novelix — A Book Library

A full-stack MERN application for browsing and purchasing books online. Built as a hands-on learning project covering the full web development lifecycle — REST APIs, authentication, state management, and a custom-designed UI.

<details>
<summary><strong>📑 Table of Contents</strong></summary>

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Author](#author)

</details>

## Features

- 📚 Browse all books with cover images fetched from the Open Library API
- 🔍 Individual book detail pages with descriptions
- 🛒 Cart with quantity tracking (increment/decrement, no duplicate entries)
- 🔐 Signup and login with hashed passwords (bcrypt) and JWT-based sessions
- 🔒 Protected checkout route — redirects to login if not authenticated
- 📦 Delivery details form leading to an order confirmation page
- 🎨 Custom UI design (colors, typography, icons) built with Tailwind CSS

## Tech Stack

<details>
<summary><strong>Frontend</strong></summary>

- React
- React Router
- Tailwind CSS
- Axios
- lucide-react (icons)

</details>

<details>
<summary><strong>Backend</strong></summary>

- Node.js
- Express
- MongoDB
- Mongoose

</details>

<details>
<summary><strong>Auth</strong></summary>

- bcrypt (password hashing)
- JSON Web Tokens (JWT)

</details>

## Project Structure

```
novelix/
├── frontend/   React app — pages, components, routing, cart context
│               (see frontend/README.md for details)
└── backend/    Express REST API — books and auth routes
```

## Getting Started

<details>
<summary><strong>▶️ Backend setup</strong></summary>

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Run:
```bash
node server.js
```

</details>

<details>
<summary><strong>▶️ Frontend setup</strong></summary>

```bash
cd frontend
npm install
npm start
```

See [frontend/README.md](./frontend/README.md) for page routes and folder structure.

</details>

Frontend runs on `http://localhost:3000`, backend on `http://localhost:5000`.

## API Endpoints

<details>
<summary><strong>📗 Books</strong></summary>

| Method | Route         | Description       |
|--------|---------------|---------------------|
| GET    | /books        | Get all books          |
| GET    | /books/:id    | Get a single book        |
| POST   | /books        | Create a book             |
| PUT    | /books/:id    | Update a book             |
| DELETE | /books/:id    | Delete a book             |

</details>

<details>
<summary><strong>🔐 Auth</strong></summary>

| Method | Route         | Description             |
|--------|---------------|----------------------------|
| POST   | /auth/signup  | Register a new user          |
| POST   | /auth/login   | Log in, returns a JWT token   |

</details>

## Author

[Adeel](https://github.com/imadeel01)