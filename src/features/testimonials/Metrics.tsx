"use client";

import { useEffect, useRef, useState } from "react";
import { metrics } from "./metrics.data";

const animationDuration = 1200;
const framesPerSecond = 30;

export default function Metrics() {
  const metricsRef = useRef<HTMLUListElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const element = metricsRef.current;

    if (
      !element ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgress(0);
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    let startTime: number | undefined;
    let lastUpdate = 0;
    let frameId: number;

    const animate = (timestamp: number) => {
      startTime ??= timestamp;
      const elapsed = timestamp - startTime;

      if (
        timestamp - lastUpdate >= 1000 / framesPerSecond ||
        elapsed >= animationDuration
      ) {
        setProgress(Math.min(elapsed / animationDuration, 1));
        lastUpdate = timestamp;
      }

      if (elapsed < animationDuration) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [hasStarted]);

  return (
    <ul
      ref={metricsRef}
      aria-label="Luma learning statistics"
      className="grid grid-cols-3 gap-3 md:flex md:w-[320px] md:flex-col md:gap-2 md:border-l md:border-border md:pl-10"
    >
      {metrics.map(({ value, suffix, label }) => {
        const easedProgress = 1 - (1 - progress) ** 3;
        const currentValue = Math.round(value * easedProgress);

        return (
          <li key={label} className="flex flex-col">
            <span
              aria-hidden="true"
              className="font-jakarta text-[28px] leading-9 font-extrabold tracking-[-0.6px] text-primary md:text-[48px] md:leading-14 md:tracking-[-1.2px]"
            >
              {currentValue}
              {suffix}
            </span>
            <span className="sr-only">
              {value}
              {suffix}
            </span>
            <span className="text-[11px] leading-4 text-subtle md:text-[12px]">
              {label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
