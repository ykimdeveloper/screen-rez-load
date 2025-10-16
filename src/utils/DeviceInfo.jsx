import { useEffect, useState } from "react";

//  ----------------------------------------------------------------------------------------------- //
// works
// full screen toggle --> full screen doesn't work on ios/android browsers and audio player
export const isMobileOrTablet = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || window.opera;
    const isIos = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isAndroid = /android/i.test(userAgent);

    // console.log(" isIos: ", isIos);
    // console.log(" isAndroid: ", isAndroid);

    if (
      navigator.platform === "iPad" ||
      navigator.platform === "iPhone" ||
      navigator.platform === "iPod"
    ) {
      console.log("This is an iOS device. navigator.platform");
      setIsMobileOrTablet(true);
    } else {
      console.log("This is not an iOS device! navigator.platform");
      setIsMobileOrTablet(false);
    }
  }, []);

  return isMobileOrTablet;
};

//  works
// audio player, login showing plotpointers.com,
// remove membership page button to purchase, link only to browsers, for even phone browsers--> so users don't make app purchases
export const usePopularBrowser = () => {
  const [isPopularBrowser, setIsPopularBrowser] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if the user is using a popular browser
    const isChrome = userAgent.includes("Chrome");
    const isSafari = userAgent.includes("Safari") && !userAgent.includes("Chrome");
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


export const useIOSMobileOrTablet = () => {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  
    useEffect(() => {
      const userAgent = navigator.userAgent || window.opera;
      const isIos = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
      setIsMobileOrTablet(isIos);
    }, []);
  
    return isMobileOrTablet;
  };
  
  
  export const useAndroidMobileOrTablet = () => {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  
    useEffect(() => {
      const userAgent = navigator.userAgent || window.opera;
      const isAndroid = /android/i.test(userAgent);
      setIsMobileOrTablet(isAndroid);
    }, []);
  
    return isMobileOrTablet;
  };
  

export const useMobileOrTablet = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || window.opera;
    const isIos = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isAndroid = /android/i.test(userAgent);
    setIsMobileOrTablet(isIos || isAndroid);
  }, []);

  return isMobileOrTablet;
};


export const DeviceInfo = () => {
  // if (typeof window === `undefined` || typeof navigator === `undefined`) return false;

  const userAgent = navigator.userAgent || window.opera;
  const isIos = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  const isAndroid = /android/i.test(userAgent);

  return isIos || isAndroid;
};



//  ----------------------------------------------------------------------------------------------- //

export const isMobileBrowser = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  // const mobilePattern = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
  const mobileOrTabletPattern =
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad|ad\ mini|ad\ pro)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
  const isMobile = navigator.userAgentData.mobile;

  console.log("isMobile: ", isMobile);
  console.log(" window.navigator.userAgent: ", window.navigator.userAgent);
  console.log("   navigator.userAgent: ", navigator.userAgent);

  return mobileOrTabletPattern.test(userAgent);
};

export const useDeviceInfo = async () => {
  // if (typeof window === `undefined` || typeof navigator === `undefined`) return false;

  const [isMobileDevice, setIsMobileDevice] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent || window.opera;
    const isIos = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isAndroid = /android/i.test(userAgent);

    setIsMobileDevice(isIos || isAndroid);
  }, []);

  // console.log("isMobileDevice: ", isMobileDevice);
  return isMobileDevice;
};

export const userDeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobileDevice: false,
    isMobileApp: false,
  });

  useEffect(() => {
    if (typeof window === "undefined" || typeof navigator === "undefined") {
      setDeviceInfo({ isMobileDevice: false, isMobileApp: false });
      return;
    }

    const userAgent = navigator.userAgent || window.opera;
    const isIos = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isAndroid = /android/i.test(userAgent);
    const isMobileDevice = isIos || isAndroid;

    // Additional check to differentiate between a mobile browser and a mobile app
    // For example, you might check for the presence of a specific object or variable
    // that you know will be present in your mobile app environment
    const isMobileApp = typeof window.MyMobileApp !== "undefined";

    setDeviceInfo({ isMobileDevice, isMobileApp });
  }, []);

  return deviceInfo;
};

