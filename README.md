# 💰 Smart Expense Tracker

A full-stack Expense Tracker web application built using the MERN stack.  
It allows users to manage income and expenses, analyze spending patterns, and maintain financial records efficiently.

---

## 🚀 Live Demo
👉 https://expense-tracker-fawn-seven-45.vercel.app/

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- Recharts
- React Router
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt

### Deployment
- Frontend: Vercel
- Backend: Render

---

## ✨ Features

- 🔐 User Authentication (Register & Login)
- 🔑 Forgot Password & Reset Password
- 💸 Add, Delete & Manage Expenses
- 📊 Analytics Dashboard (Pie, Bar & Line Charts)
- 📅 Monthly Filtering
- 📁 Export Data as CSV
- 🎯 Clean and User-Friendly UI
- 🔒 Secure Password Hashing (Bcrypt)
- 🔑 Token-Based Authentication (JWT)

---


### 📌 API Endpoints
Auth Routes
POST /api/auth/register
POST /api/auth/login
POST /api/auth/forgot-password
POST /api/auth/reset-password/:token
Expense Routes
GET /api/expenses
POST /api/expenses
DELETE /api/expenses/:id

🧠 Key Learnings
Implemented full-stack authentication using JWT
Integrated frontend with backend APIs using Axios
Visualized data using charts (Recharts)
Handled real-world deployment issues (CORS, environment variables)
Built a responsive and user-friendly UI

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/Sachin18022006/Expense-tracker.git
cd Expense-tracker

Backend setup:
cd backend
npm install

create a .env file :
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Frontend setup:
cd frontend
npm install
npm start
