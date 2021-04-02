import AsyncStorage from "@react-native-async-storage/async-storage"
import { ERROR_LOGIN, LOADING, LOGIN } from "../Reducer/LoginReducer/LoginType"




export const onLogin=(idx)=>{
    return (dispatch)=>{
  
        AsyncStorage.setItem('id',JSON.stringify(idx)).then((response)=>{
              
                    dispatch({
                        type:LOGIN,
                        payload:idx
                    })
                
        }).catch((error)=>{
            
        })
    }
  
}

export const loggedIn =(idx)=>{
            return {
                type:LOGIN,
                payload:idx
            }
      
  
}

export const onLogout=()=>{
    return(dispatch)=>{
        AsyncStorage.removeItem('id')
    }
}

export const isLoading=()=>{
    return {
        type:LOADING
    }
}