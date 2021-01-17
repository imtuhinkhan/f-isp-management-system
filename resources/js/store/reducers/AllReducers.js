import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'

const AllReducers = combineReducers({auth:AuthReducer})

export default AllReducers;