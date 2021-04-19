import React from 'react';
import {View, Text} from 'react-native';
import { globalStyles } from '../styles/styles';
export default function Home(){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
        </View>
    )
}