
import { useEffect, useState } from "react";

export const useIOSMobileOrTablet = () => {
    const [result, setResult] = useState({ isIOS: false, device: "Unknown" });
  
    useEffect(() => {
      const userAgent = navigator.userAgent || window.opera;
  
      // Method 1: Check user agent for iPhone/iPod/older iPads
      const isIPhone = /iPhone/.test(userAgent);
      const isIPod = /iPod/.test(userAgent);
      const isIPad = /iPad/.test(userAgent);
  
      // Method 2: Check navigator.platform for older detection
      const isIOSPlatform = ["iPad", "iPhone", "iPod"].includes(navigator.platform);
  
      // Method 3: Detect iPad masquerading as Mac (iPadOS 13+)
      const isIPadPro = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  
      if (isIPhone) setResult({ isIOS: true, device: "iPhone" });
      else if (isIPod) setResult({ isIOS: true, device: "iPod" });
      else if (isIPad || isIPadPro) setResult({ isIOS: true, device: "iPad" });
      else if (isIOSPlatform) setResult({ isIOS: true, device: navigator.platform });
      else setResult({ isIOS: false, device: "Not iOS" });
    }, []);
  
    return result; // { isIOS: boolean, device: string }
  };
  
//   export const usePopularBrowser = () => {
//     const [result, setResult] = useState({ isPopular: false, browser: "Unknown" });
  
//     useEffect(() => {
//       const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
//       let browser = "Unknown";
//       if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
//         browser = "Chrome";
//       } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
//         browser = "Safari";
//       } else if (userAgent.includes("Firefox")) {
//         browser = "Firefox";
//       } else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
//         browser = "Opera";
//       } else if (userAgent.includes("Edg") || userAgent.includes("Edge")) {
//         browser = "Edge";
//       } else if (userAgent.includes("Trident") || userAgent.includes("MSIE")) {
//         browser = "Internet Explorer";
//       }
  
//       const isPopular = browser !== "Unknown";
//       setResult({ isPopular, browser });
//     }, []);
  
//     return result;  
//   };


  export const usePopularBrowser = () => {
    const [result, setResult] = useState({ isPopular: false, browser: "Unknown" });
  
    useEffect(() => {
      const ua = navigator.userAgent;
  
      let browser = "Unknown";
      if (/OPR|Opera/.test(ua)) {
        browser = "Opera";
      } else if (/Edg/.test(ua)) {
        browser = "Edge";
      } else if (/Chrome/.test(ua)) {
        browser = "Chrome";
      } else if (/Safari/.test(ua)) {
        browser = "Safari";
      } else if (/Firefox/.test(ua)) {
        browser = "Firefox";
      } else if (/Trident|MSIE/.test(ua)) {
        browser = "Internet Explorer";
      }
  
      const isPopular = ["Chrome", "Safari", "Firefox", "Opera", "Edge"].includes(browser);
      setResult({ isPopular, browser });
    }, []);
  
    return result;
  };