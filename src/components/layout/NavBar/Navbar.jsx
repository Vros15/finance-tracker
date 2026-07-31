import { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  

  return (
    <>
      <nav className="navbar">
        <div className="navbar-links">

            <Link className="navbar-link" to="/">Dashboard</Link>
            <Link className="navbar-link" to="/transactions">Transactions</Link>
            <Link className="navbar-link" to="/add-transactions">Add Transactions</Link>

        </div>
      </nav>
    </>
  );
};

export default Navbar;