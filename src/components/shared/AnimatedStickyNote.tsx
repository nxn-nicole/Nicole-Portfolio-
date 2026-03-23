"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

type AnmimatedStickyNoteProps = {
  text: string;
  initialX: number;
  initialY: number;
  color?: string;
  rotate?: number;
  textSize?: number;
};

export default function AnimatedStickyNote({
  text,
  initialX,
  initialY,
  color = "#b9f0b0",
  rotate = -2,
  textSize = 18,
}: AnmimatedStickyNoteProps) {
  const [pos, setPos] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    dragOffset.current = {
      x: e.pageX - pos.x,
      y: e.pageY - pos.y,
    };

    const handleMouseMove = (e: MouseEvent) => {
      setPos({
        x: e.pageX - dragOffset.current.x,
        y: e.pageY - dragOffset.current.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  // Touch support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    dragOffset.current = {
      x: touch.pageX - pos.x,
      y: touch.pageY - pos.y,
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      setPos({
        x: touch.pageX - dragOffset.current.x,
        y: touch.pageY - dragOffset.current.y,
      });
    };

    const handleTouchEnd = () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };

    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        left: pos.x,
        top: pos.y,
        zIndex: isDragging ? 1000 : 100,
        transformOrigin: "top left",
      }}
      initial={{ rotate: -60 }}
      animate={{ rotate: 0 }}
      transition={{ type: "spring", stiffness: 60, damping: 8, mass: 1.5 }}
    >
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{
          backgroundColor: color,
          transform: `rotate(${rotate}deg) scale(${isDragging ? 1.05 : 1})`,
          cursor: isDragging ? "grabbing" : "grab",
          transition: isDragging
            ? "transform 0.1s ease, box-shadow 0.1s ease"
            : "transform 0.2s ease, box-shadow 0.2s ease",
          boxShadow: isDragging
            ? "0 18px 28px rgba(0,0,0,0.28)"
            : "0 14px 22px rgba(0,0,0,0.18)",
          padding: "20px 18px",
          minWidth: "120px",
          userSelect: "none",
        }}
        className="flex h-40 w-40 items-center justify-center"
      >
        <p
          className="font-short-stack text-center leading-relaxed text-zinc-900"
          style={{ fontSize: `${textSize}px` }}
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
}
