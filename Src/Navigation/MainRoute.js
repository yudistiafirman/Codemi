import React from 'react'
import {createStackNavigator}from '@react-navigation/stack'
import LoginRoute from './AccountRoute'
import Welcome from '../Screens/Welcome/Welcome'

const MainStack =createStackNavigator()
function MainRoute() {
    return (
        <MainStack.Navigator headerMode={null}>

            <MainStack.Screen name="welcome" component={Welcome}/>
            <MainStack.Screen name="main" component={LoginRoute}/>
        </MainStack.Navigator>
    )
}

export default MainRoute
