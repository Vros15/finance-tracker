import TransactionCard from "../TransactionCard/TransactionCard";

const TransactionsList = ({ transactions }) => {
  

  return (
    <>
      <h1>Transactions</h1>
      {transactions.map((transaction) => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
    </>
  );
};

export default TransactionsList;