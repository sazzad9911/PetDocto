import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from '../../assets/styles';

const AppointmentHeader = () => {
    return (

        <View style={art.Box}>
            <FontAwesome style={{ marginRight: 40 }} name="chevron-circle-left" size={30} color="#fff" />
            <View style={{alignItems:'center'}}>

                <Text style={[styles.largeText, { color: '#fff' }]}>Appointment </Text>

            </View>
        </View>
    );
};

export default AppointmentHeader;


const art = StyleSheet.create({
    Box: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        height: 60,
        marginTop: 30,
        backgroundColor: '#7267D1',
        paddingHorizontal: 20

    },
    IconView: {
        height: 35,
        width: 35,
        borderRadius: 17.5,
        backgroundColor: 'white',
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 40

    },

});