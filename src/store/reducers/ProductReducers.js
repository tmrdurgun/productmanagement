import { generateId } from '../../utils';

const saveProduct = (state, product) => {
  const newProduct = {
    id: generateId(),
    ...product,
    createdAt: new Date()
  };

  return { ...state, productList: [...state.productList, newProduct] };
};

const removeProduct = (state, productId) => {
  const newproductList = state.productList.filter(product => product.id !== productId);

  return { ...state, productList: newproductList };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return saveProduct(state, action.product);
    case 'REMOVE_PRODUCT':
      return removeProduct(state, action.productId);
    default:
      return state;
  }
};