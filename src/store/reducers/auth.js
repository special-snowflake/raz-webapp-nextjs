import {ACTION_STRING} from 'src/store/actions/actionString';
import {ActionType} from 'redux-promise-middleware';

const initialState = {
  userData: {
    token: null,
    id: null,
    roles: null,
  },
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: null,
};
const authReducer = (prevState = initialState, action) => {
  const {authLogin, authLogout} = ACTION_STRING;
  const {Pending, Fulfilled, Rejected} = ActionType;

  switch (action.type) {
    case authLogin.concat('_', Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };

    case authLogin.concat('_', Fulfilled):
      const data = action.payload.data;
      const userData = {
        // ...prevState.userData,
        token: data.data.token,
        id: data.data.id,
        roles: data.data.roles,
        // user: data.result,
      };
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        userData,
      };

    // case authLogin + rejected:
    case authLogin.concat('_', Rejected):
      const err = action.payload;
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: null,
      };

    case authLogout:
      return {
        ...initialState,
      };

    case authLogout.concat('_', Fulfilled):
      return {
        ...initialState,
      };

    default:
      return prevState;
  }
};

export default authReducer;
