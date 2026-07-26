# 📚 Book API — CRUD Assignment

A simple Book Management REST API built with **Node.js** and **Express.js**.  
This API lets you Create, Read, Update, and Delete books using HTTP requests.

---

## 🛠️ How to Run the Project

### 1. Make sure you have Node.js installed
Download from 👉 https://nodejs.org

### 2. Clone the repository
```bash
git clone https://github.com/imadeel01/book-api.git
cd book-api
```

### 3. Install dependencies
```bash
npm install
```

### 4. Start the server
```bash
node server.js
```

### 5. Server is running at:
```
http://localhost:3000
```

> 💡 Use **Postman** to test the API — download at https://www.postman.com/downloads/

---

## 📁 Folder Structure

```
book-api/
├── server.js                  ← Entry point, starts the server
├── routes/
│   └── books.js               ← Defines all API routes
├── controllers/
│   └── bookController.js      ← Contains all the logic (CRUD)
├── package.json               ← Project info and dependencies
└── README.md                  ← You are here!
```

---

## 📋 Endpoints List

| Method   | Endpoint       | Description          | Status Code |
|----------|----------------|----------------------|-------------|
| `GET`    | `/books`       | Get all books        | 200         |
| `GET`    | `/books/:id`   | Get one book by ID   | 200 / 404   |
| `POST`   | `/books`       | Create a new book    | 201         |
| `PUT`    | `/books/:id`   | Update a book by ID  | 200 / 404   |
| `DELETE` | `/books/:id`   | Delete a book by ID  | 204 / 404   |

---

## 📦 Book Data Structure

Each book has the following fields:

```json
{
  "id": "1",
  "title": "Atomic Habits",
  "author": "James Clear",
  "genre": "Self-help",
  "publishedYear": 2018,
  "isAvailable": true
}
```

---

## 🧪 Sample Requests

### ➕ Create a Book — `POST /books`

**URL:** `http://localhost:3000/books`  
**Method:** POST  
**Body (JSON):**
```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "genre": "Self-help",
  "publishedYear": 2018
}
```
**Response (201 Created):**
```json
{
  "id": "1",
  "title": "Atomic Habits",
  "author": "James Clear",
  "genre": "Self-help",
  "publishedYear": 2018,
  "isAvailable": true
}
```

---

### 📖 Get All Books — `GET /books`

**URL:** `http://localhost:3000/books`  
**Method:** GET  
**Response (200 OK):**
```json
[
  {
    "id": "1",
    "title": "Atomic Habits",
    "author": "James Clear",
    "genre": "Self-help",
    "publishedYear": 2018,
    "isAvailable": true
  }
]
```

---

### 🔍 Get One Book — `GET /books/:id`

**URL:** `http://localhost:3000/books/1`  
**Method:** GET  
**Response (200 OK):**
```json
{
  "id": "1",
  "title": "Atomic Habits",
  "author": "James Clear",
  "genre": "Self-help",
  "publishedYear": 2018,
  "isAvailable": true
}
```
**If not found (404):**
```json
{
  "error": "Book not found"
}
```

---

### ✏️ Update a Book — `PUT /books/:id`

**URL:** `http://localhost:3000/books/1`  
**Method:** PUT  
**Body (JSON):**
```json
{
  "isAvailable": false,
  "title": "Atomic Habits (Updated)"
}
```
**Response (200 OK):**
```json
{
  "id": "1",
  "title": "Atomic Habits (Updated)",
  "author": "James Clear",
  "genre": "Self-help",
  "publishedYear": 2018,
  "isAvailable": false
}
```

---

### 🗑️ Delete a Book — `DELETE /books/:id`

**URL:** `http://localhost:3000/books/1`  
**Method:** DELETE  
**Response:** `204 No Content` (empty — means deleted successfully)  
**If not found (404):**
```json
{
  "error": "Book not found"
}
```

---

## ✅ Status Codes Used

| Code | Meaning              |
|------|----------------------|
| 200  | Success              |
| 201  | Created successfully |
| 204  | Deleted successfully |
| 400  | Bad request          |
| 404  | Not found            |

---

## 🧰 Tech Stack

- **Node.js** — JavaScript runtime
- **Express.js** — Web framework
- **Postman** — API testing tool

---

## ⚠️ Note

This project uses an **in-memory array** as the data store (no database).  
Data will reset when the server is restarted. This is intentional for this assignment.
