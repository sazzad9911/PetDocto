import React from 'react';
import { TouchableOpacity, Text, SafeAreaView, View, TextInput, } from 'react-native';

function Button(props) {
    return (
        <TouchableOpacity onPress={props.onPress} disabled={props.disable} style={{
            height: 45,
            width: '80%',
            borderColor:'#808080', 
            borderWidth: 1,
            borderRadius:10,
            
            alignItems: 'center',
            marginTop: 30,
            marginBottom: 10,
            flexDirection: 'row',
            
            justifyContent:'center',
            backgroundColor:props.disable?'transparent':'#7267D1',
            
            
        }}>
        <Text style={{
            color:!props.disable?'white':'black',
            fontWeight:'bold',
        }} >
            {props.buttonName}
        </Text>
        </TouchableOpacity>
    );
}

export default Button;