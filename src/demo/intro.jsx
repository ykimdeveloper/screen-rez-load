import React from "react";
import MarkdownCodeCellDesc from "../components/markdowncell/markdowncelldesc";

export default function Intro() {
  return (
    <MarkdownCodeCellDesc
      markdown={`#### What is this?
A lightweight testbed for comparing **HTML5 Canvas rendering** across devices and browsers.  
It evaluates rendering behavior using:

- **Mui mediaQuery + browser userAgent** → detect device traits  
- **Platform.js** → platform / OS detection  
- **Browser.js** → browser identification  
- **react-window** → efficient rendering with virtualization  

This setup makes it easy to explore cross-device rendering and performance tuning in a simple, reproducible way.
`}>
   
    </MarkdownCodeCellDesc>

    );
}