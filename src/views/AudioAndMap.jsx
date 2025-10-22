

import AudioDetails from './AudioDetails'
import { Container, Box } from "@mui/material";
import {  usePopularBrowser, useAndroidMobileOrTablet, useIOSMobileOrTablet } from "../utils/DeviceInfo";
import MyMap from '../components/map'

export default function AudioAndMap() {
  const url = `${import.meta.env.BASE_URL}classical-strings-violin-music.mp3`
  const isPopularBrowser = usePopularBrowser()
  const isAndroidTablet = useAndroidMobileOrTablet()
  const isIOSMobileOrTablet = useIOSMobileOrTablet()

  return (
    <div>
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

