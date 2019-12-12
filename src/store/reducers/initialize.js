import {
  INITIALIZEDATA,
  GET_CITIES,
  CHANGE_TAB,
  FILTER_DATA
} from "../actions/types";
const initialState = {
  allFlights: [],
  cities: [],
  isReturn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZEDATA:
      const newState = { ...state, allFlights: [...action.data].slice(0, 10) };
      return newState;
    case GET_CITIES:
      const newCitiesState = { ...state, cities: [...action.data] };
      return newCitiesState;
    case CHANGE_TAB:
      return { ...state, isReturn: action.data };
    case FILTER_DATA:
      return { ...state, allFlights: [...action.data] };
    default:
      return state;
  }
};

export default reducer;
