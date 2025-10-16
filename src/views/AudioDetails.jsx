
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

    return (
        <>
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
                    borderRadius: 1,
                    overflow: "visible",
                    position: "relative",
                    backgroundColor: "background.paper",
                    // eslint-disable-next-line no-constant-condition
                    boxShadow: "bordered" === "bordered" ? 0 : 6,
                    border: theme => `1px solid ${theme.palette.divider}`
                }}
                >
          
                <Box >
                    <WaveSurferPlayer audioData={audioData} 
                        isPopularBrowser={isPopularBrowser}
                        isAndroidTablet={isAndroidTablet}
                        isIOSMobileOrTablet={isIOSMobileOrTablet}
                    />
                </Box>
          </Box>
      </Box>
    </>
    )
}

export default AudioDetails;