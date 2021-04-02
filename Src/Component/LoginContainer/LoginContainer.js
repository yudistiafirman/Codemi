
import React from 'react'
import { Dimensions, Image, StyleSheet, View, Text } from 'react-native'
import SocialLogin from '../SocialLogin/SocialLogin'



import batik from '../../Supports/Images/pattern.jpg'

const { width } = Dimensions.get('window')
const aspectRatio = 750 / 1125
const height = width * aspectRatio


const styles = StyleSheet.create({
    pattern: {
        width,
        height,
        borderBottomLeftRadius: 75
    }
})


const Container = ({ children}) => {
 
    return (
        <View style={{ flex: 1, backgroundColor: "#0C0D34" }}>
            <View style={{ backgroundColor: "white" }}>
                <View style={{ borderBottomLeftRadius: 75, overflow: 'hidden', height: (height * 0.61), backgroundColor: 'white' }}>
                    <Image source={batik} style={styles.pattern} />
                </View>
            </View>
            <View style={{ flex: 1, }}>
                <Image source={batik} style={{
                    ...StyleSheet.absoluteFillObject,
                    width,
                    height,
                }} />
                <View style={{ borderRadius: 75, borderTopLeftRadius: 0, backgroundColor: 'white', flex: 1 }}>
                    {children}
                </View>

            </View>
            <View style={{ backgroundColor: "#0C0D34", paddingTop: 10, padding: 10 }}>
              <SocialLogin/>
            


            </View>
        </View>
    )
}

export default Container