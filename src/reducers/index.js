import { combineReducers } from 'redux';
import forecast from './forecast'
import cityList from './cityList'

export default combineReducers({
  cityList,
  forecast
});