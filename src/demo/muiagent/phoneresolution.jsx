import React from "react";
import MarkdownCodeCell from "../../components/markdowncell";
// import MarkdownCodeCellDesc from "../components/markdowncell/markdowncelldesc";

import AudioAndMap from "../../views/AudioAndMap"

export default function PhoneResolution() {
  return (
    <MarkdownCodeCell
      executionCount={1}
      markdown={`### Helper Function to Check if a User is on a Browser or IOS device
        
        so WebAssembly render on flutter is PWA and it's good to check if the user is using 
        a browser and not a PWA. 

        IOS behaves differently than on Android when using wavesurver

        Also Wavesurfer player can be made responsive, but you frequently need to handle window/container 
        resize yourself and tell Wavesurfer to recalculate and redraw the waveform. Also the Wavesurfer does not render
        on IOS devices

        `}
      code={`
export const useIOSMobileOrTablet = () => {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || window.opera;
    
    // Method 1: Check user agent for iPhone/iPod/older iPads
    const isIOSUserAgent = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    
    // Method 2: Check navigator.platform for older detection
    const isIOSPlatform = ['iPad', 'iPhone', 'iPod'].includes(navigator.platform);
    
    // Method 3: Detect iPad masquerading as Mac (iPadOS 13+)
    const isIPadPro = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
    
    setIsIOS(isIOSUserAgent || isIOSPlatform || isIPadPro);
  }, []);

  return isIOS;
};


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


// cases for if screen is small and an iPhone checks for iOS devices 
// browsers like Colibri, Floorp, Vivaldi, Maxthon.
   let current;
    if (isPhone || (isIOS && !isPopularBrowser)) {
      current = deviceStyles.phone;
    } else if (isTablet) {
      current = deviceStyles.tablet;
    } else {
      current = deviceStyles.desktop;
    }

  `}
      output={
       <></>
      }
    />
  );
}
