import TransactionCard from "../TransactionCard/TransactionCard";
import "./TransactionList.css";

const TransactionList = ({ transactions, deleteTransaction, startEditing }) => {
  return (
    <section className="transaction-list">
      <h2>Current Transactions</h2>

      <div className="transaction-list-items">
        {transactions.map((transaction) => (
          <TransactionCard
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
            startEditing={startEditing}
          />
        ))}
      </div>
    </section>
  );
};

export default TransactionList;