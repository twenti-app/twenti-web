import type { ReactNode } from 'react';

export type AnimationStatus = 'enter' | 'leave';

export interface ModalProps {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
}
