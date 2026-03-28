import { useState } from "react";
import axios from "axios";
import "../App.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    const res = await axios.post(
      "http://expense-tracker-k4ya.onrender.com/api/auth/forgot-password",
      { email }
    );

    alert("Token: " + res.data.token); // simulate email
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Forgot Password</h2>

        <input
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleSubmit}>
          Send Reset Link
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;