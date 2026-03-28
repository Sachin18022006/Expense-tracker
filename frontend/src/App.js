import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";

function App() {
  const [month, setMonth] = useState("all");


  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className ={dark ? "app dark" : "app"}>
    <BrowserRouter>
    <ToastContainer/>
    
      <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/register" element={<Register />} />
  
  <Route 
    path="/dashboard" 
    element={<Dashboard month={month} setMonth={setMonth} />} 
  />

  <Route 
    path="/analytics" 
    element={<Analytics month={month} setMonth={setMonth} />} 
  />

  <Route path="/forgot" element={<ForgotPassword />} />
  <Route path="/reset/:token" element={<ResetPassword />} />
</Routes>
     
    </BrowserRouter>
     </div>
  );
}

export default App;