import { Link, useLocation } from "react-router-dom";
import { Home, BarChart2, LogOut } from "lucide-react";

function Sidebar({ onLogout, month, setMonth, exportCSV }) {
  const location = useLocation();

  return (
    <div className="sidebar">

      {/* Logo */}
      <h2 className="logo"> Smart Expenses Tracker 💰</h2>

      {/* Navigation */}
      <nav>
        <Link
          to="/dashboard"
          className={location.pathname === "/dashboard" ? "active" : ""}
        >
          <Home size={18} /> <span>Dashboard</span>
        </Link>

        <Link
          to="/analytics"
          className={location.pathname === "/analytics" ? "active" : ""}
        >
          <BarChart2 size={18} /> <span>Analytics</span>
        </Link>

        <div className="month-filter">
          <p>📅 Filter</p>

          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="all">All</option>
            <option value="0">Jan</option>
            <option value="1">Feb</option>
            <option value="2">Mar</option>
            <option value="3">Apr</option>
            <option value="4">May</option>
            <option value="5">Jun</option>
            <option value="6">Jul</option>
            <option value="7">Aug</option>
            <option value="8">Sep</option>
            <option value="9">Oct</option>
            <option value="10">Nov</option>
            <option value="11">Dec</option>
          </select>
        </div>
      </nav>

      <div className="sidebar-actions">
        <button className="export-btn" onClick={exportCSV}>
          📥 Export CSV
        </button>
      </div>

      {/* Logout at bottom */}
      <button className="logout" onClick={onLogout}>
        <LogOut size={16} /> Logout
      </button>

    </div>
  );
}

export default Sidebar;