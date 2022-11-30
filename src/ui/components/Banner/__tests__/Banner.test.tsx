import { render, screen } from '@testing-library/react';

import { Banner } from '../Banner';

describe('Banner tests', () => {
  const text = 'Sample text';

  it('should render Banner component', () => {
    render(<Banner text="" />);
  });

  it('should render sample text', () => {
    render(<Banner text={text} />);
    expect(screen.getByText(text)).toBeDefined();
  });

  it('should apply text align', () => {
    render(<Banner text={text} textAlign="center" />);

    const expectedStyles = /text-align: center/;
    const bannerStyles = screen.getByText(text).style.cssText;

    expect(bannerStyles).toMatch(expectedStyles);
  });
});
