import type { CSSProperties } from 'react';

export type BannerType = 'error' | 'info' | 'success' | 'warning';

export interface BannerProps {
  text: string;
  textAlign?: CSSProperties['textAlign'];
  type?: BannerType;
}
