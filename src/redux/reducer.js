import { R_FAILURE,R_SUCCESS } from "../constants/constant";


export const restReducer = (state = {restList:[]},action) =>{
    switch (action.type) {
        case R_SUCCESS:
            return{
                restList:action.payload
            }
        case R_FAILURE:
            return{
                restList:action.error
            }    
        default:
            return{
                state
            }    
    }
}