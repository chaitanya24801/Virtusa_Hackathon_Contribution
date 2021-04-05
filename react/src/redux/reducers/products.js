export const products = (state = [], action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return action.payload;
    case "ADD_PRODUCT":
      return [...state, action.payload];
    case "EDIT_PRODUCT":
      return state.map((product) => {
        if (product.book_id === action.payload.book_id) return action.payload;
        return product;
      });
    case "DELETE_PRODUCT":
      return state.filter(
        (product) => product.book_id !== action.payload.book_id
      );
    default:
      return state;
  }
};
