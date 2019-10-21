import React, { useState, useEffect } from 'react';
import { UpdateContext, updateDefaultState } from './context';

const UpdateProvider: React.SFC = ({ children }) => {
  const [state, setstate] = useState(updateDefaultState);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'http://www.mocky.io/v2/5dadd66a2d0000e0f5e4bd4c',
      );
      const data = await response.json();
      setstate({
        mustUpdate: data.must_update,
        shouldUpdate: data.should_update,
      });
    };

    fetchData();
  }, []);

  return (
    <UpdateContext.Provider value={state}>{children}</UpdateContext.Provider>
  );
};

export { UpdateProvider };
