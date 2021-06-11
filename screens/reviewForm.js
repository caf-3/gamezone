import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import { globalStyles } from '../styles/styles';
import { Formik } from 'formik';

export default function ReviewForm(){
    return(
        <View style={globalStyles.container}>
            <Formik
             initialValues={{title: '', body: '', rating: ''}}
             onSubmit={(values) => {
                 console.log(values);
             }}
            >
                {(props) => (
                    <View>
                        <TextInput
                          style={globalStyles.input}
                          placeholder="Review title"
                          onChangeText={props.handleChange('title')}
                          value={props.values.title}
                        />

                        <TextInput
                          multiline
                          style={globalStyles.input}
                          placeholder="Review body"
                          onChangeText={props.handleChange('body')}
                          value={props.values.body}
                        />

                        <TextInput
                          keyboardType="numeric"
                          style={globalStyles.input}
                          placeholder="Review (1-5)"
                          onChangeText={props.handleChange('rating')}
                          value={props.values.rating}
                        />
                        <Button title="submit" color="maroon" onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}