import { useState } from "react";

import reactLogo from '../assets/react.svg'
import AudioDetails from './AudioDetails'

import { Container, Box } from "@mui/material";


import {  usePopularBrowser, useAndroidMobileOrTablet, useIOSMobileOrTablet } from "../utils/DeviceInfo";

import MyMap from '../components/map'

export default function HomeLocalState() {
  const [count, setCount] = useState(0);
  const url = `${import.meta.env.BASE_URL}classical-strings-violin-music.mp3`

  const isPopularBrowser = usePopularBrowser()
  const isAndroidTablet = useAndroidMobileOrTablet()
  const isIOSMobileOrTablet = useIOSMobileOrTablet()

  return (
    <div>
      <h2>MediaQuery with Navigator</h2>

      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}

      <div>
        <a href="https://vite.dev" target="_blank">
          <img  src="/screen-rez-load/vite.svg"   className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}



      </div>

      <Box sx={{ width: "100%", mt: 4 }}>
          <AudioDetails
            isPopularBrowser={isPopularBrowser}
            isAndroidTablet={isAndroidTablet}
            isIOSMobileOrTablet={isIOSMobileOrTablet}
            audioData={url}
          />
        </Box>
      <Container
        maxWidth="lg"
        sx={{
          py: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >


   
        <MyMap/>
      </Container>


    </div>
    
  );
}

