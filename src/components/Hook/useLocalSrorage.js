import React, { useEffect, useState } from 'react';
import { load, save } from '../Utils/localStorage';

export const useLocalSrorage = (key, initialState) => {
  const [state, setState] = useState(() => load(key) ?? initialState);

  useEffect(() => {
    save(key, state);
  }, [key, state]);

  return [state, setState];
};
