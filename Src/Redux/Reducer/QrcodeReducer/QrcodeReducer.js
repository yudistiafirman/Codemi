import { INVISIBLE, IS_VISIBLE } from "./QrcodeType"

const data ={
    isvisible:false
}



const qrcodeReducer=(state=data,action)=>{
    switch(action.type){
        case IS_VISIBLE:
            return {...state,isvisible:true}
        case INVISIBLE:
            return {...state,isvisible:false}
        default:
            return state
    }
}

export default qrcodeReducer