import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

function ResetPassword() {
  const { token } = useParams();   // 🔑 get token from URL
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    if (!password) {
      alert("Please enter new password");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        { password }
      );

      alert("✅ Password updated successfully");

      // redirect to login
      navigate("/");

    } catch (err) {
      alert(err.response?.data || "❌ Error resetting password");
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

        <p
          className="link"
          onClick={() => navigate("/")}
        >
          ← Back to Login
        </p>

      </div>
    </div>
  );
}

export default ResetPassword;