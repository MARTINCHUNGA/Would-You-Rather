
import { combineReducers } from 'redux'
import authenticateUser from '../reducers/authenticateUser'
import questions from '../reducers/questions'
import users from '../reducers/users'



export default combineReducers(
    {
        authenticateUser,
        questions,
        users
    }
)