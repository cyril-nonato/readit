import styled from 'styled-components';
import theme from '../../utils/theme';

export const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Loading = styled.div`
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(${theme.colors.blackRGB}, .1);
  border-right: 1.1em solid rgba(${theme.colors.blackRGB}, .1);
  border-bottom: 1.1em solid rgba(${theme.colors.blackRGB}, .1);
  border-left: 1.1em solid ${theme.colors.black};
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;

  &,
  &::after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

`