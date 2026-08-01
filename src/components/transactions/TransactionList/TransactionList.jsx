import TransactionCard from "../TransactionCard/TransactionCard";

const TransactionList = ({ transactions, deleteTransaction, startEditing }) => {
  return (
    <>
      <h2>Current Transactions</h2>

      {transactions.map((transaction) => (
        <TransactionCard
          key={transaction.id}
          transaction={transaction}
          deleteTransaction={deleteTransaction}
          startEditing={startEditing}
        />
      ))}
    </>
  );
};

export default TransactionList;