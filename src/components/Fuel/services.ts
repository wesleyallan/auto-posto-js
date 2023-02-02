import { Api } from '../../services/api';

export const getFuel = async () => {
  const request = await Api.get('fuels');

  return request.data;
};
