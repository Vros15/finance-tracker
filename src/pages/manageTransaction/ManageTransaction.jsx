import TransactionForm from "../../components/transactions/TransactionForm/TransactionForm";
import TransactionList from "../../components/transactions/TransactionList/TransactionList";

const ManageTransaction = ({ transactions, addTransaction, deleteTransaction }) => {
  return (
    <>
      <h1>Manage Transactions</h1>

      <TransactionForm addTransaction={addTransaction} />

      <hr />

      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
    </>
  );
};

export default ManageTransaction;