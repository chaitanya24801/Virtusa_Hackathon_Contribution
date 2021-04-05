import { user } from "./reducers/user";
import { products } from "./reducers/products";
import { orders } from "./reducers/orders";
import { cart } from "./reducers/cart";
import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducer = combineReducers({
  user,
  products,
  orders,
  cart,
})

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["products", "cart", "orders", "user"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };
