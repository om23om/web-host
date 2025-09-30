import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    googlefc: {
      callbackQueue: Array<() => void>;
      getConsentStatus?: () => string;
    };
    adsbygoogle: any[];
  }
}

interface ConsentManagerProps {
  publisherId?: string;
  onConsentChange?: (hasConsent: boolean) => void;
}

const ConsentManager: React.FC<ConsentManagerProps> = ({
  publisherId = "7916158347459501",
  onConsentChange
}) => {
  const [consentStatus, setConsentStatus] = useState<string>('unknown');
  const [showConsentDialog, setShowConsentDialog] = useState<boolean>(false);

  useEffect(() => {
    // Initialize Google Funding Choices
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://fundingchoicesmessages.google.com/i/pub-${publisherId}?ers=1`;
    document.head.appendChild(script);

    // Consent callback
    window.googlefc = window.googlefc || {};
    window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];

    window.googlefc.callbackQueue.push(() => {
      if (window.googlefc.getConsentStatus) {
        const status = window.googlefc.getConsentStatus();
        setConsentStatus(status);
        onConsentChange?.(status === 'given');
      }
    });

    // Check consent status periodically
    const checkConsent = () => {
      if (window.googlefc && window.googlefc.getConsentStatus) {
        const status = window.googlefc.getConsentStatus();
        setConsentStatus(status);
        onConsentChange?.(status === 'given');
      }
    };

    const interval = setInterval(checkConsent, 1000);
    return () => clearInterval(interval);
  }, [publisherId, onConsentChange]);

  const handleConsent = (consent: boolean) => {
    if (consent) {
      // User gives consent
      window.googlefc.callbackQueue.push(() => {
        if (window.googlefc && (window.googlefc as any).showConsentForm) {
          (window.googlefc as any).showConsentForm();
        }
      });
    } else {
      // User declines consent
      setConsentStatus('declined');
      onConsentChange?.(false);
    }
  };

  const handleManageConsent = () => {
    window.googlefc.callbackQueue.push(() => {
      if (window.googlefc && (window.googlefc as any).showConsentForm) {
        (window.googlefc as any).showConsentForm();
      }
    });
  };

  // Show consent dialog if status is unknown
  if (consentStatus === 'unknown') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-4">
          <h3 className="text-lg font-semibold mb-4">Cookie Consent</h3>
          <p className="text-gray-600 mb-6">
            We use cookies and similar technologies to improve your experience and show relevant advertising.
            Your consent helps us provide better content.
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => handleConsent(true)}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Accept All
            </button>

            <button
              onClick={() => handleConsent(false)}
              className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
            >
              Decline
            </button>
          </div>

          <button
            onClick={handleManageConsent}
            className="w-full mt-3 text-blue-600 text-sm hover:underline"
          >
            Manage Preferences
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default ConsentManager;