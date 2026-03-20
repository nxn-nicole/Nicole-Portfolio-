"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";

interface RoughLineProps {
  width?: number;
  height?: number;
  strokeWidth?: number;
  color?: string;
  roughness?: number;
}

export default function RoughLine({
  width = 60,
  height = 16,
  strokeWidth = 2,
  color = "currentColor",
  roughness = 1.8,
}: RoughLineProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    while (svg.firstChild) svg.removeChild(svg.firstChild);

    const rc = rough.svg(svg);
    const line = rc.line(2, height / 2, width - 2, height / 2, {
      stroke: color,
      strokeWidth,
      roughness,
    });
    svg.appendChild(line);
  }, [width, height, strokeWidth, color, roughness]);

  return <svg ref={svgRef} width={width} height={height} />;
}
