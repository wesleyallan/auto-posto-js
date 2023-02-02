import React, { useEffect, useState } from 'react';
import { getFuel } from './services';
import type { IFuel } from './types';
import {
  Title,
  Container,
  SettingsIcon,
  Panel,
  Box,
  Row,
  FuelText,
  FuelPrice,
} from './styles';

export const FuelComponent = () => {
  const [fuels, setFuels] = useState<IFuel[]>();

  async function FetchAndUpdateData() {
    try {
      const data = await getFuel();
      setFuels(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    FetchAndUpdateData();
  }, []);

  return (
    <div>
      <Container>
        <Title>Auto Posto JS</Title>
        <SettingsIcon />
        <Panel>
          {fuels?.map((fuel) => (
            <Row key={fuel.id}>
              <Box>
                <FuelText>{fuel.name}</FuelText>
              </Box>
              <Box>
                <FuelPrice>{fuel.price.toFixed(2)}</FuelPrice>
              </Box>
            </Row>
          ))}
        </Panel>
      </Container>
    </div>
  );
};
