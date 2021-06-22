import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20
    },
    titleText:{
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: 'black'
    },
    paragraph :{
        marginVertical: 8,
        lineHeight: 20
    },
    card:{
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
    },
    cardContent:{
        marginHorizontal:18,
        marginVertical: 10
    },
    rating:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    },
    modalToggle:{
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#3d3d3b',
        borderRadius: 10,
        padding: 10,
        alignSelf: 'center'
    },
    modalContent:{
        flex:1
    },
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6
    },
    errorText: {
        color: '#f01d71',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'left'
    }
})