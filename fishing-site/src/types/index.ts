export interface Bait {
  id: number;
  name: string;
  image: string;
  targetFish: string[];
  description: string;
}

export interface GearItem {
  id: number;
  name: string;
  image: string;
  description: string;
  category: 'rod' | 'reel-spin' | 'reel-bait' | 'line';
}

export interface Fish {
  id: number;
  name: string;
  image: string;
  habitat: 'freshwater' | 'saltwater';
  tips: string[];
}
