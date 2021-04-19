import React from 'react';
import {View, Text, Button} from 'react-native';
import { globalStyles } from '../styles/styles';
export default function Review({ navigation, route}){
    const {title, rating, body, id} = route.params;
    return(
        <View style={globalStyles.container}>
            <Text>{title}</Text>
            <Text>{body}</Text>
            <Text>{rating}</Text>
        </View>
    )
}