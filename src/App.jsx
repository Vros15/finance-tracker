import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router";

import Navbar from "./components/layout/NavBar/NavBar";
import ManageTransaction from "./pages/manageTransaction/ManageTransaction";
import Dashboard from "./pages/Dashboard/Dashboard";
import sampleTransactions from "./data/sampleTransactions";

function App() {
 const [transactions, setTransactions] = useState(sampleTransactions)
 const [editingTransaction, setEditingTransaction] = useState(null);

const addTransaction = (newTransaction) => {
  setTransactions((previousTransactions) => [
    ...previousTransactions,
    newTransaction,
  ]);
};

const deleteTransaction = (transactionId) => {
  setTransactions((previousTransactions) =>
    previousTransactions.filter((transaction) => transaction.id !== transactionId)
  );
};

const startEditing=(transaction) => {
  setEditingTransaction(transaction);
};

const stopEditing = () => {
  setEditingTransaction(null);
};

const updateTransaction = (updatedTransaction) => {
  setTransactions((previousTransactions) =>
    previousTransactions.map((transaction) =>
      transaction.id === updatedTransaction.id
        ? updatedTransaction
        : transaction
    )
  );
};

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard transactions={transactions} />} />
        <Route path="/manage-transactions" element={<ManageTransaction 
        transactions={transactions} 
        addTransaction={addTransaction} 
        deleteTransaction={deleteTransaction} 
        editingTransaction={editingTransaction} 
        startEditing={startEditing} 
        stopEditing={stopEditing}
        updateTransaction={updateTransaction} />} />
        <Route path="*" element={<div>Sorry, this page does not exist</div>} />
      </Routes>

    </>
  )
}

export default App
