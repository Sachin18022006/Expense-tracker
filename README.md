# 💰 Smart Expense Tracker

A modern full-stack expense management application built using MERN stack.

Smart Expense Tracker is a full-stack web application built using the MERN stack that helps users manage their income and expenses efficiently. Users can register, log in securely, add and track expenses, visualize spending through charts, filter data by month, export data as CSV, and reset passwords when needed. The application provides a clean and modern UI along with real-world functionality like authentication, analytics, and deployment.

🚀 Live Demo: https://expense-tracker-fawn-seven-45.vercel.app/

🛠️ Tech Stack:

Frontend: React.js, Axios, Recharts, React Router, CSS  
Backend: Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt  
Deployment: Vercel (Frontend), Render (Backend)

✨ Features:
- User Authentication (Register & Login with JWT)
- Forgot Password & Reset Password functionality
- Add, delete, and manage income & expenses
- Analytics dashboard with Pie, Bar, and Line charts
- Monthly filtering of transactions
- Export expenses data as CSV
- Secure password hashing using Bcrypt
- Token-based authentication system
- Clean, responsive, and user-friendly UI

⚙️ Setup Instructions:

Clone the repository:

- git clone https://github.com/Sachin18022006/Expense-tracker.git
- cd Expense-tracker

⚙️ Backend setup:

- cd backend
- npm install

⚙️ Create a .env file in backend folder and add:

- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_secret_key

⚙️ Run backend:

- npx nodemon server.js  (for Development)
- npm start  (for Production)

⚙️ Frontend setup:

- cd frontend
- npm install
- npm start

📌 API Endpoints:

Auth Routes:

- POST /api/auth/register  
- POST /api/auth/login  
- POST /api/auth/forgot-password  
- POST /api/auth/reset-password/:token  

Expense Routes:

- GET /api/expenses  
- POST /api/expenses  
- DELETE /api/expenses/:id  

🧠 Key Learnings:
- Implemented secure authentication using JWT and Bcrypt
- Integrated frontend and backend using REST APIs
- Built interactive data visualization using Recharts
- Handled deployment issues like CORS and environment variables
- Designed a real-world responsive UI/UX

📬 Contact:

 Sachin BS  
 GitHub: https://github.com/Sachin18022006  

⭐ If you like this project, give it a star!
