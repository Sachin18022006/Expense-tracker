const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  title: String,
  amount: Number,
  category: String,
  date: {
    type: Date,
    default: Date.now
  },
  type: {
  type: String,
  enum: ["income", "expense"],
  default: "expense"
},
}, { timestamps: true });

module.exports = mongoose.model("Expense", expenseSchema);