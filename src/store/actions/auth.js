import { ACTION_STRING } from "src/store/actions/actionString";
// import { loginAuth } from "src/modules/utils/auth";
import { loginAuth } from "src/modules/utils/auth";

export const loginAction = (body) => {
  return {
    type: ACTION_STRING.authLogin,
    payload: loginAuth(body),
  };
};
