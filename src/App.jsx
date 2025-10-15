
import { Routes, Route, Link } from "react-router-dom";
import HomeLocalState from "./views/HomeLocalState";
import './App.css'
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

function App() {
  const theme = createTheme(); // you can customize later

  return (
<div>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/screen-rez-load/">MediaQuery with Navigator</Link> |{" "}
        <Link to="/screen-rez-load/homepage">Context</Link> |{" "}
        <Link to="screen-rez-load/redux">Redux</Link>
      </nav>

      <Routes>
        {/* <Route path="/" element={<HomeLocalState />} /> */}

          {/* Apply ThemeProvider only to this route */}
          <Route
          path="/screen-rez-load"
          element={
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <HomeLocalState />
            </ThemeProvider>
          }
        />

        {/* <Route path="/homepage" element={<HomePage />} /> */}
        {/* <Route path="/context" element={<HomeWithContext />} />
        <Route path="/redux" element={<HomeWithRedux />} /> */}
      </Routes>
    </div>
  )
}

export default App
