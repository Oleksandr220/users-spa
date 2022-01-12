import { ADD_USERS, SET_LOADING } from './actions';
import {IUser} from '../../types'
interface Action{
  type: String;
  data: IUser[] | []
}
interface IState {
  users: IUser[] | [];
  loading: boolean;
}

const initialState = {
  users: [],
  loading: true,
};

function reduser(state: IState = initialState, action: Action) {
  switch (action.type) {
    case ADD_USERS:
      return { ...state, users: [...state.users, ...action.data] };
    case SET_LOADING:
      return { ...state, loading: action.data };
    default:
      return state;
  }
}

export default reduser;
