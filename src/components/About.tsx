import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Go For Study</h1>
      <p className="text-lg mb-4">
        Go For Study is dedicated to providing high-quality educational resources and interactive learning experiences for students worldwide.
      </p>
      <p className="text-lg mb-4">
        Our mission is to make learning accessible, engaging, and collaborative through comprehensive study materials, live video sessions, and a supportive community.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p>To create an educational platform that empowers students to achieve their academic goals through innovative technology and collaborative learning.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside">
            <li>Quality Education</li>
            <li>Accessibility</li>
            <li>Collaboration</li>
            <li>Innovation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
