import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { Trash2 } from "lucide-react";
import "../App.css";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [month, setMonth] = useState("all");
  const [open, setOpen] = useState(true);
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    type: "expense",
    date: "",
  });

  const token = localStorage.getItem("token");

  // 🔹 Fetch
  useEffect(() => {
    fetchExpenses();
  }, [token]);

  const fetchExpenses = async () => {
    const res = await axios.get("http://expense-tracker-k4ya.onrender.com/api/expenses", {
      headers: { Authorization: token },
    });
    setExpenses(res.data);
  };

  // 🔹 Add
  const addExpense = async () => {
    await axios.post("http://expense-tracker-k4ya.onrender.com/api/expenses", form, {
      headers: { Authorization: token },
    });
    setForm({ title: "", amount: "", category: "", type: "expense" ,date: ""});
    fetchExpenses();
  };

  // 🔹 Delete
  const deleteExpense = async (id) => {
    await axios.delete(`http://expense-tracker-k4ya.onrender.com/api/expenses/${id}`, {
      headers: { Authorization: token },
    });
    fetchExpenses();
  };

  const filteredExpenses =
  month === "all"
    ? expenses
    : expenses.filter((e) => {
        if (!e.date) return false;

        const d = new Date(e.date);

        if (isNaN(d)) return false; // 🔥 invalid date fix

        return d.getMonth() === parseInt(month);
      });
  // 🔹 Calculations
  const income = expenses
    .filter((e) => e.type === "income")
    .reduce((a, b) => a + Number(b.amount), 0);

  const expense = expenses
    .filter((e) => e.type === "expense")
    .reduce((a, b) => a + Number(b.amount), 0);

  const balance = income - expense;

  return (
    <div className="dashboard-layout">

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

      <div className={open ? "main-content" : "main-content full"}>
        <button 
            className="floating-toggle" 
            onClick={() => setOpen(!open)}
          >
            {open ? "⬅" : "➡"}
          </button>
        
        <h2>Track • Save • Grow your money 💰</h2>

        {/* SUMMARY */}
        <div className="summary-cards">
          <div className="card income">💰 ₹{income} Income</div>
          <div className="card expense">💸 ₹{expense} Expense</div>
          <div className="card balance">🧮 ₹{balance} Balance</div>
        </div>

        {/* FORM */}
        <div className="form">
          <input
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <input
            placeholder="Amount"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
          />

          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />

          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Shopping">Shopping</option>
              <option value="Bills">Bills</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Health">Health</option>
              <option value="Income">Personal Income</option>
          </select>
          <button onClick={addExpense}>Add</button>
        </div>

        {/* LIST */}
        {filteredExpenses.map((e) => (
          <div className="expense-card" key={e._id}>
            <div>
              <h4>{e.title}</h4>
              <p>{e.category}</p>
              <small className="date">
                📅 {new Date(e.date).toLocaleDateString()}
              </small>
            </div>

            <div className="right">
              ₹{e.amount}
              <button className="delete-btn" onClick={() => deleteExpense(e._id)}>
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



export default Dashboard;