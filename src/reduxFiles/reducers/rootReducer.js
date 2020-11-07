import { combineReducers } from 'redux';
import Strings from '../../constants/Strings';
import { moviesReducer } from './moviesReducer';


const appReducer = combineReducers({
    movies: moviesReducer
});

const rootReducer = (state, action) => {
    if (action.type === Strings.LOGOUT_ACTION) {
        state = undefined
    }
    return appReducer(state, action)
}


export default rootReducer;
