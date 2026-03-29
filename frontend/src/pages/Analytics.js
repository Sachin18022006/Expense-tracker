import { useEffect, useState } from "react";
import axios from "axios";
import {
  PieChart, Pie, Tooltip, Cell,
  BarChart, Bar, XAxis, YAxis,
  LineChart, Line
} from "recharts";
import Sidebar from "../components/Sidebar";
import "../App.css";

const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"];

function Analytics({ month, setMonth }) {
  const [expenses, setExpenses] = useState([]);
  const [open, setOpen] = useState(true); // ✅ toggle added

  const token = localStorage.getItem("token");

  // 🔹 Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://expense-tracker-k4ya.onrender.com/api/expenses",
          {
            headers: { Authorization: token }
          }
        );
        setExpenses(res.data);
      } catch (err) {
        console.log("Error fetching expenses");
      }
    };

    fetchData();
  }, [token]);

  // 🔹 Filter
  const filteredExpenses =
    month === "all"
      ? expenses
      : expenses.filter((e) => {
          const d = new Date(e.date || Date.now());
          return d.getMonth() === Number(month);
        });

  // 🔹 Calculations
  const income = filteredExpenses
    .filter((e) => e.type === "income")
    .reduce((a, b) => a + Number(b.amount), 0);

  const expense = filteredExpenses
    .filter((e) => e.type === "expense")
    .reduce((a, b) => a + Number(b.amount), 0);

  const balance = income - expense;

  // 🔹 Category grouping
  const categoryMap = {};

  filteredExpenses.forEach((e) => {
    const cat = e.category || "Other";
    categoryMap[cat] = (categoryMap[cat] || 0) + Number(e.amount);
  });

  const data = Object.keys(categoryMap).map((key) => ({
    name: key,
    amount: categoryMap[key],
  }));

  return (
    <div className="dashboard-layout">

      {/* Sidebar */}
      {open && (
        <Sidebar
          month={month}
          setMonth={setMonth}
          onLogout={() => {
            localStorage.removeItem("token");
            window.location = "/";
          }}
        />
      )}

      {/* Main Content */}
      <div className={open ? "main-content" : "main-content full"}>

        {/* Toggle Button */}
        <button
          className="floating-toggle"
          onClick={() => setOpen(!open)}
        >
          {open ? "⬅" : "➡"}
        </button>

        <h2 className="head">📊 Analytics Overview</h2>

        {/* SUMMARY */}
        <div className="summary-cards">
          <div className="card income">💰 ₹{income}</div>
          <div className="card expense">💸 ₹{expense}</div>
          <div className="card balance">🧮 ₹{balance}</div>
        </div>

        {/* CHART GRID */}
        <div className="analytics-grid">

          {/* PIE */}
          <div className="chart-card">
            <h3>Category Split</h3>
            <PieChart width={250} height={250}>
              <Pie data={data} dataKey="amount" outerRadius={90}>
                {data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip  />
            </PieChart>
          </div>

          {/* BAR */}
          <div className="chart-card">
            <h3>Category Comparison</h3>
            <BarChart width={600} height={300} data={data}>
              <XAxis
                dataKey="name"
                interval={0}
                angle={-10}
                textAnchor="end"
              />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#6366f1" />
            </BarChart>
          </div>

        </div>

        {/* LINE */}
        <div className="chart-card full">
          <h3>📈 Expense Trend</h3>
          <LineChart width={700} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#22c55e"
              strokeWidth={3}
            />
          </LineChart>
        </div>

        {/* INSIGHTS */}
        <div className="insight-box">
          <h3>💡 Insights</h3>
          <p>
            You spent <b>₹{expense}</b> and earned <b>₹{income}</b>.
            {balance > 0
              ? ` Great job! You saved ₹${balance}`
              : ` Overspending by ₹${Math.abs(balance)}`}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Analytics;