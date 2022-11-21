import { Styles } from './Characteristic.styles';

import type { CharacteristicProps } from './@types/Characteristic.types';

export const Characteristic = ({ description, icon, title }: CharacteristicProps) => (
  <Styles.Wrapper>
    <Styles.Icon alt="" src={icon} />
    <Styles.Characteristic>
      <h3>{title}</h3>
      <p>{description}</p>
    </Styles.Characteristic>
  </Styles.Wrapper>
);
