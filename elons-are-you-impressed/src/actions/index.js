import axios from 'axios'

export const FETCHING_DATA = 'FETCHING_DATA';
export const DISPLAY_DATA = 'DISPLAY_DATA';

export const getRockets = () => dispatch => {
    dispatch({ type: FETCHING_DATA })
    axios.get(`https://api.spacexdata.com/v3/launches/latest`)
        .then(res => {
            dispatch({ type: DISPLAY_DATA, payload: res.data })
        })
        .catch(err => {
            alert(err)
        })
}