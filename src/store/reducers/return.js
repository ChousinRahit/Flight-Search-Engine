import { CHANGE_TAB } from "../actions/types";
const initialState = {
  isReturn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return action.data;
    default:
      return state;
  }
};

export default reducer;
