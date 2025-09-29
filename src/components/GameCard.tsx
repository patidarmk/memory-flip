import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface GameCardProps {
  value: string;
  flipped?: boolean;
  matched?: boolean;
  onClick: () => void;
  disabled: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ value, flipped = false, matched = false, onClick, disabled }) => {
  const isFlippedOrMatched = flipped || matched;

  return (
    <Card
      className={cn(
        'w-20 h-24 md:w-24 md:h-28 relative cursor-pointer transition-transform duration-300 hover:shadow-lg transform hover:scale-105',
        disabled && 'cursor-not-allowed opacity-50',
        isFlippedOrMatched ? 'rotate-y-180' : 'rotate-y-0'
      )}
      onClick={onClick}
    >
      <CardContent className="flex items-center justify-center w-full h-full p-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-lg backface-hidden">
        {isFlippedOrMatched && (
          <span className="text-2xl md:text-3xl font-bold text-center">{value}</span>
        )}
        {!isFlippedOrMatched && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg">
            <span className="text-white text-lg font-semibold">?</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GameCard;