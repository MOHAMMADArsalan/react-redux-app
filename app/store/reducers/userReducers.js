import {
    GET_USER,
    GET_USER_FINISHED,
    GET_USER_ERROR,
    GET_USER_DETAIL,
    GET_USER_DETAIL_FINISHED,
    GET_USER_DETAIL_ERROR
} from "./../actions"

const INITIAL_STATE = {
    isLoading: false,
    hasError: false,
    error: {
        message: '',
        status: null
    },
    users: [],
    user: {}
}

export default (state = INITIAL_STATE, {
    type,
    payload
}) => {
    const newState = { ...state
    };

    switch (type) {
        case GET_USER:
            {
                newState.isLoading = true;
                return newState;
            }
        case GET_USER_FINISHED:
            {
                newState.isLoading = false;
                newState.users = payload;
                return newState
            }
        case GET_USER_ERROR:
            {
                newState.isLoading = false;
                newState.hasError = true;
                newState.error = payload;
                return newState;
            }
        case GET_USER_DETAIL:
            {
                newState.isLoading = true;
                return newState;
            }
        case GET_USER_DETAIL_FINISHED:
            {
                newState.isLoading = false;
                newState.user = payload;
                return newState
            }
        case GET_USER_DETAIL_ERROR:
            {
                newState.isLoading = false;
                newState.hasError = true;
                newState.error = payload;
                return newState
            }
        default:
            return state
    }
}