import React, { useEffect, useRef } from "react";
import * as Plot from "@observablehq/plot";

export function PlotGraph(props: { options: any }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const plot = Plot.plot(props.options);
    if (ref.current) {
      if (ref.current.children[0]) {
        ref.current.children[0].remove();
      }
      ref.current.appendChild(plot);
    }
  }, [ref, props.options]);

  return <div ref={ref} />;
}
