import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose">
        <h2>Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you create an account or participate in our services.</p>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, and to communicate with you.</p>

        <h2>Information Sharing</h2>
        <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.</p>

        <h2>Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information against unauthorized access.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at privacy@goforstudy.com.</p>
      </div>
    </div>
  );
};

export default Privacy;
