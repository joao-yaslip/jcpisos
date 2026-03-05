"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgressBar() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scroll = window.scrollY;
      const progress = scroll / totalHeight;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="progress-container">
      <div ref={progressRef} className="progress-bar" />
    </div>
  );
}
