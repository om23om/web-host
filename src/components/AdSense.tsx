import React, { useEffect, useState } from 'react';

interface AdSenseProps {
  slot: string;
  style?: React.CSSProperties;
  className?: string;
  format?: string;
  responsive?: boolean;
}

declare global {
  interface Window {
    adsbygoogle: any[];
    googlefc: {
      callbackQueue: Array<() => void>;
      getConsentStatus?: () => string;
    };
  }
}

const AdSense: React.FC<AdSenseProps> = ({
  slot,
  style = {},
  className = '',
  format = 'auto',
  responsive = true
}) => {
  const [hasConsent, setHasConsent] = useState<boolean>(false);
  const [consentChecked, setConsentChecked] = useState<boolean>(false);

  useEffect(() => {
    // Check for existing consent in localStorage
    const storedConsent = localStorage.getItem('adConsent');
    if (storedConsent) {
      setHasConsent(storedConsent === 'true');
      setConsentChecked(true);
      return;
    }

    // Check Google Consent Status
    const checkConsent = () => {
      if (window.googlefc && window.googlefc.getConsentStatus) {
        const consentStatus = window.googlefc.getConsentStatus();
        const consentGiven = consentStatus === 'given';
        setHasConsent(consentGiven);
        setConsentChecked(true);

        // Store in localStorage for future reference
        localStorage.setItem('adConsent', consentGiven.toString());
      }
    };

    // Check immediately
    checkConsent();

    // Set up callback for consent changes
    if (window.googlefc) {
      window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
      window.googlefc.callbackQueue.push(checkConsent);
    }

    // Fallback: check periodically for 10 seconds
    const interval = setInterval(() => {
      checkConsent();
      if (consentChecked) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [consentChecked]);

  useEffect(() => {
    // Initialize AdSense ads only if consent is given
    if (hasConsent && consentChecked && window.adsbygoogle) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, [slot, hasConsent, consentChecked]);

  // Don't render ads if no consent
  if (!hasConsent && consentChecked) {
    return (
      <div className={`adsense-container ${className}`} style={style}>
        <div className="text-center text-gray-500 text-sm p-4">
          Ads disabled - consent required
        </div>
      </div>
    );
  }

  // Show loading state while checking consent
  if (!consentChecked) {
    return (
      <div className={`adsense-container ${className}`} style={style}>
        <div className="text-center text-gray-400 text-sm p-4">
          Loading ads...
        </div>
      </div>
    );
  }

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-7916158347459501"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
};

export default AdSense;