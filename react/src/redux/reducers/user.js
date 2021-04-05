export const user = (state = localStorage.getItem("neo-user"), action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return action.payload;
    default:
      return state;
  }
};
