import { useState, useEffect } from "react";

const CountdownTimer = ({ days = 0, hours = 0, minutes = 0, seconds = 0 }) => {
  const [time, setTime] = useState({ days, hours, minutes, seconds });

  useEffect(() => {
    const timer = setInterval(() => {
      if (time.seconds > 0) {
        setTime((prevTime) => ({
          ...prevTime,
          seconds: prevTime.seconds - 1,
        }));
      } else if (time.minutes > 0) {
        setTime((prevTime) => ({
          ...prevTime,
          minutes: prevTime.minutes - 1,
          seconds: 59,
        }));
      } else if (time.hours > 0) {
        setTime((prevTime) => ({
          ...prevTime,
          hours: prevTime.hours - 1,
          minutes: 59,
          seconds: 59,
        }));
      } else if (time.days > 0) {
        setTime((prevTime) => ({
          ...prevTime,
          days: prevTime.days - 1,
          hours: 23,
          minutes: 59,
          seconds: 59,
        }));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className="text-white">
      <div>
        <span className="mr-3">{String(time.days).padStart(2, "0")}</span> :
        <span className="mx-4">{String(time.hours).padStart(2, "0")}</span> :
        <span className="mx-4">{String(time.minutes).padStart(2, "0")}</span> :
        <span className="ml-4">{String(time.seconds).padStart(2, "0")}</span>
      </div>
      <div className="text-body-tiny space-x-4">
        <span>DAYS</span> <span>HOURS</span> <span>MINS</span> <span>SECS</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
