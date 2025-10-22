import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "../../assets/react.svg";

export default function ScreenRezNav() {
    return (
      <nav
        style={{
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "center",  
          alignItems: "center",     
          gap: "1rem",              
          flexWrap: "wrap",        
        }}
      >
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img
            src="/screen-rez-load/vite.svg"
            className="logo"
            alt="Vite logo"
          />
        </a>
        <Link to="/screen-rez-load/">1. Mui useMediaQuery with UserAgent</Link>
        <Link to="/screen-rez-load/platform">2. Platform.js</Link>
        <Link to="/screen-rez-load/browser">3. Browser.js</Link>
        <Link to="/screen-rez-load/react-window">4. react-window</Link>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </nav>
    );
  }