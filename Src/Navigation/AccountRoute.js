import  React, { useEffect, useState } from 'react';
import Login from '../Screens/Login/Login';
import Main from '../Screens/Main/Main';
import { connect } from 'react-redux';

import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loggedIn } from '../Redux/Actions/LoginAction';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';




const LoginStack= createStackNavigator()


const LoginRoute= ({loggedIn})=>{

    const [isLoggedin,SetLoggedIn]=useState({
        loggedin:false,
        loading:false
    })
  const {loggedin,loading}=isLoggedin
 

    useEffect(()=>{
        SetLoggedIn({...isLoggedin,loading:true})
            AsyncStorage.getItem('id').then((data)=>{
                if(data){
                    loggedIn(data)
                
                   SetLoggedIn({...isLoggedin,loggedin:true,loading:false})
                }else{
                SetLoggedIn({...isLoggedin,loading:false,loggedin:false})
                }
            })
    },[])
       
    const loginScreen={

        Login:Login
    } 

    const mainScreen={
        Main:Main
    }
    if(loading){
        return <SplashScreen/>
    }

    return <LoginStack.Navigator headerMode={null}>
 
    {Object.entries({
    
    ...(loggedin ? mainScreen : loginScreen),
    }).map(([name, component]) => (
    
    <LoginStack.Screen  key={name} name={name} component={component} />
    ))}

</LoginStack.Navigator>
}
const mapDispatchToProps={
loggedIn
}



export default connect(null,mapDispatchToProps)(LoginRoute)





