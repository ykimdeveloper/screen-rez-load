import AudioAndMap from "./AudioAndMap";
import PlatformDemo from "../demo/platform/platformdevice";
import DivWithSize from "../components/DivWithSize_";
import { useMediaQuery, useTheme } from "@mui/material";

import usePlatformInfo from "../hooks/usePlatformInfo";

import MyMap from '../components/map'
import BrowserWarning from '../components/browserWarning'

export default function PlatformView() {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600–900px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // >900px


    // Custom hooks
    const { browser, device, isIOS, isPopular } = usePlatformInfo();

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
        2. Platform.js 
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
      

      <PlatformDemo />


  
      <div style={{ marginLeft: "150px"  }}>
      <div style={{ padding: ".5rem" }}>
      <h2 style={{ textAlign: "center" }}>📱 Responsive Map Demo </h2>



        {browser === "Opera" ? (
        <BrowserWarning browser={browser} device={device} />
        ) : (
            <DivWithSize label={`Dynamic: {current.label} — Fails on Opera Browser`} debug>
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
