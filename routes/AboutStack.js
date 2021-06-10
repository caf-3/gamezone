import React from 'react';
import Header from '../components/Header';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
const { Navigator, Screen } = createStackNavigator();
const AboutStack = ({navigation}) =>{
    return(
        <Navigator
        screenOptions={{
        headerStyle: {
            height: 90
        },
        headerTintColor: '#444'
        }}>
        <Screen name="About" component={About} options={{
            headerTitle: () => <Header navigation={navigation} />
        }} />
    </Navigator>
    )
}

export default AboutStack;