import { useState } from "react";

const AddTransactions = () => {
  // State for the transaction form fields
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [note, setNote] = useState("");
  const resetForm = () => {
    setType("income");
    setAmount("");
    setCategory("");
    setNote("");
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const newTransaction = {
    id: Date.now(),
    type,
    amount: Number(amount),
    category,
    note,
  };

  console.log(newTransaction);
  resetForm();
};

  return (
    <>
      <h1>Add Transactions</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Type:
          </label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

        <div>
          <label>
            Amount:
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div>
          <label>
            Category:
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div>
          <label>
            Note:
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <button type="submit">Add Transaction</button>
        </div>
      </form>
    </>
  );
};

export default AddTransactions;