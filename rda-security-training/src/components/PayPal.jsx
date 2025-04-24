import React, { useEffect } from 'react';

function PayPal() {
  useEffect(() => {
    // Ensure PayPal SDK is loaded and use its function
    if (window.paypal) {
      window.paypal.HostedButtons({
        hostedButtonId: 'XHSNVGZ4VLEDG',
      }).render('#paypal-container-XHSNVGZ4VLEDG');
    } else {
      console.error('PayPal SDK not loaded.');
    }
  }, []);

  return (
    <div>
      <div id="paypal-container-XHSNVGZ4VLEDG"></div>
    </div>
  );
}

export default PayPal;