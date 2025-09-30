import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Educational Blog</h1>
      <div className="space-y-8">
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Class 10 Science Complete Chapterwise Notes</h2>
          <p className="text-gray-600 mb-4">Published on October 15, 2023</p>
          <p className="mb-4">Comprehensive study material covering all 5 chapters of Class 10 Science syllabus. Includes detailed explanations, diagrams, and practice questions.</p>
          <a href="#" className="text-blue-600 hover:underline">Read more →</a>
        </article>
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Class 10 Maths All Important Formulas & Shortcuts</h2>
          <p className="text-gray-600 mb-4">Published on October 10, 2023</p>
          <p className="mb-4">Essential formulas and shortcuts for Algebra, Geometry, Trigonometry, and Statistics. Perfect for quick revision before exams.</p>
          <a href="#" className="text-blue-600 hover:underline">Read more →</a>
        </article>
      </div>
    </div>
  );
};

export default Blog;
