import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ThemeKey } from '@/data/themes';

interface Score {
  theme: ThemeKey;
  score: number;
  moves: number;
  time: number;
  date: string;
}

const Leaderboard: React.FC = () => {
  const [scores, setScores] = React.useState<Score[]>([]);

  React.useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('memomatch-scores') || '[]');
    setScores(saved);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Top Scores</h2>
      {scores.length === 0 ? (
        <p className="text-gray-500">No scores yet. Play the game to compete!</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead>
              <TableHead>Theme</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Moves</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scores.map((score, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{score.theme}</Badge>
                </TableCell>
                <TableCell className="font-medium">{score.score}</TableCell>
                <TableCell>{score.moves}</TableCell>
                <TableCell>{score.time}s</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default Leaderboard;