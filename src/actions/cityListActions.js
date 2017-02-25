import {
  GET_FORECAST_REQUEST,
  GET_FORECAST_SUCCESS,
  GET_COORDS_REQUEST,
  GET_COORDS_SUCCESS,
  GET_COORDS_FAILURE,
  SET_CURRENT_CITY
} from '../constants/CityList'

export function getForecast(data) {
  return (dispatch) => {
    dispatch({
      type: GET_FORECAST_REQUEST,
      payload: data
    })

    setTimeout(() => {
      dispatch({
        type: GET_FORECAST_SUCCESS,
        payload: data
      })
    }, 3000);
  }
}

export function setCurrentCity(currentCity) {
  return {
    type: SET_CURRENT_CITY,
    payload: currentCity
  }
}

export function getCoords(currentCity) {
  return (dispatch) => {
    dispatch({
      type: GET_COORDS_REQUEST,
      payload: currentCity
    })

    setTimeout(() => {
      dispatch({
        type: GET_COORDS_SUCCESS,
        payload: coords
      })
    }, 3000);
  }
}