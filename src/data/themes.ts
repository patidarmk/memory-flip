export interface Card {
  id: number;
  value: string; // Emoji or number string
  matched?: boolean;
  flipped?: boolean;
}

export const themes = {
  fruits: [
    { id: 1, value: '🍎' }, // Apple
    { id: 1, value: '🍎' },
    { id: 2, value: '🍌' }, // Banana
    { id: 2, value: '🍌' },
    { id: 3, value: '🍊' }, // Orange
    { id: 3, value: '🍊' },
    { id: 4, value: '🍇' }, // Grapes
    { id: 4, value: '🍇' },
    { id: 5, value: '🍓' }, // Strawberry
    { id: 5, value: '🍓' },
    { id: 6, value: '🍍' }, // Pineapple
    { id: 6, value: '🍍' },
    { id: 7, value: '🥝' }, // Kiwi
    { id: 7, value: '🥝' },
    { id: 8, value: '🍑' }, // Peach
    { id: 8, value: '🍑' },
  ],
  emojis: [
    { id: 1, value: '😀' },
    { id: 1, value: '😀' },
    { id: 2, value: '😂' },
    { id: 2, value: '😂' },
    { id: 3, value: '🤔' },
    { id: 3, value: '🤔' },
    { id: 4, value: '👍' },
    { id: 4, value: '👍' },
    { id: 5, value: '❤️' },
    { id: 5, value: '❤️' },
    { id: 6, value: '🔥' },
    { id: 6, value: '🔥' },
    { id: 7, value: '⭐' },
    { id: 7, value: '⭐' },
    { id: 8, value: '🚀' },
    { id: 8, value: '🚀' },
  ],
  numbers: [
    { id: 1, value: '1' },
    { id: 1, value: '1' },
    { id: 2, value: '2' },
    { id: 2, value: '2' },
    { id: 3, value: '3' },
    { id: 3, value: '3' },
    { id: 4, value: '4' },
    { id: 4, value: '4' },
    { id: 5, value: '5' },
    { id: 5, value: '5' },
    { id: 6, value: '6' },
    { id: 6, value: '6' },
    { id: 7, value: '7' },
    { id: 7, value: '7' },
    { id: 8, value: '8' },
    { id: 8, value: '8' },
  ],
} as const;

export type ThemeKey = keyof typeof themes;