import React from 'react'
import { SafeAreaView, Text,StyleSheet,View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function ModalHeader({iconLeft,title,IconRight,onLeftPress,onRightPress,disabled}) {
    return (
        <View style={style.header}>
        <TouchableOpacity onPress={onLeftPress}>
               <Icon name={iconLeft} size={30} color="red"/>
        </TouchableOpacity>
     
        <Text style={{fontSize:18,fontWeight:'bold'}}>{title}</Text>
        <TouchableOpacity disabled={disabled} onPress={onRightPress}>
                 <Icon name={IconRight} size={30} color="red"/>
        </TouchableOpacity>
        
    </View>
    )
} 
const style=StyleSheet.create({
    header:{
        height:70,
    
        borderColor:'lightgray',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        position:'absolute',
        top:0,
        left:0,
        right:0
    }
})
export default ModalHeader