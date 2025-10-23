import AudioAndMap from "./AudioAndMap";
import PhoneResolution from "../demo/muiagent/phoneresolution";
import DivWithSize from "../components/DivWithSize_";
import { useMediaQuery, useTheme } from "@mui/material";

import {usePopularBrowser, useIOSMobileOrTablet } from "../hooks/useDeviceInfo"

import MyMap from '../components/map'
import BrowserWarning from '../components/browserWarning'

export default function HomeLocalState() {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600–900px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // >900px

    // Custom hooks
    const { isIOS, device } = useIOSMobileOrTablet();
    const { isPopularBrowser, browser } = usePopularBrowser();
   

  const deviceStyles = {
    phone: {
      label: "Phone (375px)",
      style: { width: "375px", height: "100vh", border: "1px solid #ccc", marginBottom: "2rem" },
    },
    tablet: {
      label: "Tablet (768px)",
      style: { width: "768px", height: "100vh", border: "1px solid #ccc", marginBottom: "2rem" },
    },
    desktop: {
      label: "Desktop (1024px)",
      style: { width: "1024px", height: "100vh", border: "1px solid #ccc", marginBottom: "2rem" },
    },
  };

 

  const current = isPhone
    ? deviceStyles.phone
    : isTablet
    ? deviceStyles.tablet
    : deviceStyles.desktop;

    // let current;
    // if (isPhone || (isIOS && !isPopularBrowser)) {
    //   current = deviceStyles.phone;
    // } else if (isTablet) {
    //   current = deviceStyles.tablet;
    // } else {
    //   current = deviceStyles.desktop;
    // }
 
 


  console.log('\n\n device ', device)
  console.log('\n\n browser ', browser)
  

  return (
    <div>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        1. Mui useMediaQuery with UserAgent 
      </h2>
      <h4
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        browser: {browser} - device: {device}
      </h4>
      

      <PhoneResolution />


  
      <div style={{ marginLeft: "150px"  }}>
      <div style={{ padding: ".5rem" }}>
      <h2 style={{ textAlign: "center" }}>📱 Responsive Map Demo </h2>


      {/* <DivWithSize label={`Dynamic: ${current.label}`} debug>
      <div style={current.style}>
          <MyMap />
        </div>
      </DivWithSize> */}

    {browser === "Opera" ? (
      <BrowserWarning browser={browser} device={device}   />
    ) : (
      <DivWithSize label={`Dynamic: ${current.label}`} debug>
      <div style={current.style}>
        <MyMap />
      </div>
      </DivWithSize>
    )}

      <DivWithSize label="Phone View" debug>
        <div style={deviceStyles.phone.style}>
          <MyMap />
        </div>
      </DivWithSize>

      <DivWithSize label="Tablet View" debug>
        <div style={deviceStyles.tablet.style}>
          <MyMap />
        </div>
      </DivWithSize>


      <DivWithSize label={current.label} debug>
        <div style={deviceStyles.desktop.style}>
          <MyMap />
        </div>
      </DivWithSize>
    </div>

    </div>

    </div>
  );
}
