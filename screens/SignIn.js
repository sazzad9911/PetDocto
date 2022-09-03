import React from 'react';
import {View,Text,useColorScheme, TouchableOpacity} from 'react-native';
import { textColor } from './../assets/colors';
import { styles } from './../assets/styles';
import { AppName } from './../assets/values';



const SignIn = ({navigation}) => {
    
    return (
       <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')}>
         <Text style={[styles.largeText,{
            color:textColor('light'),
            marginTop:'40%',
            textAlign:'center',
        }]}>{AppName('en')}</Text>
       </TouchableOpacity>
    );
};

export default SignIn;