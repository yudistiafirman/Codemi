import { RESULT, SCAN_AGAIN, SHOW_SCANNER,HIDE_SCANNER } from "../Reducer/ScannerReducer/ScannerType"



export const showScanner=()=>{
    return {
        type:SHOW_SCANNER
    }
}

export const hideScanner=()=>{
    return{
        type:HIDE_SCANNER
    }
}

export const onSuccessScanned=(e)=>{
   let data= e.data.substring(0,4)
        return {
            type:RESULT,
            payload:JSON.parse(data)
        }
  
    
}

export const onScanAgain=()=>{
    return {
        type:SCAN_AGAIN
    }
}

