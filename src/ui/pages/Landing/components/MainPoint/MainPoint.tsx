import { Styles } from './MainPoint.styles';

interface MainPointProps {
  description: string;
  icon: string;
  title: string;
}

export const MainPoint = ({ description, icon, title }: MainPointProps) => {
  return (
    <Styles.Wrapper>
      <Styles.Icon alt="" src={icon} />
      <Styles.Point>
        <h3>{title}</h3>
        <p>{description}</p>
      </Styles.Point>
    </Styles.Wrapper>
  );
};
