import { useState } from 'react';

import { LoadingBtn } from './LoadingButton.styles';

export const LoadingButton = () => {
  const [loadingStatus, setLoadingStatus] = useState<'idle' | 'success' | 'pending'>('idle');

  const toggleLoading = () => {
    setLoadingStatus('pending');

    setTimeout(function () {
      setLoadingStatus('success');
    }, 2000);
  };

  const getClassName = () => {
    switch (loadingStatus) {
      case 'idle':
        return '';

      case 'pending':
        return 'act-loading';

      case 'success':
        return 'act-success';

      default:
        break;
    }
  };

  return (
    <LoadingBtn className={`action ${getClassName()}`} href="#" id="success" onClick={toggleLoading}>
      <i className="act-indicator i-M-loader" />
      <i className="act-indicator i-accept" />
      <i className="act-indicator i-ignore" />
      <span>
        <b>Pide tú invitación</b>
      </span>
    </LoadingBtn>
  );
};
