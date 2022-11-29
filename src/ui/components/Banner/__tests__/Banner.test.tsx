import { render, screen } from '@testing-library/react';

import { Banner } from '../Banner';

describe('Banner tests', () => {
  const text = 'Sample text';

  it('should render sample text', () => {
    render(<Banner text={text} />);
    expect(screen.getByText(text)).toBeDefined();
  });
});
