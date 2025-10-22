import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Home from "./views/Home";
import MuiUserAgent from "./views/MuiUserAgent"
import ScreenRezNav from "./components/nav"

function App() {
  const theme = createTheme(); // you can customize later
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

        {/* <Route path="/homepage" element={<HomePage />} /> */}
        {/* <Route path="/context" element={<HomeWithContext />} />
        <Route path="/redux" element={<HomeWithRedux />} /> */}
      </Routes>
    </div>
  );
}

export default App;
