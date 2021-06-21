import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import { globalStyles } from '../styles/styles';
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is-number-1-5', 'Rating must be a number between 1-5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    })
});

export default function ReviewForm({ addReview }){
    return(
        <View style={globalStyles.container}>
            <Formik
             initialValues={{title: '', body: '', rating: ''}}
             validationSchema={reviewSchema}
             onSubmit={(values, actions) => {
                 addReview(values);
                 actions.resetForm();
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