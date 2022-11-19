import { useEffect, useRef } from 'react';

import { createFountainElement } from './utils/createFountainElement';

import type { FountainProps } from './@types/Fountain.types';

export const useFountain = <T extends HTMLElement>({ particles, isDisabled, type = 'emoji' }: FountainProps) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current && particles) return createFountainElement(ref.current, particles, type, isDisabled);
  }, [particles, isDisabled, type]);

  return ref;
};
