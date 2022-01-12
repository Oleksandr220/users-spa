interface State{
    authReducer: {
        auth: Boolean;
    };
}

export const authSelector = (state: State) => state.authReducer.auth;
