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

        IOS behaves differently than on Android when using 

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
  const [isPopularBrowser, setIsPopularBrowser] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if the user is using a popular browser
    const isChrome = userAgent.includes("Chrome");
    const isSafari =
      userAgent.includes("Safari") && !userAgent.includes("Chrome");
    const isFirefox = userAgent.includes("Firefox");
    const isOpera = userAgent.includes("OPR") || userAgent.includes("Opera");
    const isEdge = userAgent.includes("Edg") || userAgent.includes("Edge");
    const isIE = userAgent.includes("Trident") || userAgent.includes("MSIE");

    if (isChrome || isSafari || isFirefox || isOpera || isEdge || isIE) {
      setIsPopularBrowser(true);
    }
  }, []);

  return isPopularBrowser;
};
  `}
      output={
       <></>
      }
    />
  );
}
