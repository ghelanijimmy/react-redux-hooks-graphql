import { USER_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;

  switch (type) {
    case USER_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    default:
      return {
        ...state
      };
  }
};

export default userReducer;
