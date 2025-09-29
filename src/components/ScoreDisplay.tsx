import * as React from 'react';
import { Badge } from '@/components/ui/badge';

interface ScoreDisplayProps {
  moves: number;
  matchedPairs: number;
  totalPairs: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ moves, matchedPairs, totalPairs }) => {
  return (
    <div className="flex space-x-4">
      <Badge variant="default" className="text-lg">Moves: {moves}</Badge>
      <Badge variant="outline" className="text-lg">Matches: {matchedPairs}/{totalPairs}</Badge>
    </div>
  );
};

export default ScoreDisplay;