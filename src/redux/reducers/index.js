import { combineReducers } from 'redux';

import lessonSubReducer from './lessonSubReducer';


export default combineReducers({
    lessonSubState : lessonSubReducer,

})