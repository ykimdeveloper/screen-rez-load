import React, { useEffect, useRef, useState, useCallback } from "react";
import { IconButton, Box, Skeleton } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Icon from "../icon";
import WaveSurfer from "wavesurfer.js";
import TimelinePlugin from "wavesurfer.js/dist/plugins/timeline.esm.js";


const StyledSlider = styled("input")(({ theme }) => ({
  "&::-webkit-slider-thumb": {
    WebkitAppearance: "none",
    appearance: "none",
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    background: theme.palette.mode,
    cursor: "pointer",
  },
}));


export default function Waveform({ url }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [loading, setLoading] = useState(true);
 
 const theme = useTheme()

  if (!url) {
    console.error("Invalid URL for audio file");
    return;
  }

  useEffect(() => {
    const bottomTimline = TimelinePlugin.create({
      height: 10,
      timeInterval: 0.1,
      primaryLabelInterval: 1,
      style: {
        fontSize: "10px",
        color: "#6A3274",
      },
    });

    const topTimeline = TimelinePlugin.create({
      height: 30,
      insertPosition: "beforebegin",
      timeInterval: 0.2,
      primaryLabelInterval: 5,
      secondaryLabelInterval: 1,
      style: {
        fontSize: "20px",
        color: "#2D5B88",
      },
    });

    const formWaveSurferOptions = (ref) => ({
      container: ref,
      waveColor: "#eee",
      progressColor: "OrangeRed",
      cursorColor: "OrangeRed",
      barWidth: 3,
      barRadius: 3,
      barGap: 0,
      responsive: true,
      height: 170,
      normalize: true,
      partialRender: true,
      dragToSeek: true,
      minPxPerSec: 100,
      cursorWidth: 4,
      autoScroll: true,
      hideScrollbar: true,
      plugins: [bottomTimline, topTimeline],
    });

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    fetch(url)
      .then((response) => {
        if (response.ok) {
          // console.log(response)
          wavesurfer.current.load(url);
          setLoading(false);
        } else {
          throw new Error("Audio file not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching audio file:", error.message);
      });

    wavesurfer.current.on("ready", function () {
      if (wavesurfer.current) {
        setLoading(false);
        wavesurfer.current.setVolume(volume);
        setVolume(volume);
      }
    });

    wavesurfer.current.on("error", function (e) {
      console.error("Error loading wavesurfer:", e);
    });

    wavesurfer.current.on("finish", () => {
      setPlaying(false);
    });

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, [url]);

  const handlePlayPause = useCallback(() => {
    if (wavesurfer.current && wavesurfer.current.isPlaying()) {
      setPlaying(false);
      wavesurfer.current.pause();
    } else {
      setPlaying(true);
      wavesurfer.current.play();
    }
  }, [playing]);

  const updateSliderBackground = (value) => {
    const percentage = ((value - 0.05) / (1 - 0.05)) * 100;
    return `linear-gradient(90deg, red ${percentage}%, gray ${percentage}%)`;
  };

  const onVolumeChange = (e) => {
    const newVolume = +e.target.value;
    setVolume(newVolume);
    if (wavesurfer.current) {
      wavesurfer.current.setVolume(newVolume || 1);
    }
  };

  const calculateBackground = (value) => {
    const percentage = ((value - 0.05) / (1 - 0.05)) * 100;
    return `linear-gradient(90deg, red ${percentage}%, gray ${percentage}%)`;
  };

  return (
    <div>
     

      <div id="waveform" ref={waveformRef}>
        
        {loading ? (
          <Box sx={{ width: "auto", height: "50px" }}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation="pulse" />
            <Skeleton animation="wave" />
            <Skeleton animation="pulse" />
            <Skeleton animation="wave" />
            <Skeleton />
          </Box>
        ) : (
          <></>
        )}
      </div>
      <br></br>
      <div className="controls">
        <IconButton sx={{   color: 'orangeRed'}} onClick={handlePlayPause}>
          {!playing ? (
            <Icon icon="grommet-icons:play" sx={{color: theme.palette.primary.main}}/>
          ) : (
            <Icon icon="ph:pause-duotone" sx={{color: theme.palette.primary.main}}/>
          )}
        </IconButton>

        <StyledSlider
          type="range"
          id="volume"
          name="volume"
          min="0.05"
          max="1"
          step=".015"
          onChange={(e) => {
            onVolumeChange(e);
            e.target.style.background = updateSliderBackground(
              e.target.valueAsNumber
            );
          }}
          defaultValue={volume}
          style={{
            WebkitAppearance: "none",
            width: "35%",
            height: "6px",
            outline: "none",
            WebkitTransition: ".2s",
            transition: "opacity .2s",
            background: calculateBackground(volume),
          }}
        />
        <label htmlFor="volume"> volume </label>
      </div>
    </div>
  );
}
 