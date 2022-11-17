import { useLocation, useNavigate } from 'react-router-dom';

import type { NavigateOptions, To } from 'react-router-dom';

export const useNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const push = (path: To, options?: NavigateOptions) => {
    if (path === location.pathname) return;

    navigate(path, options);
  };

  return { goBack, push };
};
