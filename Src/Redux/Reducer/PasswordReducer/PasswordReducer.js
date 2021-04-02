import {CHANGE_PASSWORD,PASSWORD_FOCUS,PASSWORD_ERROR, PASSWORD_BLUR,REVEAL_PASSWORD} from './PasswordType'

const data = {
    passvalue:'',
    passfocus:false,
    passerror:'',
    reveal:false
}

const passwordReducer=(state=data,action)=>{
    switch(action.type){
        case CHANGE_PASSWORD:
            return {...state,passvalue:action.payload}
        case PASSWORD_FOCUS:
            return {...state,passfocus:true}
        case PASSWORD_ERROR:
            return {...state,passerror:action.payload,focus:false}
        case PASSWORD_BLUR:
            return{...state,passfocus:false}
        case REVEAL_PASSWORD:{
            return {...state,reveal:!state.reveal}
        }
        default:
            return state
    }

    
}

export default passwordReducer