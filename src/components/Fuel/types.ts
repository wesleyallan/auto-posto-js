/* eslint-disable @typescript-eslint/consistent-type-definitions */
// --- Interface ---
export interface IFuel {
  id: number;
  name: string;
  price: number;
}

export interface IFuelState extends IFuel {
  update: boolean;
}

export interface IFuelComponentProps {
  editMode: boolean;
  toggleEditMode: () => void;
}

// --- Type ---

export type TFuel = {
  id: number;
  name: string;
  price: number;
};

export type TFuelState = TFuel & {
  update: boolean;
};

export type TFuelComponentProps = {
  editMode: boolean;
  toggleEditMode: () => void;
};
