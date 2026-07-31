const TransactionCard = ({ transaction }) => {
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
    </div>
  );
};

export default TransactionCard;