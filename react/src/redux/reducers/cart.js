

export const cart = (state = [], action) => {
  switch (action.type) {
    case "FILL_CART":
      return action.payload;
    case "ADD_ITEM_TO_CART":
      return [...state, action.payload];
    case "DELETE_FROM_CART":
      return state.filter((cart) => cart.book_id !== action.payload);
    case "EMPTY_CART":
      return [];
    default:
      return state;
  }
};
