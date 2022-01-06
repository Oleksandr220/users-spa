export const ADD_USERS_ASYNC = 'ADD_USERS_ASYNC';
export const ADD_USERS = 'ADD_USERS';

export const SET_LOADING = 'SET_LOADING';

export const addUserAsync = (data) => ({ data, type: ADD_USERS });
export const setLoading = (data) => ({ data, type: SET_LOADING });
