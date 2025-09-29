import * as React from 'react';
import { useTheme } from '../hooks/useTheme';
import GameCard from './GameCard';
import Timer from './Timer';
import ScoreDisplay from './ScoreDisplay';
import { Card as GameCardType, themes, ThemeKey } from '@/data/themes';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const GameBoard: React.FC = () => {
  const [cards, setCards] = React.useState<GameCardType[]>([]);
  const [flippedCards, setFlippedCards] = React.useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = React.useState(0);
  const [moves, setMoves] = React.useState(0);
  const [gameWon, setGameWon] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  const totalPairs = 8;

  React.useEffect(() => {
    startNewGame();
  }, [theme]);

  const startNewGame = () => {
    const shuffledCards = [...themes[theme as ThemeKey]].sort(() => Math.random() - 0.5);
    setCards(shuffledCards.map(card => ({ ...card, flipped: false, matched: false })));
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setGameWon(false);
    setDisabled(false);
  };

  const handleCardClick = (index: number) => {
    if (disabled || cards[index].flipped || cards[index].matched) return;

    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);
    setCards(prev => prev.map((card, i) => i === index ? { ...card, flipped: true } : card));
    setMoves(prev => prev + 1);

    if (newFlipped.length === 2) {
      setDisabled(true);
      const [first, second] = newFlipped;
      if (cards[first].id === cards[second].id) {
        setCards(prev => prev.map((card, i) =>
          i === first || i === second ? { ...card, matched: true } : card
        ));
        setMatchedPairs(prev => prev + 1);
        if (matchedPairs + 1 === totalPairs) {
          setGameWon(true);
          const time = document.getElementById('timer')?.textContent || '0';
          const score = calculateScore(moves + 1, parseInt(time));
          saveScore(theme, score, moves + 1, parseInt(time));
          toast({ title: 'Congratulations!', description: `You won in ${moves + 1} moves and ${time}s! Score: ${score}` });
        }
        setFlippedCards([]);
        setDisabled(false);
      } else {
        setTimeout(() => {
          setCards(prev => prev.map((card, i) =>
            newFlipped.includes(i) ? { ...card, flipped: false } : card
          ));
          setFlippedCards([]);
          setDisabled(false);
        }, 1000);
      }
    }
  };

  const calculateScore = (moves: number, time: number) => {
    return Math.max(0, 1000 - (moves * 10 + time * 5));
  };

  const saveScore = (theme: ThemeKey, score: number, moves: number, time: number) => {
    const scores = JSON.parse(localStorage.getItem('memomatch-scores') || '[]');
    scores.push({ theme, score, moves, time, date: new Date().toISOString() });
    scores.sort((a: any, b: any) => b.score - a.score);
    localStorage.setItem('memomatch-scores', JSON.stringify(scores.slice(0, 10))); // Top 10
  };

  return (
    <div className="grid grid-cols-4 gap-4 md:grid-cols-4 p-4 max-w-4xl mx-auto">
      <div className="col-span-4 flex justify-between items-center mb-6">
        <ScoreDisplay moves={moves} matchedPairs={matchedPairs} totalPairs={totalPairs} />
        <Timer gameWon={gameWon} />
        <Button onClick={startNewGame} variant="outline">New Game</Button>
      </div>
      {cards.map((card, index) => (
        <GameCard
          key={index}
          value={card.value}
          flipped={card.flipped ?? false}
          matched={card.matched ?? false}
          onClick={() => handleCardClick(index)}
          disabled={disabled}
        />
      ))}
      {gameWon && (
        <div className="col-span-4 text-center mt-4">
          <h2 className="text-2xl font-bold text-green-600">You Won!</h2>
          <Button onClick={startNewGame}>Play Again</Button>
        </div>
      )}
    </div>
  );
};

export default GameBoard;