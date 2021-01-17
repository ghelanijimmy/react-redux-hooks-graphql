import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";

const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export default reducers;