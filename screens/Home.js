import React, { useState } from 'react';
import {View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/styles';
export default function Home({navigation}){
    const [reviews, setReviews] = useState([
        {id: 1, title: 'Zelda', rating: 2, body: 'Lorem Ipsum'},
        {id: 2, title: 'Romeo e Julieta', rating: 3, body: 'Lorem Ipsum'},
        {id: 3, title: 'Mr robot', rating: 5, body: 'Lorem Ipsum'}
    ]);
    const pressHandler = () =>{
        navigation.push('Details');
    }
    return(
        <View style={globalStyles.container}>
            <FlatList
            data={reviews}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
                return(
                    <TouchableOpacity onPress={() => navigation.push('Details', item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )
            }}
            />
        </View>
    )
}