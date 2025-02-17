import React, { useEffect } from "react";
import Logo from '../components/Logo'

function Payment() {
  useEffect(() => {
    // Load JotForm Embed Script
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;
    document.body.appendChild(script);

    // Run JotForm handler when script loads
    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-250470792715157']",
          "https://form.jotform.com/"
        );
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
    <Logo />
    <iframe
      id="JotFormIFrame-250470792715157"
      title="RDA Security Training Participation Waiver"
      onLoad={() => window.scrollTo(0, 0)}
      allow="geolocation; microphone; camera; fullscreen"
      src="https://form.jotform.com/250470792715157"
      style={{ minWidth: "100%", maxWidth: "100%", height: "600px", border: "none" }}
    ></iframe>
    </>
  );
}

export default Payment
