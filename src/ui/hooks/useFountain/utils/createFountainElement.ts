import type { FountainType, Particle } from 'ui/hooks/useFountain';

import { getContainer } from './getContainer';

let instanceCounter = 0;

const getElement = (type: FountainType, image: string, size: number) => {
  switch (type) {
    case 'emoji':
      return image;

    case 'image':
      return `<img src="${image}" width="${size}" height="${size}" style="border-radius: 25%">`;

    case 'sticker':
      return '';

    default:
      throw Error('Invalid fountain type');
  }
};

export function createFountainElement(element: HTMLElement, imageUrl: string | string[], type: FountainType, disabled?: boolean) {
  instanceCounter++;

  const sizes = [15, 20, 25, 35, 45];
  const limit = 35;

  let particles: Particle[] = [];
  let autoAddParticle = false;
  let mouseX = 0;
  let mouseY = 0;

  const container = getContainer();

  function createParticle() {
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    const speedHorz = Math.random() * 10;
    const speedUp = Math.random() * 25;
    const spinVal = Math.random() * 360;
    const spinSpeed = Math.random() * 35 * (Math.random() <= 0.5 ? -1 : 1);
    const top = mouseY - size / 2;
    const left = mouseX - size / 2;
    const direction = Math.random() <= 0.5 ? -1 : 1;

    const particle = document.createElement('div');
    const image = Array.isArray(imageUrl) ? imageUrl[Math.floor(Math.random() * imageUrl.length)] : imageUrl;

    particle.innerHTML = getElement(type, image, size);
    particle.setAttribute(
      'style',
      ['position:absolute', 'font-size:200px', 'will-change:transform', `top:${top}px`, `left:${left}px`, `transform:rotate(${spinVal}deg)`].join(';')
    );

    container.appendChild(particle);

    particles.push({ direction, element: particle, left, size, speedHorz, speedUp, spinSpeed, spinVal, top });
  }

  function updateParticles() {
    particles.forEach(p => {
      p.left = p.left - p.speedHorz * p.direction;
      p.top = p.top - p.speedUp;
      p.speedUp = Math.min(p.size, p.speedUp - 1);
      p.spinVal = p.spinVal + p.spinSpeed;

      if (p.top >= Math.max(window.innerHeight, document.body.clientHeight) + p.size) {
        particles = particles.filter(o => o !== p);
        p.element.remove();
      }

      p.element.setAttribute(
        'style',
        [
          'position:absolute',
          `font-size:${p.size}px`,
          'will-change:transform',
          `top:${p.top}px`,
          `left:${p.left}px`,
          `transform:rotate(${p.spinVal}deg)`
        ].join(';')
      );
    });
  }

  let animationFrame: number | undefined;

  function loop() {
    if (autoAddParticle && particles.length < limit) createParticle();

    updateParticles();
    animationFrame = requestAnimationFrame(loop);
  }

  loop();

  const isTouchInteraction = 'ontouchstart' in window || navigator.maxTouchPoints;

  const tap = isTouchInteraction ? 'touchstart' : 'mousedown';
  const tapEnd = isTouchInteraction ? 'touchend' : 'mouseup';
  const move = isTouchInteraction ? 'touchmove' : 'mousemove';

  const updateMousePosition = (event: MouseEvent | TouchEvent) => {
    if ('touches' in event) {
      mouseX = event.touches?.[0].clientX;
      mouseY = event.touches?.[0].clientY;
    } else {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }
  };

  const tapHandler = (event: MouseEvent | TouchEvent) => {
    if (disabled) return;

    updateMousePosition(event);
    autoAddParticle = true;
  };

  const disableAutoAddParticle = () => (autoAddParticle = false);

  element.addEventListener(move, updateMousePosition, { passive: true });
  element.addEventListener(tap, tapHandler, { passive: true });
  element.addEventListener(tapEnd, disableAutoAddParticle, { passive: true });
  element.addEventListener('mouseleave', disableAutoAddParticle, { passive: true });

  return () => {
    element.removeEventListener(move, updateMousePosition);
    element.removeEventListener(tap, tapHandler);
    element.removeEventListener(tapEnd, disableAutoAddParticle);
    element.removeEventListener('mouseleave', disableAutoAddParticle);

    const interval = setInterval(() => {
      if (animationFrame && particles.length === 0) {
        cancelAnimationFrame(animationFrame);
        clearInterval(interval);

        if (--instanceCounter === 0) container.remove();
      }
    }, 500);
  };
}
