import TransactionForm from "../../components/transactions/TransactionForm/TransactionForm";
import TransactionList from "../../components/transactions/TransactionList/TransactionList";

const ManageTransaction = ({ transactions, addTransaction }) => {
  return (
    <>
      <h1>Manage Transactions</h1>

      <TransactionForm addTransaction={addTransaction} />

      <hr />

      <TransactionList transactions={transactions} />
    </>
  );
};

export default ManageTransaction;