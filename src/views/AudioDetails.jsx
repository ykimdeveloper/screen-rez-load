
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import {
  Box,
} from "@mui/material";

import Waveform from "../components/waveform";


function WaveSurferPlayer({ 
    audioData, 
    isPopularBrowser,
    isAndroidTablet,
    isIOSMobileOrTablet 
}) {

    const theme = useTheme();

 
    const shouldUseWaveform = (isPopularBrowser.toString()==='true' || isAndroidTablet.toString()==='true') && isIOSMobileOrTablet.toString()==='false';

    return (
      <div>
        <br></br>
        <Box
        sx={{
          "& svg": { mb: 2 },
        }}
      >
        <Box className={`${!shouldUseWaveform  ? 'p-3 card transform hover:rotate-x-2 hover:rotate-y-2 transition duration-300 ease-in-out' : 'p-3 card border-solid border-4 border-current transform hover:rotate-x-2 hover:rotate-y-2 transition duration-300 ease-in-out'}`}>
       
          {shouldUseWaveform ? (
            <Waveform url={audioData} />
          ) : (
            <audio id="audioPlayer" controls>
              <source src={audioData} type="audio/mpeg" />
            </audio>
          )}
        </Box>
       
          <a
            style={{
              transition: "background-color 0.3s ease-in-out",
              color: theme.palette.text.primary,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = theme.palette.primary.main;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
            href={audioData}
            download
          >
            Download Audio
          </a>
        </Box>
      </div>
    );
  }










const AudioDetails = (props) => {
    const {
        isPopularBrowser,
        isAndroidTablet,
        isIOSMobileOrTablet,
        audioData
      } = props;

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("xl")); // 'lg' corresponds to 1024px and above
 

    return (
        <>
    <Box
        sx={{
  
          backgroundColor: "background.paper",
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: ["flex-start", "center"],
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              overflow: "hidden",
              alignItems: "center",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
   
          </Box>
       
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "background.paper",
          p: (theme) => theme.spacing(3, 2, 3, 3),
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
         
    
        </Box>
      </Box>
      
      <Box
        sx={{
          height: "calc(100% - 6.75rem)",
          backgroundColor: "action.hover",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
  
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                borderRadius: 1,
                overflow: "visible",
                position: "relative",
                backgroundColor: "background.paper",
                // eslint-disable-next-line no-constant-condition
                boxShadow: "bordered" === "bordered" ? 0 : 6,
                border: theme => `1px solid ${theme.palette.divider}`
              }}
            >
              <Box
                sx={{
                  marginLeft: "1.3rem",
                  maxWidth: "100%",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "& img": {
                    width: matches ? "750px" : "100%", // 750px for large screens, 100% for smaller screens
                    height: "auto",
                  },
                }}
              >
             
              </Box>
      
              <Box sx={{ p: 5, pt: 0, textAlign: "center" }}>
      
              <WaveSurferPlayer audioData={audioData} 
                isPopularBrowser={isPopularBrowser}
                isAndroidTablet={isAndroidTablet}
                isIOSMobileOrTablet={isIOSMobileOrTablet}
              />
              </Box>
              <br></br>
              <Box
                sx={{
                  mb: "1rem",
                  p: 8,
                  pt: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
            
            
              </Box>
            </Box>
          </Box>
 
      </Box>
    </>
    )
}

export default AudioDetails;