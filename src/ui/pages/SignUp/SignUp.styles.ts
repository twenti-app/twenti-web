import styled from 'styled-components';

const Title = styled('h1')`
  width: 273px;
  height: 69px;
  background: url(https://web.archive.org/web/20111020184544im_/http://estaticosak1.tuenti.com/layout/web2-Zero/images/login/1_login.51985.png)
    no-repeat;
  display: block;
  text-indent: -10000px;
  text-align: left;
  float: right;
  margin: 0 0 35px 0;
`;

const Cover = styled('div')`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

const MainPoints = styled('div')`
  margin: 1rem 0;
  /* border-top: 1px solid #6590b7; */
  float: left;
  height: 200px;
  padding: 30px 0 30px 45px;
  width: 315px;

  ul {
    list-style: none;

    li {
      background: url(https://web.archive.org/web/20111020184544im_/http://estaticosak1.tuenti.com/layout/web2-Zero/images/login/1_login.51985.png)
        no-repeat;
      margin: 0 0 25px 0;
      padding-left: 60px;

      &.social {
        background-position: -339px 5px;
      }

      &.local {
        background-position: -339px -94px;
      }

      &.movil {
        background-position: -339px -199px;
      }
    }
  }
`;

export const Styles = { Cover, Title, MainPoints };
