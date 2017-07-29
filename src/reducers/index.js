import { combineReducers } from 'redux';
import notesReducer from './noteReducer';

const dummyReducer = (state = null) => {
    return state;
}; 

const rootReducer = combineReducers({
   notes:notesReducer,
});

export default rootReducer;
