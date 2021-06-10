import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const RootDrawerNavigator = createDrawerNavigator();

const DrawerNavigator = () =>{
    return(
        <NavigationContainer>
            <RootDrawerNavigator.Navigator initialRouteName="Home" >
                <RootDrawerNavigator.Screen name="Home" component={HomeStack} />
                <RootDrawerNavigator.Screen name="About" component={AboutStack} />
            </RootDrawerNavigator.Navigator>
        </NavigationContainer>
    )
}
export default DrawerNavigator;