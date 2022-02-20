import { combineReducers } from "redux";
import authReducer from "src/store/reducers/auth";
import cartReducer from "src/store/reducers/cart";

const reducers = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

export default reducers;
