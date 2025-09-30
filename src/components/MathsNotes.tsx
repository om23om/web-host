import React from 'react';

const MathsNotes: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Class 10 Maths Formulas & Shortcuts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Algebra</h2>
          <ul className="list-disc list-inside mb-4">
            <li>(a+b)² = a² + 2ab + b²</li>
            <li>(a-b)² = a² - 2ab + b²</li>
            <li>(a+b)(a-b) = a² - b²</li>
            <li>Quadratic formula: x = [-b ± √(b²-4ac)]/2a</li>
          </ul>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Download PDF</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Geometry</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Area of circle: πr²</li>
            <li>Circumference: 2πr</li>
            <li>Pythagoras theorem: a² + b² = c²</li>
            <li>Area of triangle: (1/2)×base×height</li>
          </ul>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Download PDF</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Trigonometry</h2>
          <ul className="list-disc list-inside mb-4">
            <li>sinθ = opposite/hypotenuse</li>
            <li>cosθ = adjacent/hypotenuse</li>
            <li>tanθ = opposite/adjacent</li>
            <li>sin²θ + cos²θ = 1</li>
          </ul>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Download PDF</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Statistics</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Mean = Σx/n</li>
            <li>Median = middle value</li>
            <li>Mode = most frequent value</li>
            <li>Range = max - min</li>
          </ul>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Download PDF</a>
        </div>
      </div>
    </div>
  );
};

export default MathsNotes;
