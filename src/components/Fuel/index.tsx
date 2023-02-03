import React, { useEffect, useState } from 'react';
import { getFuel, updateFuel } from './services';
import type { IFuelComponentProps, IFuelState } from './types';
import { MdEdit } from 'react-icons/md';
import {
  Title,
  Container,
  SettingsIcon,
  SaveIcon,
  Panel,
  Box,
  Row,
  FuelText,
  FuelPrice,
  FuelInput,
  InfoText,
  SaveButton,
} from './styles';

export const FuelComponent = ({
  editMode,
  toggleEditMode,
}: IFuelComponentProps) => {
  const [fuels, setFuels] = useState<IFuelState[]>();

  async function fetchAndUpdateData() {
    try {
      const data = await getFuel();
      setFuels(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    void fetchAndUpdateData();
  }, []);

  function onUpdatePrice(id: number, price: string): void {
    const updatedFuels = fuels?.map((fuel) => {
      if (fuel.id === id) {
        fuel.price = Number(price);
        fuel.update = true;
      }
      return fuel;
    });

    setFuels(updatedFuels);
  }

  async function onSave() {
    try {
      // (fuel) => fuel.update === true - Burrice pois já ira retornar um boolean.
      const changed = fuels?.filter((fuel) => fuel.update);

      // (!changed) --> (![]) - Truthy  --- Sempre false, nunca executaria ---
      if (changed == null || changed.length === 0) {
        toggleEditMode();
        return;
      }

      for (const changedFuel of changed) {
        const { update, ...rest } = changedFuel;
        await updateFuel(rest);
      }

      void fetchAndUpdateData();
      toggleEditMode();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Container>
        <Title>Auto Posto JS</Title>
        <SettingsIcon onClick={toggleEditMode} />
        <Panel>
          {editMode && (
            <Row>
              <InfoText>
                <MdEdit />
                Altere o preço do item e salve
              </InfoText>
            </Row>
          )}
          {fuels?.map((fuel) => (
            <Row key={fuel.id}>
              <Box>
                <FuelText>{fuel.name}</FuelText>
              </Box>
              <Box>
                {editMode ? (
                  <FuelInput
                    type="number"
                    value={fuel.price}
                    onChange={(ev) => {
                      onUpdatePrice(fuel.id, ev.target.value);
                    }}
                  />
                ) : (
                  <FuelPrice>{fuel.price}</FuelPrice>
                )}
              </Box>
            </Row>
          ))}
          {editMode && (
            <Row>
              <SaveButton onClick={onSave}>
                <SaveIcon />
                <span>Salvar</span>
              </SaveButton>
            </Row>
          )}
        </Panel>
      </Container>
    </div>
  );
};
