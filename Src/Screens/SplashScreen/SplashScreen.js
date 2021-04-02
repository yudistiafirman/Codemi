import React from 'react'
import { Image, ImageBackground, SafeAreaView, Text, View } from 'react-native'


function SplashScreen({navigation}) {
   
    return (
            <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>

                        <Image style={{width:'100%',height:'100%',resizeMode:'contain',backgroundColor:'#ffff'}} source={require('../../Supports/Images/scanlogo.png')}/>
            </SafeAreaView>
    )

}
export default SplashScreen
