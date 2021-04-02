import { ERROR_LOGIN, LOADING, LOGIN } from "./LoginType"

data={
    isLogin:false,
    error:'',
    loading:false,
    index:null
}


const loginReducer=(state=data,action)=>{
    switch(action.type){
        case LOGIN:
            return {...state,isLogin:true,error:'',loading:false,index:action.payload}
        case ERROR_LOGIN:
            return {...state,loading:false,error:action.payload}
        case LOADING:
            return {...state,loading:true}
        default:
            return state
            
        
        
    }
}

export default loginReducer