import { Styles } from './SignUp.styles';

export const SignUp = () => {
  return (
    <div>
      <Styles.Cover>
        {/* <Styles.Title>Tuenti, tu entidad</Styles.Title> */}
        <h2>¿Qué es Tuenti?</h2>
        <p>
          Tuenti es una plataforma social privada, a la que se accede únicamente por invitación. Cada día la usan millones de personas para
          comunicarse entre ellas y compartir información.
        </p>
      </Styles.Cover>
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
  );
};
