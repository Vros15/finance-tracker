import './App.css'
import { useState } from 'react'
import {Route, Routes} from "react-router"
import Navbar from './components/layout/NavBar/NavBar'
import AddTransactions from './pages/AddTransaction/AddTransaction'
import Dashboard from './pages/Dashboard/Dashboard'
import Transactions from './pages/Transactions/Transactions'
import sampleTransactions from './data/sampleTransactions'

function App() {
 const [transactions, setTransactions] = useState(sampleTransactions)


  return (
    <>
      <Navbar />
      <h1>Welcome to Finance Tracker</h1>
      <Routes>
        <Route path="/" element={<Dashboard transactions={transactions} />} />
        <Route path="/transactions" element={<Transactions transactions={transactions} />} />
        <Route path="/add-transactions" element={<AddTransactions />} />
      </Routes>

    </>
  )
}

export default App
