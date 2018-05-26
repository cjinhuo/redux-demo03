import counter from '../gun/Gun.reducer'
import {combineReducers} from 'redux'
import auth from './Auth.reducer'

export default combineReducers({
    counter,auth
});