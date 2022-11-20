import { useNavigate } from 'react-router-dom';

import { Styles } from './Landing.styles';

import { local, mobile, social } from 'assets/icons';

import { routes } from 'configuration/routes';

import { Button } from 'ui/components/Button';
import { MainPoint } from './components/MainPoint/MainPoint';
import { WhyTwenti } from './components/WhyTwenti';

export const Landing = () => {
  const navigate = useNavigate();

  const redirect = () => navigate(routes.ACCESS_REQUEST);

  return (
    <>
      <Styles.Wrapper>
        <Styles.Cover>
          <Styles.Title>Twenti</Styles.Title>
          <h2>¿Qué es Tuenti?</h2>
          <p>
            Tuenti es una plataforma social privada, a la que se accede únicamente por invitación. Cada día la usan millones de personas para
            comunicarse entre ellas y compartir información.
          </p>
        </Styles.Cover>

        <Styles.MainPoints>
          <MainPoint description="Conéctate, comparte y comunícate con tus amigos, compañeros de trabajo y familia." icon={social} title="Social" />
          <MainPoint description="Descubre servicios locales y participa con las marcas que realmente te importan." icon={local} title="Local" />
          <MainPoint description="Accede a Tuenti desde tu móvil en tiempo real estés donde estés." icon={mobile} title="Móvil" />
        </Styles.MainPoints>
      </Styles.Wrapper>
      <Styles.ActionButtons>
        <WhyTwenti />
        <Button onClick={redirect}>Pide tú invitación</Button>
      </Styles.ActionButtons>
    </>
  );
};
