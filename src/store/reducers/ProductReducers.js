const saveProduct = (state, product) => {
  const newProduct = {
    id: state.productList.length > 0 ? state.productList[state.productList.length - 1].id + 1 : 1,
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