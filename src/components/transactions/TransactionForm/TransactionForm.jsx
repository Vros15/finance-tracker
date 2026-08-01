import { useEffect, useState } from "react";

const TransactionForm = ({ addTransaction, updateTransaction, editingTransaction, stopEditing }) => {
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

  useEffect(() => {
    if (editingTransaction) {
      setFormData({
        type: editingTransaction.type,
        amount: editingTransaction.amount,
        category: editingTransaction.category,
        note: editingTransaction.note,
      });
    }
  }, [editingTransaction]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      type: formData.type,
      amount: Number(formData.amount),
      category: formData.category,
      note: formData.note,
    };

    if (editingTransaction) {
      updateTransaction({ ...newTransaction, id: editingTransaction.id });
      stopEditing();
    } else {
      addTransaction(newTransaction);
    }
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

        <button type="submit">
        {editingTransaction
            ? "Update Transaction"
            : "Add Transaction"}
        </button>

        {editingTransaction && (
            <button type="button" onClick={stopEditing}>
                Cancel
            </button>
        )}
      </form>
    </>
  );
};

export default TransactionForm;