const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");
const auth = require("../middleware/authMiddleware");

// ➕ Add expense
router.post("/", auth, async (req, res) => {
  const expense = await Expense.create({
    ...req.body,
    user: req.user
  });
  res.json(expense);
});

// 📄 Get all expenses
router.get("/", auth, async (req, res) => {
  const expenses = await Expense.find({ user: req.user });
  res.json(expenses);
});

// 🗑️ Delete expense
router.delete("/:id", auth, async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});
module.exports = router;