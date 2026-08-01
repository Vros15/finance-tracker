import TransactionCard from "../TransactionCard/TransactionCard";

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <>
      <h2>Current Transactions</h2>

      {transactions.map((transaction) => (
        <TransactionCard
          key={transaction.id}
          transaction={transaction}
          deleteTransaction={deleteTransaction}
        />
      ))}
    </>
  );
};

export default TransactionList;