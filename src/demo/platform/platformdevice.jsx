import React from "react";
import MarkdownCodeCell from "../../components/markdowncell";
// import MarkdownCodeCellDesc from "../components/markdowncell/markdowncelldesc";

import AudioAndMap from "../../views/AudioAndMap"

export default function PlatformDemo() {
  return (
    <MarkdownCodeCell
      executionCount={1}
      markdown={`### platform.js handles the messy UA parsing for you.
        •  You get structured info: browser.name, browser.version, os.family, os.version, product (device model).
        •  No need to maintain fragile regex checks.
        `}
      code={`

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

    // Define what you consider "popular"
    const popularBrowsers = ["Chrome", "Safari", "Firefox", "Opera", "Edge"];
    const isPopular = popularBrowsers.includes(browser);

    setInfo({ browser, device, isIOS, isPopular });
  }, []);

  return info;
}


  `}
      output={
       <></>
      }
    />
  );
}
