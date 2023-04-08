import { useState, useEffect } from "react";

type Props = {
  targetDate: string;
};

const Countdown: React.FC<Props> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const difference = Date.parse(targetDate) - Date.parse(new Date().toString());

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center">
      <div className="bg-gray-200 p-4 rounded-md m-2">
        <div className="text-4xl font-bold">{timeLeft.days}</div>
        <div className="text-lg">Days</div>
      </div>
      <div className="bg-gray-200 p-4 rounded-md m-2">
        <div className="text-4xl font-bold">{timeLeft.hours}</div>
        <div className="text-lg">Hours</div>
      </div>
      <div className="bg-gray-200 p-4 rounded-md m-2">
        <div className="text-4xl font-bold">{timeLeft.minutes}</div>
        <div className="text-lg">Minutes</div>
      </div>
      <div className="bg-gray-200 p-4 rounded-md m-2">
        <div className="text-4xl font-bold">{timeLeft.seconds}</div>
        <div className="text-lg">Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
