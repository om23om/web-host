import React from 'react';

const ScienceNotes: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Class 10 Science Notes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Chapter 1: Chemical Reactions and Equations</h2>
          <p className="mb-4">Complete notes on chemical reactions, types, and balancing equations.</p>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Download PDF</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Chapter 2: Acids, Bases and Salts</h2>
          <p className="mb-4">Comprehensive coverage of acids, bases, pH scale, and salts.</p>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Download PDF</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Chapter 3: Metals and Non-metals</h2>
          <p className="mb-4">Properties, reactions, and applications of metals and non-metals.</p>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Download PDF</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Chapter 4: Carbon and its Compounds</h2>
          <p className="mb-4">Organic chemistry basics, hydrocarbons, and functional groups.</p>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Download PDF</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Chapter 5: Periodic Classification of Elements</h2>
          <p className="mb-4">Modern periodic table, trends, and element classification.</p>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Download PDF</a>
        </div>
      </div>
    </div>
  );
};

export default ScienceNotes;
