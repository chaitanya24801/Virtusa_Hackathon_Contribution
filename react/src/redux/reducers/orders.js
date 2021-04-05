

export const orders = (state = [], action) => {
  switch (action.type) {
    case "ADD_ORDERS":
      return action.payload;
    case "ADD_ORDERSS":
      return [...state, ...action.payload];
    case "ADD_TO_ORDERS":
      console.log(action.payload)
      return [...state, action.payload ];
    default:
      return state;
  }
};
