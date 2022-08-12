const saveProducts = (state, products) => {
  return {
    ...state,
    productList: products
  };
};

const removeProduct = (state, productId) => {
  return { ...state, productList: state.productList.filter(product => product.id !== productId) };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_PRODUCTS':
      return saveProducts(state, action.products);
    case 'REMOVE_PRODUCT':
      console.log('REMOVE_PRODUCT');
      return removeProduct(state, action.productId);
    default:
      return state;
  }
};