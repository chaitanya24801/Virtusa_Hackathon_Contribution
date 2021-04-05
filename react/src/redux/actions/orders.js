export const uploadOrders = (orders) => {
  return {
    type: "ADD_ORDERS",
    payload: orders,
  };
};
