export type FountainType = 'image' | 'emoji' | 'sticker';

export interface FountainProps {
  isDisabled?: boolean;
  particles: string | string[];
  type?: FountainType;
}

export interface Particle {
  direction: number;
  element: HTMLElement;
  left: number;
  size: number;
  speedHorz: number;
  speedUp: number;
  spinSpeed: number;
  spinVal: number;
  top: number;
}
