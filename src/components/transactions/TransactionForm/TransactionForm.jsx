import { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [formData, setFormData] = useState({
    type: "income",
    amount: "",
    category: "",
    note: "",
  });

  const resetForm = () => {
    setFormData({
      type: "income",
      amount: "",
      category: "",
      note: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      type: formData.type,
      amount: Number(formData.amount),
      category: formData.category,
      note: formData.note,
    };

    addTransaction(newTransaction);
    resetForm();
  };

  return (
    <>
      <h2>Add a New Transaction</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Type:</label>

          <select
            value={formData.type}
            onChange={(e) =>
              setFormData({
                ...formData,
                type: e.target.value,
              })
            }
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div>
          <label>Amount:</label>

          <input
            type="number"
            value={formData.amount}
            onChange={(e) =>
              setFormData({
                ...formData,
                amount: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label>Category:</label>

          <input
            type="text"
            value={formData.category}
            onChange={(e) =>
              setFormData({
                ...formData,
                category: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label>Note:</label>

          <textarea
            value={formData.note}
            onChange={(e) =>
              setFormData({
                ...formData,
                note: e.target.value,
              })
            }
          />
        </div>

        <button type="submit">Add Transaction</button>
      </form>
    </>
  );
};

export default TransactionForm;