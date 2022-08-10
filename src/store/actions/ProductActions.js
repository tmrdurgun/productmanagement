export const addProduct = (product, dispatch) => {
  dispatch({
    type: 'ADD_PRODUCT',
    product,
  });
};

export const removeProduct = (productId, dispatch) => {
  dispatch({
    type: 'REMOVE_PRODUCT',
    productId,
  });
};