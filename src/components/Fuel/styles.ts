import styled from 'styled-components';
import imageGasStation from '../../assets/gas-station-white.jpg';

export const Container = styled.div`
  height: 100vh;
  background: url(${imageGasStation});
  background-size: 65%;
  background-position: left;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  padding: 10px;
  color: ${(props) => props.theme.colorBlue200};
  text-align: center;
  font-family: Roboto;
  font-weight: bold;
  font-size: 28px;
`;
