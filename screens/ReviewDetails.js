import React from 'react';
import {View, Text, Image} from 'react-native';
import { globalStyles } from '../styles/styles';
import { ratings } from '../global/images'
;import Card from '../components/Card';
export default function Review({ navigation, route}){
    const {title, rating, body, id} = route.params;
    
    return(
        <View style={globalStyles.container}>
           <Card>
            <Text>{title}</Text>
            <Text>{body}</Text>
            <View style={globalStyles.rating}>
                <Text>GameZone rating:</Text>
                <Image source={ratings[rating]} />
            </View>
           </Card>
        </View>
    )
}