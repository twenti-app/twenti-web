import { Fragment, useState } from 'react';

import { Button } from 'ui/components/Button';
import { Modal } from 'ui/components/Modal';

export const WhyTwenti = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <Button appearance="light" onClick={() => setIsOpen(true)}>
        ¿Por qué twenti?
      </Button>
      <Modal isVisible={isOpen} onClose={() => setIsOpen(false)}>
        <video autoPlay controls loop muted src="https://tuenti-static-files.s3-eu-west-1.amazonaws.com/landing/landing-2021/landing-2021.mp4">
          <source src="https://www.tuenti.com/static/video/que-es-tuenti.mp4" type="video/mp4" />
        </video>
      </Modal>
    </Fragment>
  );
};
