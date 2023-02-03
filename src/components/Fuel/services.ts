import { Api } from '../../services/api';
import type { IFuel } from './types';

export const getFuel = async () => {
  const request = await Api.get('fuels');

  return request.data;
};

export const updateFuel = async (fuel: IFuel) => {
  const request = await Api.put(`fuels/${fuel.id}`, fuel);

  return request.data;
};
