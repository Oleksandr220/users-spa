import {IStore} from '../../types'

export const usersSelector = (state:IStore) => state.usersReducer.users;
export const loadingSelector = (state:IStore) => state.usersReducer.loading;
