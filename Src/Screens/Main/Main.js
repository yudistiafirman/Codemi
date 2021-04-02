import React, { useState } from 'react'
import { Dimensions, Image, Text, View,StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import CustomHeader from '../../Component/CustomHeader/CustomHeader'
import Drawer from '../../Component/Drawer/Drawer'
import { dataicon } from '../../Constants/datatomap'
import SplashScreen from '../SplashScreen/SplashScreen'
import QrCodeModal from '../../Component/Modal/Modal'
import {openQrCodeModal,closeQrCodeModal} from '../../Redux/Actions/qrcodeAction'
import Scanner from '../Scanner/Scanner'
import {showScanner,hideScanner}from '../../Redux/Actions/ScannerAction'
import {onLogout}from '../../Redux/Actions/LoginAction'
function Main({login,user,qrcode,scanner,onLogout,openQrCodeModal,closeQrCodeModal,showScanner,hideScanner,navigation}) {

    const {isvisible}=qrcode
    const {show}=scanner
    const {index}=login

    const {width,height}=Dimensions.get('screen')
    const [scan,setScan]=useState(false)

    const onUserLogout=()=>{
        onLogout()
        navigation.navigate('welcome')
    }

    if(index===null){
        return <SplashScreen/>
    }
  


    return (
        <CustomHeader position="absolute">
                    <Text style={style.userEmail}>{user[index].username}</Text>
                    <Text style={style.userName}>{user[index].email}</Text>
                    
                     <Drawer name="scan1" onPress={showScanner}  bgColor="orange"label="peek and seek" />
                     <Drawer onPress={openQrCodeModal} name="qrcode" bgColor="pink"label="Your Qr Code is Here" />
                     <Drawer name="logout" onPress={onUserLogout} bgColor="red"label="Logout" />

                    <View  style={{alignItems:'center',justifyContent:'center', width: 100, height: 100, borderRadius: 50, backgroundColor: 'white', position: 'absolute', top: height/2/2-250, left:width- 250, right: 0, bottom: 0, }} >
                         <Image source={{uri:user[index].url}} style={{width:100,height:100,borderRadius:50,borderWidth:1}} />
                    </View>

                    <QrCodeModal onSwipeComplete={closeQrCodeModal} isVisible={isvisible} onLeftPress={closeQrCodeModal}/>  
                    <Scanner isVisible={show} onLeftPress={hideScanner} onSwipeComplete={hideScanner}/>
        </CustomHeader>
    )
}
const style=StyleSheet.create({
    userEmail:{ 
        fontWeight: 'bold', 
        fontSize: 24, 
        color: '#0C0D34', 
        textAlign: 'center', 
        paddingTop: 50 
    },
    userName:{ 
        color: 'rgba(12,13,52,0.5)', 
        textAlign: 'center', 
        marginTop: 2, 
        marginBottom: 30 
    }
})

const mapDispatchToProps={
    openQrCodeModal,
    closeQrCodeModal,
    showScanner,
    hideScanner,
    onLogout
}
const mapStateToProps=(state)=>{
    return {
        login:state.login,
        user:state.user,
        qrcode:state.qrcode,
        scanner:state.scan
    }
}

export default connect(mapStateToProps,mapDispatchToProps)( Main)
  
              

               
                    
               
                
            

