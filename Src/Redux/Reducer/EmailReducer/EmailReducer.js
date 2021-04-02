    import {CHANGE_EMAIL,EMAIL_FOCUS,EMAIL_ERROR, EMAIL_BLUR}from './EmailType'

    const data = {
        value:'',
        focus:false,
        error:''
    }

    const emailReducer=(state=data,action)=>{
        switch(action.type){
            case CHANGE_EMAIL:
                return {...state,value:action.payload}
            case EMAIL_FOCUS:
                return {...state,focus:true}
            case EMAIL_ERROR:
                return {...state,error:action.payload,focus:false}
            case EMAIL_BLUR:
                return{...state,focus:false}
            default:
                return state
        }

        
    }

    export default emailReducer