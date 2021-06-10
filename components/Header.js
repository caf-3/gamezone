import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({navigation}){
    const openMenu = () =>{
        navigation.openDrawer();
    }

    return(
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image style={styles.headerImage} source={require('../assets/heart_logo.png')} />
                <Text style={styles.headerText}>GameZone</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle:{
        flexDirection: 'row'
    },
    headerText:{
        width: '100%',
        fontWeight: 'bold',
        letterSpacing: 1,
        fontSize: 20,
        color: '#333'
    },
    icon:{
        position: 'absolute',
        left: 4
    },
    headerImage:{
        width: 26,
        height: 26,
        marginHorizontal: 10
    }
})