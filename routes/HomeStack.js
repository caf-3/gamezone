import React from 'react';
import Header from '../components/Header'; 
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
const { Navigator, Screen } = createStackNavigator();

const HomeStack = ({ navigation }) =>(
    <Navigator
    >
        <Screen name="Home" component={Home} options={{
            headerStyle:{
                height: 90
            },  
            headerTitle: () => <Header navigation={navigation} />,
        }} />
        <Screen 
        name="Details" 
        component={ReviewDetails}
        options={{
            headerTitle: 'Review Details',
        }} />
    </Navigator>
);
export default HomeStack;