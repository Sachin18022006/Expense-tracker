import { useState } from "react";
import axios from "axios";
import "../App.css";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleRegister = async () => {
    try {
      await axios.post(
        "http://expense-tracker-k4ya.onrender.com/api/auth/register",
        data
      );
      alert("Registered successfully");
      window.location = "/";
    } catch (err) {
      alert(err.response?.data || "Error");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>

        <input
          placeholder="Name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button onClick={handleRegister}>Register</button>

        <p>
          Already have an account?{" "}
          <span onClick={() => (window.location = "/")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;