import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const CustomHeader = ({ padding, position, children, onPress, leftIcon, rightIcon, title }) => {
const {height}=Dimensions.get('screen')
    const styles = StyleSheet.create({
        children: {
            padding: 30,
            position: position,
            top: 0,
            left: 0,
            right: 0,
            bottom: height/2/2-50,
            borderTopLeftRadius: 75,
            backgroundColor: "white",
            justifyContent: 'center'
        },
        topColor:{
            backgroundColor: "#0C0D34",
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderBottomRightRadius: 75,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }

    })



    return <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 0.2, backgroundColor: 'white' }} >

                    <View style={styles.topColor} >
                        <Icon onPress={onPress} name={leftIcon} color="white" size={22} />
                        <Text style={{ color: "white", textAlign: 'center', marginTop: 2, marginBottom: 30 }}>{title}</Text>
                        <Icon name={rightIcon} color="white" size={22} />
                    </View>


              </View>

              <View style={{ flex: 0.8 ,backgroundColor:'white'}}>

                <View style={{ flex: 1, backgroundColor: "#0C0D34" }} />
                <View style={{ flex: 1, }} />

            <View style={styles.children}>

                {children}


            </View>

        </View>
    </SafeAreaView>

}

export default CustomHeader


