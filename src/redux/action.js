//fetch data from api
import axios from "axios"
import { R_FAILURE,R_SUCCESS } from "../constants/constant"


export const RestListAction =  () => async(dispatch)=>{
   try{
      const result =  await axios.get('./restaurants.json')
      // console.log(result.data.restaurants)
      dispatch({
         type:R_SUCCESS,
         payload:result.data.restaurants
      })   
   }catch(err){
      dispatch({
         type:R_FAILURE,
         error:err
      })
   }
}

