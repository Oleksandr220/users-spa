interface State{
    authReducer: {
        auth: String;
    };
}

export const authSelector = (state: State) => state.authReducer.auth;
