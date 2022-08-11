const saveProducts = (state, products) => {
  return {
    ...state,
    productList: products
  };
};

const removeProduct = (state, productId) => {
  const newproductList = state.productList.filter(product => product.id !== productId);

  return { ...state, productList: newproductList };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_PRODUCTS':
      return saveProducts(state, action.products);
    case 'REMOVE_PRODUCT':
      return removeProduct(state, action.productId);
    default:
      return state;
  }
};