
import {LOAD_USERS} from '../actions/users'


export default function users(state={},action){

    switch(action.type) {
        case LOAD_USERS :
            return{
                ...state,
                ...state.users
            }
        
        default:
            return state
    }
}