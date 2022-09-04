import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './../assets/styles';
import { Ionicons } from '@expo/vector-icons';

function Input(props) {
    return (
        <View style={{
            height: 45,
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:10
        }}>
            <View style={{
                height: 45,
                width: 20,
                backgroundColor: '#D7D4F2',
                flex: 1,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {props.Icon}
            </View>
            <View style={{
                width: 3
            }}>

            </View>
            <TextInput onFocus={props.onFocus ? props.onFocus : () => {
                console.log('press')
            }} onChangeText={props.onChange} placeholder={props.placeholder} style={{
                height: 45,
                width: 20,
                backgroundColor: '#D7D4F2',
                flex: 4,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                padding: 5
            }}>

            </TextInput>
        </View>
    );
}

export default Input;