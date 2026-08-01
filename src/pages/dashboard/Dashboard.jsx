import "./Dashboard.css";

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
    <main className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Overview of your finances at a glance.</p>
      </header>

      <section className="dashboard-grid" aria-label="Financial summary cards">
        <article className="dashboard-card">
          <h2>Total Income</h2>
          <p className="dashboard-amount dashboard-amount-income">${totalIncome}</p>
        </article>

        <article className="dashboard-card">
          <h2>Total Expenses</h2>
          <p className="dashboard-amount dashboard-amount-expense">${totalExpenses}</p>
        </article>

        <article className="dashboard-card dashboard-card-balance">
          <h2>Current Balance</h2>
          <p className="dashboard-amount">${balance}</p>
        </article>
      </section>
    </main>
  );
};

export default Dashboard;