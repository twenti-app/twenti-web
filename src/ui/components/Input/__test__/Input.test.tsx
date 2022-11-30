import { render } from '@testing-library/react';

import { describe, it } from 'vitest';

import { Input } from '../Input';

describe('Input Component', () => {
  it('should render Input Component', () => {
    render(<Input />);
  });
});
