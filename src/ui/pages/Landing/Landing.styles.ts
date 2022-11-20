import styled from 'styled-components';

const Cover = styled('div')`
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  @media screen and (min-width: 768px) {
    border-right: 1px solid #4d79a2;
    float: left;
    height: 200px;
    padding: 32px 50px 30px 0;
    text-align: right;
    width: 315px;
  }
`;

const MainPoints = styled('ul')`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    border-left: 1px solid #6590b7;
    float: left;
    height: 200px;
    padding: 30px 0 30px 45px;
    width: 315px;
  }
`;

const ActionButtons = styled('div')`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 1rem 0;
`;

const Wrapper = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    display: block;
    flex-direction: row;
    width: 730px;
    height: 260px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -130px 0 0 -370px;
    z-index: 0;
  }
`;

const Title = styled('h1')`
  display: none;

  @media screen and (min-width: 768px) {
    background: url(https://web.archive.org/web/20111020184544im_/http://estaticosak1.tuenti.com/layout/web2-Zero/images/login/1_login.51985.png)
      no-repeat;
    display: block;
    float: right;
    height: 69px;
    margin: 0 0 35px 0;
    text-align: left;
    text-indent: -10000px;
    width: 273px;
  }
`;

export const Styles = { ActionButtons, Cover, MainPoints, Wrapper, Title };
