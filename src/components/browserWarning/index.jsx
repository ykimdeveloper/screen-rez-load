import { useIOSMobileOrTablet, usePopularBrowser } from "../../hooks/useDeviceInfo";

export default function BrowserWarning({ browser, device }) {
    // If Opera specifically
    if (browser === "Opera") {
      return (
        <div
          style={{
            background: "#e0f7ff",
            color: "#0077aa",
            padding: "1rem",
            margin: "1rem 0",
            border: "1px solid #00aaff",
            borderRadius: "4px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          🧭 You’re using Opera — please use Chrome or Safari
        </div>
      );
    }
  
    // Generic fallback for unknown or non‑popular
    if (browser === "Unknown" || device === "Unknown") {
      return (
        <div
          style={{
            background: "#ffe0e0",
            color: "#900",
            padding: "1rem",
            margin: "1rem 0",
            border: "1px solid #f00",
            borderRadius: "4px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          ⚠️ Please use Chrome or Safari
        </div>
      );
    }
  
    return null;
  }