import { useRef, useState, useEffect } from "react";

export function useDivSize() {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    // ResizeObserver handles initial and subsequent size changes reliably
    const ro = new ResizeObserver(entries => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      console.log("useDivSize measured:", Math.round(width), Math.round(height));
      setSize({ width, height });
    });

    ro.observe(ref.current);

    // measure immediately in case ResizeObserver callback is delayed
    const rect = ref.current.getBoundingClientRect();
    setSize({ width: rect.width, height: rect.height });
    console.log("useDivSize initial rect:", Math.round(rect.width), Math.round(rect.height));

    return () => ro.disconnect();
  }, []);

  return { ref, size };
}