import React, { useState } from 'react';
import {View, Text, TouchableWithoutFeedback, Keyboard, FlatList, TouchableOpacity, Modal} from 'react-native';
import { globalStyles } from '../styles/styles';
import Card from '../components/Card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';
export default function Home({navigation}){
    const [reviews, setReviews] = useState([
        {id: 1, title: 'Zelda', rating: 2, body: 'Lorem Ipsum'},
        {id: 2, title: 'Romeo e Julieta', rating: 3, body: 'Lorem Ipsum'},
        {id: 3, title: 'Mr robot', rating: 5, body: 'Lorem Ipsum'}
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pressHandler = () =>{
        navigation.push('Details');
    }
    const addReview = (review) => {
        review.id = Math.random().toString().substr(2);
        setReviews((previousReviews) => {
            return [review, ...previousReviews];
        });
        //setIsModalOpen(false);
    }
    return(
        <View style={globalStyles.container}>
            <Modal visible={isModalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={globalStyles.modalContent}>
                        <MaterialIcons
                        name="close"
                        size={20}
                        onPress={() => setIsModalOpen(false)}
                        style={globalStyles.modalToggle}
                        />
                        <ReviewForm addReview={addReview} />

                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            
            <MaterialIcons
            name="add"
            size={20}
            onPress={() => setIsModalOpen(true)}
            style={globalStyles.modalToggle}
            />

            <FlatList
            data={reviews}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
                return(
                    <TouchableOpacity onPress={() => navigation.push('Details', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )
            }}
            />
        </View>
    )
}