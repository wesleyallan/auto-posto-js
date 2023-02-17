import styled from 'styled-components';
import { IoMdSettings, IoMdSave } from 'react-icons/io';

export const Container = styled.div`
  min-height: 100vh;
  background: #0f2027;
  background: -webkit-linear-gradient(0, #2c5364, #203a43, #0f2027);
  background: linear-gradient(0, #2c5364, #203a43, #0f2027);
`;

export const NavBar = styled.nav`
  background-color: ${(props) => props.theme.foreground};
`;

export const Title = styled.h1`
  padding: 1rem;
  color: ${(props) => props.theme.colorRed500};
  text-align: center;
  font-family: Roboto;
  font-weight: bold;
  font-size: 2.8rem;
`;

export const SettingsIcon = styled(IoMdSettings)`
  position: absolute;
  top: 1rem;
  right: 2rem;
  color: ${(props) => props.theme.colorRed500};
  font-size: 3.2rem;
  cursor: pointer;
  filter: brightness(0.87);
  &:hover {
    filter: brightness(1);
  }
  & section {
  }
`;

export const SaveIcon = styled(IoMdSave)`
  background-color: transparent;
  font-size: 3.2rem;
`;

export const Panel = styled.section`
  padding: 0.5rem 0.5rem;
  width: 30rem;
  height: 50rem;
  border-radius: 1rem;
  position: absolute;
  right: calc(50vw - 15rem);
  top: calc(50vh - 25rem);
  text-align: center;
  background-color: ${(props) => props.theme.foreground};
  box-shadow: 0 12rem 18rem rgba(0, 0, 0, 0.1), 0 9rem 15rem rgba(0, 0, 0, 0.05),
    0 1rem 1.5rem rgba(0, 0, 0, 55), 0 5rem 5rem rgba(0, 0, 0, 0.5),
    inset 0 -0.4rem 0.5rem rgba(0, 0, 0, 0.22),
    inset 0 0.6rem 0.4rem rgba(255, 255, 255, 0.03);
`;

export const Box = styled.div`
  width: 13.5rem;
  height: 6.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 0.5rem;
  box-shadow: 0 1rem 1.2rem rgba(0, 0, 0, 0.1),
    0 1.7rem 3rem rgba(0, 0, 0, 0.05), 0 0.4rem 0.7rem rgba(0, 0, 0, 0.55),
    inset 0 -0.4rem 0.5rem rgba(0, 0, 0, 0.13),
    inset 0 0.6rem 0.4rem rgba(255, 255, 255, 0.023);
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 1.5rem;
`;

export const FuelText = styled.span`
  color: ${(props) => props.theme.colorGray100};
  background-color: transparent;
  font-size: 1.5rem;
  font-weight: bold;
  padding-inline: 0.7rem;
`;

export const FuelPrice = styled.span`
  font-family: 'digital-7 mono', sans-serif;
  color: ${(props) => props.theme.colorYellow500};
  background-color: transparent;
  font-size: 3.5rem;
  font-weight: bold;
`;

export const InfoText = styled.span`
  color: ${(props) => props.theme.colorBlue200};
  font-size: 1.7rem;
`;

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colorWhite};
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 12rem 18rem rgba(0, 0, 0, 0.1), 0 9rem 15rem rgba(0, 0, 0, 0.05),
    0 1rem 1.5rem rgba(0, 0, 0, 0.7), 0 5rem 5rem rgba(0, 0, 0, 0.33),
    inset 0 -0.4rem 0.5rem rgba(0, 0, 0, 0.22),
    inset 0 0.6rem 0.4rem rgba(255, 255, 255, 0.03);
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  filter: brightness(0.87);
  &:hover {
    filter: brightness(1);
    box-shadow: 0 12rem 18rem rgba(0, 0, 0, 0.4),
      0 9rem 15rem rgba(0, 0, 0, 0.6), 0 1.3rem 1.6rem rgba(0, 0, 0, 55),
      0 5rem 5rem rgba(0, 0, 0, 0.5), inset 0 -0.4rem 0.5rem rgba(0, 0, 0, 0.22),
      inset 0 0.6rem 0.4rem rgba(255, 255, 255, 0.03);
  }
  & > span {
    margin-left: 0.5rem;
    background-color: transparent;
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
