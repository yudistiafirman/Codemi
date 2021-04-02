import { CHANGE_EMAIL, EMAIL_BLUR, EMAIL_ERROR, EMAIL_FOCUS } from "../Reducer/EmailReducer/EmailType"

export const onChangeEmail =(text)=>{
    return {
        type:CHANGE_EMAIL,
        payload:text
    }
}

export const onFocusEmail =(error)=>{
 
    if(error){
        return{
            type:EMAIL_ERROR,
            payload:error
        }
    }else{
        return {
            type:EMAIL_FOCUS
        }
    }
 
}

export const onEmailBlur=(value)=>{
    if(value.length===0){
        return{
            type:EMAIL_ERROR,
            payload:'email cannot be empty'
        }
    }else{
        return {
            type:EMAIL_BLUR
        }
    }
   
}

export const onEmailError=(text)=>{
    const re = /\S+@\S+\.\S+/
        if(text.length===0){
            return {
                type:EMAIL_ERROR,
              
            }
        }else if(re.test(text)){
            return {
                type:EMAIL_ERROR,
            
            }
        }else{
           
            return {
                type:EMAIL_ERROR,
                payload:'invalid email format'
            }
        }

    
   
}