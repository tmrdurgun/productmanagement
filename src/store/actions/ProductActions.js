export const saveProducts = (products, dispatch) => {
  dispatch({
    type: 'SAVE_PRODUCTS',
    products,
  });
};

export const removeProduct = (productId, dispatch) => {
  dispatch({
    type: 'REMOVE_PRODUCT',
    productId,
  });
};