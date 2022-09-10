import React from 'react';
import { Text, View } from 'react-native';
import { SelectPet, Today } from '../assets/values';
import { styles } from './../assets/styles';

function Appointment(props) {
    return (
        <View style={{marginHorizontal:20,marginTop:10}}>
            <Text>{Today('bn')} </Text>
            <Text style={[styles.mediumText,{color:'#7267D1',marginTop:30}]}>
                {SelectPet('bn')}
            </Text>
        </View>
    );
}

export default Appointment;