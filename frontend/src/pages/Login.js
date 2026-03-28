import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
  try {
    setLoading(true);

    const res = await axios.post("https://expense-tracker-k4ya.onrender.com/api/auth/login", {
      email,
      password
    });

    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");

  } catch (err) {
    toast.error("Invalid credentials ");
  } finally {
    setLoading(false);
  }
};

  return (
  <div className="login-container">

    {/* Background blobs */}
    <div className="blob blob1"></div>
    <div className="blob blob2"></div>

    {/* LEFT */}
    <div className="login-left">
      <h1 className="brand-highlight">
        Smart Expenses Tracker  
        <img 
          src="https://cdn-icons-png.flaticon.com/512/2331/2331941.png" 
          alt="money"
          className="money-img"
        />
      </h1>
      <p>Track • Save • Grow your money 💰</p>
    </div>

    {/* RIGHT CARD */}
    <div className="login-card">

      <h2>Welcome Back 👋</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="password-box">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={() => setShow(!show)}>
            {show ? "🙈" : "👁️"}
          </span>
        </div>

      <p className="forgot" onClick={() => navigate("/forgot")}>
        Forgot Password?
      </p>

      <button onClick={handleLogin}>
        {loading ? "Logging in..." : "Login"}
      </button>

      <p className="link">
        Don’t have an account?{" "}
        <span onClick={() => navigate("/register")}>Register</span>
      </p>

    </div>

  </div>
);
}

export default Login;