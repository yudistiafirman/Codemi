import React from 'react'
import { View,Text, SafeAreaView, TouchableOpacity,StyleSheet, Image } from 'react-native'

function Welcome({navigation}) {
    return (
        <SafeAreaView style={style.container}>
     
        <View style={style.slogan}>

            
            <Image style={{width:250,height:250,resizeMode:'contain',backgroundColor:'white'}} source={require('../../Supports/Images/scanlogo.png')}/>
            <Text style={style.Slogantext}>Scan Me</Text>

        </View>
     
        <View style={style.sloganSubTextContainer}>
            <Text>its now very easy to reach </Text>
            <Text>the beloved one among all</Text>
        </View>
        
            <TouchableOpacity onPress={()=>navigation.navigate('main')} style={style.button}>

            <Text>Next</Text>
        </TouchableOpacity>
    </SafeAreaView>
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
          justifyContent:'center',
        backgroundColor:'#ffff',
        alignItems:'center'
    },
  
    slogan:{
  
        width:300,
        height:300,
  
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffff'
  
    },
    sloganTextContainer:{
     
       height:'50%',
       width:'100%',
  
    },
    Slogantext:{
        fontSize:32,
        fontWeight:'bold',
        textAlign:'center'
    },
    sloganSubTextContainer:{
      
  
    },
    button:{
        width:'60%',
        height:40,
        backgroundColor:'#B8D9FA',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginTop:30
    
    },
    subImageCont:{
  
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:20
      
      
    },
    subImage:{
        width:50,
        height:50,
    },

  })

export default Welcome


          
           
    
