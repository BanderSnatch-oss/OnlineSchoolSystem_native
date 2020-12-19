import { combineReducers } from 'redux';
import userReducer from './user/userReduser';


const rootReducer = combineReducers({
    user: userReducer,

});

export default rootReducer