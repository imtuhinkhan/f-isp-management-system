import {createStore} from 'redux'
import AllReducers from './reducers/AllReducers'

const initialState = {
    auth:{
        loggedIn:false,
        user:{}
    }
}
const store = createStore(AllReducers,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;