import { combineReducers } from 'redux';
import MenuReducer from './reducer_menu';
import AddFaceReducer from './reducer_addface';

const rootReducer = combineReducers({
  menu: MenuReducer,
  addFace: AddFaceReducer
});

export default rootReducer;
