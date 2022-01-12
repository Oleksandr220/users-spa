export const ADD_USERS_ASYNC = 'ADD_USERS_ASYNC';
export const ADD_USERS = 'ADD_USERS';

export const SET_LOADING = 'SET_LOADING';

interface IAction {
    [name:string]: {}
}

export const addUser = (data: IAction) => ({ data, type: ADD_USERS });
export const setLoading = (data: Boolean) => ({ data, type: SET_LOADING });
