import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { RectButton } from 'react-native-gesture-handler'


const Drawer = ({ onPress, label, bgColor, name, }) => {

    const styles=StyleSheet.create({
        buttonContainer:{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            padding: 5 
             },
        iconContainer:{
             width: 40, 
             height: 40, 
             borderRadius: 40, 
             backgroundColor: bgColor, 
             alignItems: 'center', 
             justifyContent: 'center' 
            }
    })
   
    return (
        <RectButton onPress={onPress} style={{ borderRadius: 30 }}>
            <View style={styles.buttonContainer} >

                <View style={styles.iconContainer}>
                    <Icon name={name} color="white" size={30} />
                </View>

                <Text style={{ marginLeft: 20 ,fontSize:16}}>{label}</Text>
            

            </View>
        </RectButton>
    )
}


export default Drawer