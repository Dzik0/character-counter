type ResultBox = {
  id: number;
  name: string;
  backgroundColor: string;
  backgroundPattern: string;
};

export const countBox: ResultBox[] = [
  {
    id: 1,
    name: 'Total Characters',
    backgroundColor: '#d3a0fa',
    backgroundPattern: `url('pattern-character-count.svg')`,
  },
  {
    id: 2,
    name: 'Word Count',
    backgroundColor: '#ff9f00',
    backgroundPattern: `url('pattern-word-count.svg')`,
  },
  {
    id: 3,
    name: 'Sentence Count',
    backgroundColor: '#fe8159',
    backgroundPattern: `url('pattern-sentence-count.svg')`,
  },
];
