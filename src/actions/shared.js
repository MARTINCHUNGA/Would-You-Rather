import {loadUsers} from '../actions/users'
import {loadQuestions} from '../actions/questions'
import {loadInitialData} from '../Utils/api'


export function handleInitialData(){
    return dispatch => {
        return loadInitialData().then(({
            questions,users
        }) => {
            dispatch(loadUsers(users));
            dispatch(loadQuestions(questions));
        })
    }
}