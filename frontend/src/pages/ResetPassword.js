import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const API = "https://expense-tracker-k4ya.onrender.com";

  const handleReset = async () => {
    if (!password.trim()) {
      alert("Please enter new password");
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        `${API}/api/auth/reset-password/${token}`,
        { password }
      );

      alert("Password updated successfully");
      navigate("/");

    } catch (err) {
      alert(err.response?.data || "Error resetting password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2>🔐 Reset Password</h2>
        <p className="sub-text">Enter your new password</p>

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleReset} disabled={loading}>
          {loading ? "Updating..." : "Reset Password"}
        </button>

        <p className="link" onClick={() => navigate("/")}>
          ← Back to Login
        </p>

      </div>
    </div>
  );
}

export default ResetPassword;