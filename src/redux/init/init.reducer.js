import initActionTypes from "./init.types";

const initialState = {
  loading: true,
};

const initReducer = (state = initialState, action) => {
  switch (action.type) {
    case initActionTypes.INIT_MAIN:
      return {
        loading: false,
      };

    default:
      return state;
  }
};

export default initReducer;
