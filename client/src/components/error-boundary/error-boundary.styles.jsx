import styled from 'styled-components';
import errorLogo from '../../assets/Astronaut.png';

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: url(${errorLogo});
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.div`
  font-size: 28px;
  font-family: 'Open Sans Condensed';
`;
