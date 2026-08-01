import TransactionCard from "../TransactionCard/TransactionCard";

const TransactionList = ({ transactions }) => {
  return (
    <>
      <h2>Current Transactions</h2>

      {transactions.map((transaction) => (
        <TransactionCard
          key={transaction.id}
          transaction={transaction}
        />
      ))}
    </>
  );
};

export default TransactionList;