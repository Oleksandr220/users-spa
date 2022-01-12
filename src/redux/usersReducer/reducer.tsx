import { ADD_USERS, SET_LOADING } from './actions';
import {User} from '../../types'

interface Action{
  type: any;
  data: []
}
interface IState {
  users: User[] | [];
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
