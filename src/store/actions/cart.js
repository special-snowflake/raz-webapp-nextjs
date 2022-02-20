import { ACTION_STRING } from "src/store/actions/actionString";

export const addProduct = (data) => {
  return {
    type: ACTION_STRING.cartAdd,
    payload: data,
  };
};

export const addQuantity = (id) => {
  return {
    type: ACTION_STRING.cartAddQty,
    payload: id,
  };
};

export const subQuantity = (id) => {
  return {
    type: ACTION_STRING.cartSubQty,
    payload: id,
  };
};

export const removeItemCart = (id) => {
  return {
    type: ACTION_STRING.cartRemoveItem,
    payload: id,
  };
};

export const updateCart = (data) => {
  return {
    type: ACTION_STRING.cartUpdate,
    payload: data,
  };
};

export const emptyCart = () => {
  return {
    type: ACTION_STRING.cartEmpty,
  };
};
