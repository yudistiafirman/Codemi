import React, { useEffect, useState } from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Button from '../../Component/Button/Button'
import LoginContainer from '../../Component/LoginContainer/LoginContainer'
import MyInput from '../../Component/Myinput/Myinput'
import {onChangeEmail, onEmailBlur, onFocusEmail, onEmailError}from '../../Redux/Actions/EmaiAction'
import {onChangePassword,onPasswordBlur,onFocusPassword,onPasswordError,onPasswordReveal}from '../../Redux/Actions/PasswordAction'
import {onLogin}from '../../Redux/Actions/LoginAction'
import AwesomeAlert from 'react-native-awesome-alerts'


function Login({navigation,user,email,onChangeEmail,onFocusEmail,onEmailBlur,onEmailError,password,onChangePassword,onPasswordBlur,onFocusPassword,onPasswordError,onPasswordReveal,onLogin}) {

    const {value,focus,error}=email
    const {passvalue,passfocus,passerror,reveal}=password
    const [showalert,SetAlert]=useState(false)
    useEffect(()=>{
      
            onEmailError(value)
            onPasswordError(passvalue)
        
     
    },[value,passvalue])

const onUserLogin=()=>{
    let index= user.findIndex((v)=>v.email===value && v.password===passvalue)
  
    //jika index !==-
    if(index!==-1){
        onLogin(index)
       navigation.push('main')
    }else{
        SetAlert(true)
    }
}

    return (
     <LoginContainer>
          <View style={styles.title}>

            <Text style={[{...styles.headerText,fontSize: 24, color: '#0C0D34',}]}>Welcome Back</Text>
            <Text style={styles.headerText}>use your credential below</Text>
            <Text style={styles.headerText}>to login to your account</Text>

        </View>
         <View style={styles.inputContainer}>
            {/* input untuk email */}
           <MyInput
                value={value}
                focus={focus}
                onFocus={()=>onFocusEmail(error)}
                error={error}
                text="enter your mail" 
                icon="email"
                onBlur={()=>onEmailBlur(value)} 
                size={22} 
                onChangeText={onChangeEmail}
                isPass={false}  />
                <Text style={styles.errorText}>{error}</Text>

                {/* input untuk password */}
                
                    <MyInput 
                     text="confirm your password" 
                     value={passvalue}
                     focus={passfocus}
                     isPass={reveal?false:true}
                     onPressIcon={onPasswordReveal}
                     onBlur={()=>onPasswordBlur(passvalue)}
                     onFocus={()=>onFocusPassword(passerror)}
                     error={passerror}
                     onChangeText={onChangePassword}
                     icon={'lock'} 
                     iconRightSize={22}
                     size={22} 
                     iconRight={reveal?'eye-outline':'eye-off-outline'}
               />
                <Text style={styles.errorText}>{passerror}</Text>
                    </View>
                   
                    <View style={styles.buttonContainer}>
                          <Button onPress={onUserLogin} variant="primary" disabled={passerror ||error||!value||!passvalue} label="Login"/>
                    </View>
                    <AwesomeAlert
          show={showalert}
       
          title="Login failed"
          message="You Have no account yet!"
          closeOnTouchOutside={true}
        
          showCancelButton={true}
         
          cancelText="cancel"
    
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => SetAlert(false)}
          onConfirmPressed={()=>SetAlert(false)}
        />
    </LoginContainer>
    )
}
const styles= StyleSheet.create({
    title:{
        flex:0.1,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        margin:20
    },

    inputContainer:{
        flex:0.6,
        justifyContent:'space-around',
        
        margin:20,
    },
    buttonContainer:{
        flex:0.2,
        justifyContent:'flex-start',
        alignItems:'center',
        margin:20
    },
    textTitle:{
        fontSize:32,
        fontWeight:'bold'
    },
    smallText:{
        fontSize:12,
        marginTop:20
    },
    errorText:{
        color:'red',
        fontStyle:'italic',
        fontSize:12,
        marginTop:5
    },
    headerText:{
        fontWeight:'bold', 
        color: 'rgba(12,13,52,0.5)', 
        textAlign: 'center',}
   

})

const mapDispatchToProps={
   onLogin, onChangeEmail,onFocusEmail,onEmailBlur,onEmailError,onChangePassword,onFocusPassword,onPasswordBlur,onPasswordError,onPasswordReveal
}

const mapStateToProps=(state)=>{
    return {
        email:state.email,
        password:state.password,
        user:state.user
    }
}

export default connect(mapStateToProps,mapDispatchToProps)  (Login)



                    
                    
                    
                   
                 
              
                  
   
                    
