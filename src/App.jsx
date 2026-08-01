import './App.css'
import { useState } from 'react'
import {Route, Routes} from "react-router"
import Navbar from './components/layout/NavBar/NavBar'
import ManageTransaction from './pages/manageTransaction/ManageTransaction'
import Dashboard from './pages/Dashboard/Dashboard'
import TransactionList from './components/transactions/TransactionList/TransactionList'
import sampleTransactions from './data/sampleTransactions'

function App() {
 const [transactions, setTransactions] = useState(sampleTransactions)
 
const addTransaction = (newTransaction) => {
  setTransactions((previousTransactions) => [
    ...previousTransactions,
    newTransaction,
  ]);
};


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard transactions={transactions} />} />
        <Route path="/manage-transactions" element={<ManageTransaction transactions={transactions} addTransaction={addTransaction} />} />
        <Route path="*" element={<div>Sorry, this page does not exist</div>} />
      </Routes>

    </>
  )
}

export default App
