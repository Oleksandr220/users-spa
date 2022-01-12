export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const logIn = (data: boolean) => ({ data, type: LOG_IN });
export const logOut = (data: boolean) => ({ data, type: LOG_OUT });
