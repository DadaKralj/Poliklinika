import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50">
      <div className="text-2xl font-bold text-emerald-600">Poliklinika</div>
      <div className="space-x-6">
        <Link to="/" className="text-gray-700 hover:text-emerald-600">Početna</Link>
        <Link to="/usluge" className="text-gray-700 hover:text-emerald-600">Usluge</Link>
        <Link to="/onama" className="text-gray-700 hover:text-emerald-600">O nama</Link>
        <Link to="/kontakt" className="text-gray-700 hover:text-emerald-600">Kontakt</Link>
      </div>
    </nav>
  );
};

export default Navbar;
