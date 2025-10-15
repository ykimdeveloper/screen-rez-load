
import {
  usePopularBrowser,
  useAndroidMobileOrTablet,
  useIOSMobileOrTablet,
} from "../../../util/DeviceInfo";


import { useMediaQuery } from "@mui/material";


  const { hidden, settings, saveSettings, toggleNavVisibility } = props;
  const isPhoneScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const isPopularBrowser = usePopularBrowser();
  const isAndroidDevice = useAndroidMobileOrTablet();
  const isIOSDevice = useIOSMobileOrTablet();

// full screen for desktop 

    <Box
        className="actions-right"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <>
          {isPopularBrowser.toString() === "false" ||
          isIOSDevice.toString() === "true" ||
          isAndroidDevice.toString() === "true" ? (
            <></>
          ) : (
            <>
              <IconButton
                color={fullscreen ? "primary" : "inherit"}
                onClick={toggleFullScreen}
              >
                <Icon
                  icon={
                    fullscreen
                      ? "material-symbols-light:fullscreen-exit-rounded"
                      : "fluent:full-screen-maximize-20-regular"
                  }
                />
              </IconButton>
            </>
          )}
        </>




{/*  plandetails.jsx */}


  const isBrowser = usePopularBrowser();

/

      {!isBrowser ? (
        <Typography
          sx={{
            color: "primary.main",

            padding: "6px 16px",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          Go to our website for more info
        </Typography>
      ) : (
        <>
          <Button
            onClick={() => {
              handleClicks();
            }}
            // disabled={isLoading}
            startIcon={
              isLoading && <CircularProgress size={20} color="inherit" />
            }
            fullWidth

            disabled={
              userPlan &&
              (userPlan.stripeHookFinalCancel
                ? false
                : (plan === "annually" &&
                    data.yearlyPlan.stripePrice === userPlan.planId) ||
                  (plan === "monthly" && data.stripePrice === userPlan.planId))
            }
            variant={data?.popularPlan ? "contained" : "outlined"}
          >
            {actionText}
          </Button>
        </>
      )}




{/* devideinfo.jsx */}


export const usePopularBrowser = () => {
  const [isPopularBrowser, setIsPopularBrowser] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if the user is using a popular browser
    const isChrome = userAgent.includes("Chrome");
    const isSafari =
      userAgent.includes("Safari") && !userAgent.includes("Chrome");
    const isFirefox = userAgent.includes("Firefox");
    const isOpera = userAgent.includes("OPR") || userAgent.includes("Opera");
    const isEdge = userAgent.includes("Edg") || userAgent.includes("Edge");
    const isIE = userAgent.includes("Trident") || userAgent.includes("MSIE");

    if (isChrome || isSafari || isFirefox || isOpera || isEdge || isIE) {
      setIsPopularBrowser(true);
    }
  }, []);

  return isPopularBrowser;
};




export const useIOSMobileOrTablet = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || window.opera;
    const isIos = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    setIsMobileOrTablet(isIos);
  }, []);

  return isMobileOrTablet;
};


export const useAndroidMobileOrTablet = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || window.opera;
    const isAndroid = /android/i.test(userAgent);
    setIsMobileOrTablet(isAndroid);
  }, []);

  return isMobileOrTablet;
};
