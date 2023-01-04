import React, { useEffect, useRef, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar,Image,Modal,TouchableOpacity} from 'react-native';
import colors from '../../assets/theme/colors';
const SplashScreen = () => {

    return (
        <View style={style.maincontainer}>
            <StatusBar backgroundColor="#FA9A5B" barStyle="dark-content" />
            <View style={style.logo}>
            <Image source={require('../../assets/images/logo.jpg')}style={{ width: 160, height: 160, borderRadius:100,  }} />
            </View>    
        </View>

    )
}

const style = StyleSheet.create({

    maincontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:colors.primary,
    },
    logo: {
        width: 160,
        height: 160,
        borderRadius:100,
        // borderWidth: 7,
        borderColor: '#707070',
        backgroundColor: '#eee',
        
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    }
})


export default SplashScreen;