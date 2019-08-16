import { FETCHING_DATA, DISPLAY_DATA } from '../actions'
export const initState = {
    rockets: [],
    launches: [''],
    isFetching: false
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCHING_DATA:
            return {
                ...state,
                isFetching: true
            }
        case DISPLAY_DATA:
            console.log(action.payload)
            return {
                ...state,
                rockets: action.payload,
                isFetching: false
            }

        default:
            return state
    }

}