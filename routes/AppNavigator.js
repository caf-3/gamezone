import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
//import 'react-native-gesture-handler';
const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () =>(
    <Navigator headerMode={'screen'}>
        <Screen name="Home" component={Home} />
        <Screen name="Details" component={ReviewDetails} />
    </Navigator>
);
const AppNavigator = () =>{
    return(
        <NavigationContainer>
          <HomeNavigator />
        </NavigationContainer>
    )
}
export default AppNavigator;