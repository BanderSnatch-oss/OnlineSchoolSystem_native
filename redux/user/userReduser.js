import { UserActionTypes } from './userActionTypes';

const INITIAL_STATE = {
    user: null,
    userDetails: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case UserActionTypes.SET_USER_DETAILS:
            return {
                ...state,
                userDetails: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;