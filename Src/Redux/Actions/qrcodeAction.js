import { INVISIBLE, IS_VISIBLE } from "../Reducer/QrcodeReducer/QrcodeType"




export const openQrCodeModal=()=>{
    return {
        type:IS_VISIBLE
    }
}

export const closeQrCodeModal=()=>{
    return {
        type:INVISIBLE
    }
}