import "./TransactionCard.css"

const TransactionCard = ({ transaction, deleteTransaction }) => {
  return (
    <div className="transaction-card">
      <h3>{transaction.type}</h3>

      <p>
        <strong>Amount:</strong> ${transaction.amount}
      </p>

      <p>
        <strong>Category:</strong> {transaction.category}
      </p>

      <p>
        <strong>Note:</strong> {transaction.note}
      </p>
      <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
    </div>
  );
};

export default TransactionCard;