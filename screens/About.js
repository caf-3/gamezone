import React from 'react';
import { View, Text} from 'react-native';
import { globalStyles } from '../styles/styles';
export default function About(){
    return(
        <View style={globalStyles.container}>
            <Text>About Screen</Text>
        </View>
    )
}