import TransactionForm from "../../components/transactions/TransactionForm/TransactionForm";
import TransactionList from "../../components/transactions/TransactionList/TransactionList";

const ManageTransaction = ({
  transactions,
  addTransaction,
  deleteTransaction,
  editingTransaction,
  startEditing,
  stopEditing,
  updateTransaction,
}) => {
  return (
    <>
      <h1>Manage Transactions</h1>

      <TransactionForm
        addTransaction={addTransaction}
        editingTransaction={editingTransaction}
        stopEditing={stopEditing}
        updateTransaction={updateTransaction}
      />

      <hr />

      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
        startEditing={startEditing}
      />
    </>
  );
};

export default ManageTransaction;