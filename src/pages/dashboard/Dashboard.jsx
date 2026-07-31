const Dashboard = ({ transactions }) => {
  // Calculate total income
  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  // Calculate total expenses
  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  // Calculate remaining balance
  const balance = totalIncome - totalExpenses;

  return (
    <main>
      <h1>Dashboard</h1>

      <section>
        <h2>Total Income</h2>
        <p>${totalIncome}</p>
      </section>

      <section>
        <h2>Total Expenses</h2>
        <p>${totalExpenses}</p>
      </section>

      <section>
        <h2>Current Balance</h2>
        <p>${balance}</p>
      </section>
    </main>
  );
};

export default Dashboard;