import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Home from "./views/Home";
import MuiUserAgent from "./views/MuiUserAgent"
import PlatformView from "./views/PlatformJS"
import ScreenRezNav from "./components/nav"

function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  
  return (
    <div>
     <ScreenRezNav/>

      <Routes>
 
        <Route
          path="/screen-rez-load"
          element={
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Home />
              <MuiUserAgent/>
            </ThemeProvider>
          }
        />

        <Route path="/screen-rez-load/platform" element={<PlatformView />} />
        {/* <Route path="/context" element={<HomeWithContext />} />
        <Route path="/redux" element={<HomeWithRedux />} /> */}
      </Routes>
    </div>
  );
}

export default App;
