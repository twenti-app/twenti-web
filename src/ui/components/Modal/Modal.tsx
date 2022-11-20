import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { Styles } from './Modal.styles';

import type { AnimationStatus, ModalProps } from './@types/Modal.types';
import type { RefObject } from 'react';

const modalsPortal = document.getElementById('modals') as HTMLElement;

export const Modal = ({ children, isVisible, onClose }: ModalProps) => {
  const [animationStatus, setAnimationStatus] = useState<AnimationStatus>('leave');
  const [isDialogMounted, setIsDialogMounted] = useState(false);

  const modalRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    isVisible ? onEnter() : onLeave();
  }, [isVisible]);

  const onAnimationEnd = () => (animationStatus === 'leave' ? setIsDialogMounted(false) : null);

  const onEnter = () => {
    setIsDialogMounted(true);
    setAnimationStatus('enter');
  };

  const onLeave = () => setAnimationStatus('leave');

  const renderModal = () => (
    <Styles.Container animationStatus={animationStatus} onAnimationEnd={onAnimationEnd} ref={modalRef} tabIndex={-1}>
      <Styles.Mask onClick={onClose} />
      <Styles.Dialog animationStatus={animationStatus} aria-modal={true} role="dialog">
        <Styles.CloseButton onClick={onClose}>x</Styles.CloseButton>
        {children}
      </Styles.Dialog>
    </Styles.Container>
  );

  return createPortal(isDialogMounted ? renderModal() : null, modalsPortal);
};
