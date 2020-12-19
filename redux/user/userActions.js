import { UserActionTypes } from './userActionTypes';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_USER,
    payload: user
})

export const setUserDetails = user => ({
    type: UserActionTypes.SET_USER_DETAILS,
    payload: user
});