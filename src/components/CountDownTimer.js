"use client";

import { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const difference = +new Date(targetDate) - +new Date();
  const calculateTimeLeft = () => {
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  console.log("Time difference: " + difference);

  return (
    <div>
      {difference > 0 ? (
        <div className="flex flex-row items-center justify-center gap-1">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[10px] font-bold">Days</p>
            <h3 className="text-xl font-bold">{days}</h3>
          </div>
          <p className="timer-separator">:</p>

          <div className="flex flex-col justify-center items-center">
            <p className="text-[10px] font-bold">Hours</p>
            <h3 className="text-xl font-bold">{hours}</h3>
          </div>
          <p className="timer-separator">:</p>

          <div className="flex flex-col justify-center items-center">
            <p className="text-[10px] font-bold">Minutes</p>
            <h3 className="text-xl font-bold">{minutes}</h3>
          </div>
          <p className="timer-separator">:</p>

          <div className="flex flex-col justify-center items-center">
            <p className="text-[10px] font-bold">Seconds</p>
            <h3 className="text-xl font-bold">{seconds}</h3>
          </div>
        </div>
      ) : (
        <div>Countdown ended!</div>
      )}
    </div>
  );
};

export default CountdownTimer;
