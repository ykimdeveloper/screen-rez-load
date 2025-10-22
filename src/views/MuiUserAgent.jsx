import AudioAndMap from "./AudioAndMap";
import PhoneResolution from "../demo/muiagent/phoneresolution";

export default function HomeLocalState() {
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
      <PhoneResolution />
      <AudioAndMap />
    </div>
  );
}
