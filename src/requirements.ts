type Req = {
  id: number;
  name: string;
  isActive: boolean;
};

export const requirements: Req[] = [
  { id: 1, name: 'Exclude Spaces', isActive: false },
  { id: 2, name: 'Set Character Limit', isActive: false },
];
