import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { describe, it } from 'vitest';

import { AccessRequest } from '../AccessRequest';

describe('Access Request page', () => {
  it('should render Access request component', () => {
    render(
      <Router>
        <AccessRequest />
      </Router>
    );
  });

  // it('should have logo', () => {
  //   render(<AccessRequest />);

  //   screen.debug();
  //   const logo = screen.getByRole('img');

  //   expect(logo).toBeDefined();
  // });
});
