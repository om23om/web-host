import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-4">
        Get in touch with us for any questions or support.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Email</h2>
        <p className="text-blue-600">contact@goforstudy.com</p>
      </div>
    </div>
  );
};

export default Contact;
