import {robotReducer} from './robots/robots.reducer';
import {combineReducers} from 'redux';
import searchReducer from './search/search.reducer';
export default combineReducers({
    robots:robotReducer,
    search:searchReducer
})