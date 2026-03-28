import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  const [month, setMonth] = useState("all");

  return (
    <BrowserRouter>
      <ToastContainer />

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
  );
}

export default App;