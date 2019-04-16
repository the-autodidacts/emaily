import axios from 'axios';
import { FETCH_USER } from './types'

// Define our action creator
const fetchUser = () => {
    //we are using redux thunk here hence returning this function below which otherwise would not be needed what would be needed is the return an object with a type and a payload like so
    /**
        return {
             type: FETCH_CURRENT_USER
             payload: whatever it is. 
        }
           
     */

     // The middleware Thunk looks out for a function instead of an object being returned and 
     //automatically passes it a dispatch parameter which is another function. We want to dispatch that action after the async request has been completed.

    return function (dispatch) {
        axios.get("/api/current_user")
            .then(res => {
                dispatch({type: FETCH_USER, payload: res})
            })
    }
}