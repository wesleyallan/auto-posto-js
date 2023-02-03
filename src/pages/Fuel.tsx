import React, { useState } from 'react';
import { FuelComponent } from '../components/Fuel';

export const FuelPage = () => {
  const [editMode, setEditMode] = useState<boolean>(false);

  function toggleEditMode(): void {
    setEditMode((prev): boolean => !prev);
  }

  return <FuelComponent editMode={editMode} toggleEditMode={toggleEditMode} />;
};
