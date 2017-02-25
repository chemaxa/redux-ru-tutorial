
import { GET_FORECAST_REQUEST, GET_FORECAST_SUCCESS } from '../constants/Forecast'

const initialState = {
  data: {},
  fetching: false
}

export default function forecast(state = initialState, action){
  switch(action.type){
    case GET_FORECAST_REQUEST: 
      return {...state, fetching: true};
    case GET_FORECAST_SUCCESS:
      return {...state, data: action.payload, fetching: false};
    default:
      return state;
  }
}