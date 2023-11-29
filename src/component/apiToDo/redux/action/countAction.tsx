export const increment = () => {
  return {
    type: 'Increment',
  };
};
export const decrement = () => {
  return {
    type: 'Decrement',
  };
};
export const addData = (name = '') => {
  return {
    type: 'Add Data',
    payload: name,
  };
};
export const addProduct = (product: any) => {
  return {
    type: 'Add Product',
    payload: product,
  };
};
export const editProduct = (product: any) => {
  return {
    type: 'Edit Product',
    payload: product,
  };
};
export const deleteProduct = (productId: string) => {
  console.log('Action Id', productId);
  return {
    type: 'Delete Product',
    payload: {
      productId,
    },
  };
};
