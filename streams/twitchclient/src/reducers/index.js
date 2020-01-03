import {combineReducers} from "redux";
//importing a named import and renaming it as formReducer
import {reducer as formReducer} from 'redux-form';
import authReducer from "./authReducer";
import StreamReducer from "./StreamReducer";


export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: StreamReducer
});
