import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  
  return (
    <nav className="bg-card text-card-foreground shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/80">
          Amy Yan
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/about" className="hover:text-primary">About</Link>
          <Link to="/dance" className="hover:text-primary">Dance</Link>
          <Link to="/art" className="hover:text-primary">Art</Link>
          <Link to="/speeches" className="hover:text-primary">Speeches</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;