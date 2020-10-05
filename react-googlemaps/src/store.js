import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
const axios = require('axios')

const initialState = []

const GOT_MARKERS = 'GOT_MARKERS'
const ADDED_MARKER = 'ADDED_MARKER'

const gotMarkers = markers => ({
    type: GOT_MARKERS,
    markers
})
const addedMarker = marker => ({
    type: ADDED_MARKER,
    marker
})

export const getMarkers = () => async dispatch => {
    try {
        const {data: markers} = await axios.get('/api/markers')
        dispatch(gotMarkers(markers))
    } catch (err) {
        console.log(err)
    }
}
export const addMarker = marker => async dispatch => {
    try {
        const {data: newMarker} = await axios.post('/api/markers', marker)
        dispatch(addedMarker(newMarker))
    } catch (err) {
        console.log(err)
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GOT_MARKERS:
            return action.markers
        case ADDED_MARKER:
            return [...state, action.marker]
        default:
            return state
    }
}

const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store