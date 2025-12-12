export type Question = {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
};

const QUESTIONS: Question[] = [
  { id: 1, text: 'What sound does a cat make?', options: ['Bhau-Bhau', 'Meow-Meow', 'Oink-Oink', 'Moo-Moo'], correctIndex: 1 },
  { id: 2, text: 'What would you probably find in your fridge?', options: ['Shoes', 'Ice Cream', 'Books', 'Umbrella'], correctIndex: 1 },
  { id: 3, text: 'What color are bananas?', options: ['Blue', 'Yellow', 'Red', 'Green'], correctIndex: 1 },
  { id: 4, text: 'How many stars are in the sky?', options: ['Two', 'Infinite', 'One Hundred', 'None'], correctIndex: 1 },
];

export default QUESTIONS;
