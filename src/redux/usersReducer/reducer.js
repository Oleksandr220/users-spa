import { ADD_USERS_ASYNC, SET_LOADING } from './actions';

const initialState = {
  users: [],
  loading: false,
};

function reduser(state = initialState, action) {
  switch (action.type) {
    case ADD_USERS_ASYNC:
      return { ...state, users: [...state.users, action.data] };
    case SET_LOADING:
      return { ...state, loading: action.data };
    default:
      return state;
  }
}

export default reduser;
