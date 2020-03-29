import {combineReducers} from 'redux';
import driversReducer from './driversSlice';

export default combineReducers({
  drivers: driversReducer,
});
