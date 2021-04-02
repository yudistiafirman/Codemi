import emailReducer from './EmailReducer/EmailReducer'
import passwordReducer from './PasswordReducer/PasswordReducer'
import {combineReducers}from 'redux'
import userReducer from './UserReducers/UserReducer'
import loginReducer from './LoginReducer/LoginReducer'
import qrcodeReducer from './QrcodeReducer/QrcodeReducer'
import scannerReducer from './ScannerReducer/ScannerReducer'


const rootReducer=combineReducers({
    email:emailReducer,
    password:passwordReducer,
    user:userReducer,
    login:loginReducer,
    qrcode:qrcodeReducer,
    scan:scannerReducer
})

export default rootReducer




