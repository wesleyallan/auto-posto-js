import styled from 'styled-components';
import imageGasStation from '../../assets/gas-station-white.jpg';
import { IoMdSettings, IoMdSave } from 'react-icons/io';

export const Container = styled.div`
  max-height: 100vh;
  background: url(${imageGasStation});
  background-size: 65%;
  background-position: left;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  padding: 10px;
  color: ${(props) => props.theme.colorPurple500};
  text-align: center;
  font-family: Roboto;
  font-weight: bold;
  font-size: 28px;
`;

export const SettingsIcon = styled(IoMdSettings)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${(props) => props.theme.colorRed500};
  font-size: 32px;
  cursor: pointer;
  filter: brightness(0.87);
  &:hover {
    filter: brightness(1);
  }
`;

export const SaveIcon = styled(IoMdSave)`
  font-size: 32px;
`;

export const Panel = styled.section`
  width: 300px;
  height: 500px;
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 5px 5px 15px ${(props) => props.theme.colorGray500};
  border-radius: 5px;
  position: relative;
  left: calc(100vw - 400px);
  margin: 60px;
  text-align: center;
`;

export const Box = styled.div`
  width: 135px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colorPurple500};
  border-radius: 5px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
`;

export const FuelText = styled.span`
  color: ${(props) => props.theme.colorGray100};
  font-size: 1.5rem;
  font-weight: bold;
`;

export const FuelPrice = styled.span`
  font-family: 'digital-7 mono', sans-serif;
  color: ${(props) => props.theme.colorYellow500};
  font-size: 3.5rem;
  font-weight: bold;
`;

export const InfoText = styled.span`
  color: ${(props) => props.theme.colorBlue200};
  font-size: 1.2rem;
`;

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colorPurple500};
  border: none;
  color: ${(props) => props.theme.colorWhite};
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  filter: brightness(0.87);
  &:hover {
    filter: brightness(1);
  }
  & > span {
    margin-left: 5px;
  }
`;

export const FuelInput = styled.input`
  font-family: 'digital-7 mono', sans-serif;
  color: ${(props) => props.theme.colorYellow500};
  font-size: 3.5rem;
  background: none;
  border: none;
  width: 100%;
  text-align: center;
  padding: 0;
  outline: none;
`;
