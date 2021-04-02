import { CHANGE_PASSWORD, PASSWORD_BLUR, PASSWORD_ERROR, PASSWORD_FOCUS,REVEAL_PASSWORD } from "../Reducer/PasswordReducer/PasswordType"

export const onChangePassword =(text)=>{
    return {
        type:CHANGE_PASSWORD,
        payload:text
    }
}

export const onFocusPassword =(error)=>{
 
    if(error){
        return{
            type:PASSWORD_ERROR,
            payload:error
        }
    }else{
        return {
            type:PASSWORD_FOCUS
        }
    }
 
}

export const onPasswordBlur=(value)=>{

    if(value.length===0){
        return {
            type:PASSWORD_ERROR,
            payload:'password cannot be empty'
        }
    }else{
        return {
            type:PASSWORD_BLUR
        }
    }
  
}

export const onPasswordError=(text)=>{
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
        if(text.length===0){
            return {
                type:PASSWORD_ERROR,
              
            }
        }else if(re.test(text)){
            return {
                type:PASSWORD_ERROR,
            
            }
        }else{
           
            return {
                type:PASSWORD_ERROR,
                payload:'password at least contain 8 character'
            }
        }

    
   
}


export const onPasswordReveal =()=>{
    return {
        type:REVEAL_PASSWORD
    }
}