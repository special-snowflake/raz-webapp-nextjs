import { ACTION_STRING } from "src/store/actions/actionString";

const initialState = {
  products: [],
  shippingMethod: "",
  subTotal: 0,
  totalPrice: 0,
};

const cartReducer = (prevState = initialState, action) => {
  const {
    cartAdd,
    cartAddQty,
    cartSubQty,
    cartRemoveItem,
    cartUpdate,
    cartEmpty,
  } = ACTION_STRING;

  const index = prevState.products.findIndex(
    (item) => item.id === action.payload
  );

  switch (action.type) {
    case cartAdd:
      if (
        prevState.products.findIndex(
          (item) => item.id === action.payload.id
        ) === -1
      ) {
        return {
          ...prevState,
          products: [...prevState.products, action.payload],
          subTotal:
            prevState.subTotal + action.payload.price * action.payload.quantity,
        };
      } else {
        return {
          ...prevState,
          products: prevState.products.map((product) => {
            if (product.id === action.payload.id) {
              return {
                ...product,
                quantity: product.quantity + action.payload.quantity,
                total: product.total + action.payload.total,
              };
            }
            return product;
          }),
          subTotal:
            prevState.subTotal + action.payload.price * action.payload.quantity,
        };
      }

    case cartAddQty:
      return {
        ...prevState,
        products: prevState.products.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              quantity: product.quantity + 1,
              total: product.total + product.price,
            };
          }
          return product;
        }),
        subTotal: prevState.subTotal + prevState.products[index].price,
      };

    case cartSubQty:
      return {
        ...prevState,
        products: prevState.products.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              quantity: product.quantity - 1,
              total: product.total - product.price,
            };
          }
          return product;
        }),
        subTotal: prevState.subTotal - prevState.products[index].price,
      };

    case cartRemoveItem:
      return {
        ...prevState,
        products: prevState.products.filter(
          (item) => item.id !== action.payload
        ),
        subTotal: prevState.subTotal - prevState.products[index].total,
      };

    case cartUpdate:
      return {
        ...prevState,
        shippingMethod: action.payload.shippingMethod,
        totalPrice: action.payload.totalPrice,
      };
      
    case cartEmpty:
      return initialState;

    default:
      return prevState;
  }
};

export default cartReducer;
