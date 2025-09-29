import * as React from 'react';
import { Badge } from '@/components/ui/badge';

interface TimerProps {
  gameWon: boolean;
}

const Timer: React.FC<TimerProps> = ({ gameWon }) => {
  const [time, setTime] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (isRunning && !gameWon) {
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    } else if (gameWon) {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, gameWon]);

  React.useEffect(() => {
    if (time > 0) setIsRunning(true);
  }, [time]);

  return (
    <Badge id="timer" variant="secondary" className="text-lg">
      Time: {time}s
    </Badge>
  );
};

export default Timer;