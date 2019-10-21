import React from 'react';

interface IUpdateState {
  mustUpdate: string | null;
  shouldUpdate: string | null;
}

const updateDefaultState: IUpdateState = {
  mustUpdate: null,
  shouldUpdate: null,
};

const UpdateContext = React.createContext(updateDefaultState);

export { UpdateContext, updateDefaultState };
