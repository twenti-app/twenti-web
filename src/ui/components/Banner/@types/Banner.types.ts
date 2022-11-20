export type BannerType = 'error' | 'info' | 'success' | 'warning';

export interface BannerProps {
  text: string;
  type?: BannerType;
}
