
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  initialMinutes: number;
  onComplete?: () => void;
}

const CountdownTimer = ({ initialMinutes, onComplete }: CountdownTimerProps) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds, onComplete]);

  return (
    <div className="flex items-center justify-center bg-red-100 text-red-600 p-3 rounded-lg font-bold animate-pulse">
      <Clock className="mr-2" />
      <div>
        Oferta expira em: <span className="text-xl">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
