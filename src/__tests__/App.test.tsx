import { render, screen } from '@testing-library/react';

import App from '../App';

describe('App component', () => {
  it('should render sample text', () => {
    render(<App />);
    expect(screen.getByText('Some sample text for vitest')).toBeDefined();
  });
});
