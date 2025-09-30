import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Go For Study</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/science-notes" className="hover:underline">Science Notes</Link>
          <Link to="/maths-notes" className="hover:underline">Maths Notes</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/meetings" className="hover:underline">Live Meetings</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