export const useMobileDeviceAndBrowser = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isFromMobileBrowser, setIsFromMobileBrowser] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if it's a mobile device (iOS or Android)
    const isIos = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isAndroid = /android/i.test(userAgent);
    const isMobileDevice = isIos || isAndroid;
    // console.log("\n isMobileDevice: ", isMobileDevice);
    setIsMobile(isMobileDevice);

    // Check if it's from a mobile browser (not an app's web view)
    const isMobileBrowser = isMobileDevice && /Safari/.test(userAgent);
    // console.log("\n isMobileBrowser: ", isMobileBrowser);
    setIsFromMobileBrowser(isMobileBrowser);
  }, []);

  return { isMobile, isFromMobileBrowser };
};

export const useBrowserType = () => {
  const [browserType, setBrowserType] = useState({
    device: "Desktop",
    browser: "Unknown",
  });

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check for mobile device
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );

    if (isMobile) {
      // Safari on iOS
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        if (userAgent.includes("Safari") && !userAgent.includes("CriOS")) {
          setBrowserType({ device: "Mobile", browser: "Safari" });
        }
        // Chrome on iOS
        else if (userAgent.includes("CriOS")) {
          setBrowserType({ device: "Mobile", browser: "Chrome" });
        }
      }
      // Chrome on Android
      else if (/android/i.test(userAgent)) {
        if (userAgent.includes("Chrome")) {
          setBrowserType({ device: "Mobile", browser: "Chrome" });
        }
      }
    } else {
      // Chrome on Desktop
      if (userAgent.includes("Chrome")) {
        setBrowserType({ device: "Desktop", browser: "Chrome" });
      }
      // Safari on Desktop
      else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
        setBrowserType({ device: "Desktop", browser: "Safari" });
      }
    }
  }, []);

  return browserType;
};

export const useWebBrowserType = () => {
  const [browserType, setBrowserType] = useState({
    device: "Desktop",
    browser: "Unknown",
  });

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check for mobile device
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
    let device = isMobile ? "Mobile" : "Desktop";

    // Browser detection
    let browser = "Unknown";
    if (userAgent.includes("Firefox")) {
      browser = "Firefox";
    } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
      browser = "Opera";
    } else if (userAgent.includes("Chrome")) {
      browser = "Chrome";
    } else if (userAgent.includes("Safari")) {
      browser = "Safari";
    } else if (userAgent.includes("Edge")) {
      browser = "Edge";
    } else if (userAgent.includes("MSIE") || userAgent.includes("Trident")) {
      browser = "Internet Explorer";
    }
    // console.log("browserType:", browserType);

    setBrowserType({ device, browser });
  }, []);

  return browserType;
};

export const useIsIphone = () => {
  const [isIphone, setIsIphone] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if the user agent indicates the device is an iPhone
    const isIphone = userAgent.includes("iPhone");

    setIsIphone(isIphone);
  }, []);

  return isIphone;
};

export const isIPad = () => {
  const [isIPad, setIsIPad] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if the user agent contains 'iPad'
    if (/iPad/i.test(userAgent)) {
      setIsIPad(true);
    }
  }, []);

  return isIPad;
};

function iOS() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}

export const isMobileOrTablet2 = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if the user agent is for iPhone, iPod, iPad, Android, webOS, BlackBerry, or Windows Phone
    const isMobileDevice =
      userAgent.includes("iPhone") ||
      userAgent.includes("iPod") ||
      userAgent.includes("iPad") ||
      userAgent.includes("Android") ||
      //  userAgent.includes("webOS") ||
      userAgent.includes("BlackBerry") ||
      userAgent.includes("Windows Phone");

    setIsMobileOrTablet(false);
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      // console.log("This is an iOS device. /iPad|iPhone|iPod/");
      setIsMobileOrTablet(true);
    } else {
      setIsMobileOrTablet(false);
      // console.log("This is not an iOS device! /iPad|iPhone|iPod/");
    }
  }, []);
  return isMobileOrTablet;
};
