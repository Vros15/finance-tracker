import { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  

  return (
    <>
      <nav className="navbar">
        <div className="navbar-links">

            <Link to="/">Dashboard</Link>
            <Link to="/transactions">Transactions</Link>
            <Link to="/add-transactions">Add Transactions</Link>

        </div>
      </nav>
    </>
  );
};

export default Navbar;