import React from 'react'
import { View, Text, Image } from 'react-native'





const SocialLogin = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 20 }}>
            <View style={{ backgroundColor: 'white', width: 44, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../Supports/Images/google-logo-9824.png')} style={{ width: 22, height: 22 }} />
            </View>
            <View style={{ backgroundColor: 'white', width: 44, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../Supports/Images/facebook.png')} style={{ width: 22, height: 22 }} />
            </View>
            <View style={{ backgroundColor: 'white', width: 44, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../Supports/Images/applelogo.png')} style={{ width: 70, height: 70 }} />
            </View>

        </View>
    )
}


export default SocialLogin