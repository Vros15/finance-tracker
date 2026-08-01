import { useEffect, useState } from "react";
import "./TransactionForm.css";

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
      <h2 className="transaction-form-title">Add a New Transaction</h2>

      <form className="transaction-form" onSubmit={handleSubmit}>
        <div className="transaction-form-field">
          <label htmlFor="transaction-type">Type:</label>

          <select
            id="transaction-type"
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

        <div className="transaction-form-field">
          <label htmlFor="transaction-amount">Amount:</label>

          <input
            id="transaction-amount"
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

        <div className="transaction-form-field">
          <label htmlFor="transaction-category">Category:</label>

          <input
            id="transaction-category"
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

        <div className="transaction-form-field">
          <label htmlFor="transaction-note">Note:</label>

          <textarea
            id="transaction-note"
            value={formData.note}
            onChange={(e) =>
              setFormData({
                ...formData,
                note: e.target.value,
              })
            }
          />
        </div>

        <div className="transaction-form-actions">
          <button type="submit">
            {editingTransaction
            ? "Update Transaction"
            : "Add Transaction"}
          </button>

          {editingTransaction && (
            <button className="button-secondary" type="button" onClick={stopEditing}>
                Cancel
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default TransactionForm;