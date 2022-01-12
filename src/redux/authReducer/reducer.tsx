import { LOG_IN, LOG_OUT } from './actions';

interface IAction{
  type: any;
  data: {
  }
}

interface IState{
  auth: Boolean;
}

const initialState = {
  auth: false,
};

function reducer(state: IState = initialState, action: IAction) {
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
