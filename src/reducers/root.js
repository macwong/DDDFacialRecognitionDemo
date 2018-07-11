import { combineReducers } from 'redux';
import MenuReducer from './reducer_menu';
import AddFaceReducer from './reducer_addface';
import AddModelReducer from './reducer_addmodel';

const rootReducer = combineReducers({
  menu: MenuReducer,
  addFace: AddFaceReducer,
  addModel: AddModelReducer
});

export default rootReducer;
