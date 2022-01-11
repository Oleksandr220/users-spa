import { LOG_IN, LOG_OUT } from './actions';

const initialState = {
  auth: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return { ...state, auth: action.data };
    case LOG_OUT:
      return { ...state, auth: action.data };
    default:
      return state;
  }
}

export default reducer;
