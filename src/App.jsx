import './App.css'
import {Route, Routes} from "react-router"
import Navbar from './components/layout/NavBar/NavBar'
import AddTransactions from './pages/AddTransaction/AddTransaction'
import Dashboard from './pages/Dashboard/Dashboard'
import Transactions from './pages/Transactions/Transactions'

function App() {
 

  return (
    <>
      <Navbar />
      <h1>Welcome to Finance Tracker</h1>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/add-transactions" element={<AddTransactions />} />
      </Routes>

    </>
  )
}

export default App
