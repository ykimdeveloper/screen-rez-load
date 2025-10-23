
import { useState, useEffect } from "react";

export default function useBrowserJsInfo() {
  const [info, setInfo] = useState({
    browser: "Unknown",
    device: "Unknown",
    isIOS: false,
    isPopular: false,
  });

  useEffect(() => {
    const classes = document.documentElement.classList;

    let browser = "Unknown";
    if (classes.contains("chrome")) browser = "Chrome";
    else if (classes.contains("safari")) browser = "Safari";
    else if (classes.contains("firefox")) browser = "Firefox";
    else if (classes.contains("opera")) browser = "Opera";
    else if (classes.contains("edge")) browser = "Edge";

    const isIOS = classes.contains("ios");
    const device = isIOS ? "iOS Device" : "Desktop";

    const popular = ["Chrome", "Safari", "Firefox", "Opera", "Edge"];
    const isPopular = popular.includes(browser);

    setInfo({ browser, device, isIOS, isPopular });
  }, []);

  return info;
}