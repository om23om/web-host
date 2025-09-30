import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Go For Study</h1>
      <p className="text-lg mb-8">Your ultimate educational platform for learning and collaboration.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Study Materials</h2>
          <p>Access comprehensive notes for Science and Maths.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Live Meetings</h2>
          <p>Join interactive video sessions with peers.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Blog</h2>
          <p>Read latest educational posts and updates.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
