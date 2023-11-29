const initialState = {
  count: 0,
  name: [],
  product: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'Increment':
      return {
        ...state,
        count: state?.count + 1,
      };
    case 'Decrement':
      return {
        ...state,

        count: state.count - 1,
      };
    case 'Add Data':
      return {
        ...state,
        name: [...state.name, action.payload],
      };
    case 'Add Product':
      let id = state.product.length;
      return {
        ...state,
        product: [
          ...state.product,
          {
            productId: id,
            ...action.payload,
          },
        ],
      };
    case 'Edit Product':
      console.log('action payload : ', {action});
      const updateList = state.product.map(product => {
        if (product?.productId === action.payload.productId) {
          return {
            ...action.payload,
          };
        } else {
          return product;
        }
      });
      return {
        ...state,
        product: updateList,
      };
    case 'Delete Product':
      let tempArray = [];
      tempArray = [...state.product]?.filter(
        product => product?.productId !== action.payload.productId,
      );
      return {
        ...state,
        product: tempArray,
      };
    default:
      return state;
  }
};
