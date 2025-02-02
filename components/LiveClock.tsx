"use client";

import { useState, useEffect } from "react";

const LiveClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format time and date
  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const formattedDate = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-bold lg:text-7xl">{formattedTime}</h1>
      <p className="text-lg font-medium text-sky-1 lg:text-2xl">
        {formattedDate}
      </p>
    </div>
  );
};

export default LiveClock;
