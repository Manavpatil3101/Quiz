// components/TypingEffect.js
"use client";
import classes from './Type.module.css';
import { useState, useEffect } from "react";

export default function TypingEffect({ text, speed = 50, className = "" }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed(""); // Reset typing on new text
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className={`${classes.typingContainer} ${className}`}>
      {displayed}
      <span className={classes.blinkingCursor}>|</span>
    </div>
  );
}
