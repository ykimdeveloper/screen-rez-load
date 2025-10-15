
import { Routes, Route, Link } from "react-router-dom";
import HomeLocalState from "./views/HomeLocalState";
import './App.css'
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

function App() {
  const theme = createTheme(); // you can customize later

  return (
<div>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/">Local State</Link> |{" "}
        <Link to="/homepage">Context</Link> |{" "}
        <Link to="/redux">Redux</Link>
      </nav>

      <Routes>
        {/* <Route path="/" element={<HomeLocalState />} /> */}

          {/* Apply ThemeProvider only to this route */}
          <Route
          path="/"
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
