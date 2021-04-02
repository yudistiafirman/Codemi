import { HIDE_SCANNER, RESULT, SCAN_AGAIN, SHOW_SCANNER } from "./ScannerType"

const data ={
    show:false,
    result:null,

}



const scannerReducer=(state=data,action)=>{
    switch(action.type){

        case SHOW_SCANNER:
            return {...state, show:true}
        case HIDE_SCANNER:
            return {...state,show:false}
        case RESULT:
            return {...state,result:action.payload}
        case SCAN_AGAIN:
            return {...state,result:null}
        default:
            return state
    }
}

export default scannerReducer