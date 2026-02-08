# Naksh Jewels Mini Commerce

A full-stack mini e-commerce application built using **React (TypeScript)** and **Node.js (Express)** with Docker containerization.

This project demonstrates product listing, cart management, clean API architecture, and containerized deployment using Docker and Docker Compose.

---

## 🚀 Features

### Frontend (React + TypeScript)

- Product listing page
- Add to cart functionality
- Cart management (update quantity & remove items)
- Global toast notification system
- Skeleton loading UI
- Responsive layout
- Context API state management
- Axios API integration

### Backend (Node.js + Express)

- RESTful API structure
- Products API
- Cart API
- Request validation middleware
- Global error handling
- Structured controller architecture
- Standardized API response utilities

### DevOps

- Dockerized frontend and backend
- Multi-container setup using Docker Compose
- Production-ready frontend build served via Nginx

---

## 🛠 Tech Stack

**Frontend**

- React
- TypeScript
- Vite
- Context API
- Axios

**Backend**

- Node.js
- Express

**DevOps**

- Docker
- Docker Compose
- Nginx

---

## 📂 Project Structure

```
naksh-jewels-mini-commerce/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── cart.controller.js
│   │   │   └── product.controller.js
│   │   ├── data/
│   │   │   └── products.js
│   │   ├── middleware/
│   │   │   ├── error.middleware.js
│   │   │   └── validation.middleware.js
│   │   ├── routes/
│   │   │   ├── cart.routes.js
│   │   │   └── product.routes.js
│   │   ├── utils/
│   │   │   ├── api-error.js
│   │   │   ├── api-response.js
│   │   │   └── asyncHandler.js
│   │   ├── app.js
│   │   └── index.js
│   ├── .env
│   ├── Dockerfile
│   ├── package-lock.json
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   │   └── react.svg
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── SkeletonCard.tsx
│   │   │   └── Toast.tsx
│   │   ├── context/
│   │   │   ├── CartContext.tsx
│   │   │   └── ToastContext.tsx
│   │   ├── hooks/
│   │   │   ├── useCart.ts
│   │   │   └── useToast.ts
│   │   ├── pages/
│   │   │   ├── Cart.tsx
│   │   │   └── Products.tsx
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── styles/
│   │   │   ├── cart.css
│   │   │   ├── navbar.css
│   │   │   └── products.css
│   │   ├── types/
│   │   │   ├── api.ts
│   │   │   ├── cart.ts
│   │   │   └── product.ts
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   ├── .env
│   ├── .gitignore
│   ├── Dockerfile
│   ├── README.md
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
├── .gitignore
├── README.md
├── docker-compose.yml

```

---

## ⚙️ Environment Variables

### Frontend (.env)

```
VITE_BASE_URL=http://localhost:8000/api/v1
```

### Backend (.env)

```
PORT=8000
```

---

## ▶️ Running Locally (Without Docker)

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🐳 Running with Docker (Recommended)

Start full application:

```bash
docker compose up --build
```

Access:

**Frontend:** http://localhost:3000

**Backend API:** http://localhost:8000/api/v1

---

## 🧠 Architecture Highlights

- Separation of concerns (controllers, routes, middleware)
- Global error handling and API response structure
- Context-based global state management
- Global toast system
- Dockerized multi-service architecture

---

## 📌 Future Improvements

- Database integration (MongoDB/PostgreSQL)
- Authentication system
- Persistent cart storage
- Deployment pipeline (CI/CD)

---

## 👨‍💻 Author

**Ayush Karma**
