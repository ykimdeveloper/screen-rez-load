
import { useState, useEffect } from "react";
import platform from "platform";

export default function usePlatformInfo() {
  const [info, setInfo] = useState({
    browser: "Unknown",
    device: "Unknown",
    isIOS: false,
    isPopular: false,
  });

  useEffect(() => {
    const parsed = platform.parse(navigator.userAgent);

    const browser = parsed.name || "Unknown";
    const os = parsed.os?.family || "Unknown";

    const isIOS = os.includes("iOS");
    const device = isIOS ? "iOS Device" : os;

 
    const popularBrowsers = ["Chrome", "Safari", "Firefox", "Opera", "Edge"];
    const isPopular = popularBrowsers.includes(browser);

    setInfo({ browser, device, isIOS, isPopular });
  }, []);

  return info;
}