import * as actionTypes from "./actionTypes";

const initState = {
    users:[]
}

export default function reducer(state=initState,action){
    switch(action.type){
        case actionTypes.REQUEST_DATA:
            return{
                ...state
            }
        case actionTypes.REQUEST_DATA_SUCCESS:
          return {
              ...state,
              users:action.users
          }
        case actionTypes.REQUEST_DATA_FAILED:
            return state;
        default:
            return state;
    }
}