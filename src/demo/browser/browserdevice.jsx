import React from "react";
import MarkdownCodeCell from "../../components/markdowncell";
// import MarkdownCodeCellDesc from "../components/markdowncell/markdowncelldesc";

import AudioAndMap from "../../views/AudioAndMap"

export default function BrowserDemo() {
  return (
    <MarkdownCodeCell
      executionCount={1}
      markdown={`### browser.js handles the messy UA parsing for you.
•  browser.js (phpdude) → injects CSS classes into <html>. You consume those classes in CSS or JS.
        
html.opera .myMap {
  border: 2px solid red;
}
html.safari .myMap {
  border: 2px solid blue;
}
`}
      code={`


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


  `}
      output={
       <></>
      }
    />
  );
}
