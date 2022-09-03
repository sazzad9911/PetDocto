import React from 'react';
import {View,Text,useColorScheme } from 'react-native';
import { textColor } from './../assets/colors';
import { styles } from './../assets/styles';
import { AppName } from './../assets/values';


const SignIn = () => {
    
    return (
        <Text style={[styles.largeText,{
            color:textColor('light'),
            marginTop:'40%',
            textAlign:'center',
        }]}>{AppName('en')}</Text>
    );
};

export default SignIn;