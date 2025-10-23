import React from "react";
import { useDivSize } from "../../hooks/useDivSize";

export default function DivWithSize({ children, label = "Debug", debug = false }) {
  const { ref, size } = useDivSize();

  return (
    <div ref={ref} style={{ border: debug ? "1px dashed red" : "none", padding: "1rem", minHeight: 1 }}>
      {debug && (
        <div style={{ fontSize: "0.85rem", color: "#666", marginBottom: "0.5rem" }}>
          {label} — Div size: {Math.round(size.width)}px × {Math.round(size.height)}px
        </div>
      )}
      {children}
    </div>
  );
}




 