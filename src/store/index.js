import React, { createContext, useReducer } from 'react';

import { reducer } from './reducers';

import { ProductTypes } from '../common/enums/ProductEnum';

const initialState = {
  productList: [
    {
      id: 1,
      name: 'PRODUCT 1',
      barcode: '123343945889123',
      type: ProductTypes.standart,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro adipisci accusantium possimus maiores sapiente rerum, error facilis velit, voluptate odio ipsa iusto debitis magni consequuntur in illo, quia ea quaerat!',
      createdAt: '10 May 2022, 10:00'
    },
    {
      id: 2,
      name: 'PRODUCT 2',
      barcode: '123343935889123',
      type: ProductTypes.standart,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro adipisci accusantium possimus maiores sapiente rerum, error facilis velit, voluptate odio ipsa iusto debitis magni consequuntur in illo, quia ea quaerat!',
      createdAt: '10 May 2022, 10:00'
    },
    {
      id: 3,
      name: 'PRODUCT 3',
      barcode: '123343945889123',
      type: ProductTypes.standart,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro adipisci accusantium possimus maiores sapiente rerum, error facilis velit, voluptate odio ipsa iusto debitis magni consequuntur in illo, quia ea quaerat!',
      createdAt: '10 May 2022, 10:00'
    }
  ],
};

export const Store = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};