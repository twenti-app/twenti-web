import { useState } from 'react';

import { Styles } from './SignUp.styles';

import { Button } from 'ui/components/Button';
import { LoadingButton } from 'ui/components/LoadingButton/LoadingButton';
import { Modal } from 'ui/components/Modal';

export const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <Styles.Cover>
          {/* <Styles.Title>Tuenti, tu entidad</Styles.Title> */}
          <h2>¿Qué es Tuenti?</h2>
          <p>
            Tuenti es una plataforma social privada, a la que se accede únicamente por invitación. Cada día la usan millones de personas para
            comunicarse entre ellas y compartir información.
          </p>
        </Styles.Cover>
        <LoadingButton />
        <Button appearance="light" onClick={() => setIsOpen(true)}>
          ¿Por qué twenti?
        </Button>
        <Styles.MainPoints>
          <ul>
            <li className="social">
              <h3>Social</h3>
              <p>Conéctate, comparte y comunícate con tus amigos, compañeros de trabajo y familia.</p>
            </li>
            <li className="local">
              <h3>Local</h3>
              <p>Descubre servicios locales y participa con las marcas que realmente te importan.</p>
            </li>
            <li className="movil">
              <h3>Móvil</h3>
              <p>Accede a Tuenti desde tu móvil en tiempo real estés donde estés.</p>
            </li>
          </ul>
        </Styles.MainPoints>
      </div>
      <Modal isVisible={isOpen} onClose={() => setIsOpen(false)}>
        <video autoPlay controls loop muted src="https://tuenti-static-files.s3-eu-west-1.amazonaws.com/landing/landing-2021/landing-2021.mp4">
          <source src="https://www.tuenti.com/static/video/que-es-tuenti.mp4" type="video/mp4" />
        </video>
      </Modal>
    </>
  );
};
