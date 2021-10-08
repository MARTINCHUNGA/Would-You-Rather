
import { AUTH_USER } from '../actions/authenticateUser'



export default function authenticateUser(state=null, action){
  
    if(action.type === AUTH_USER){
        return action.id
    }

    return state
}