import "./TransactionCard.css"

const TransactionCard = ({ transaction, deleteTransaction, startEditing }) => {
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

      <div className="transaction-actions">
        <button onClick={() => startEditing(transaction)}>
          Edit
        </button>

        <button type="submit" 
        onClick={() => deleteTransaction(transaction.id)}>
          Delete
        </button>
      </div>
      
    </div>
  );
};

export default TransactionCard;