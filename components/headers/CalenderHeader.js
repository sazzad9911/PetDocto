import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { CelenderText } from '../../assets/values';

const CalenderHeader = () => {
    return (
        <View style={styles.Box}>

            <TouchableOpacity style={styles.IconView}>
                <AntDesign name="left" size={30} color="#7267D1" />
            </TouchableOpacity>

            <Text style={{ fontSize: 25, color: 'white', marginLeft: 10, }}>
               
                {CelenderText('bn')}
                </Text>
        </View>
    );
};

export default CalenderHeader;


const styles = StyleSheet.create({
    Box: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        height: 60,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#7267D1',
    },
    IconView: {
        height: 35,
        width: 35,
        borderRadius: 17.5,
        backgroundColor: 'white',
        marginLeft: 20,
        alignItems: 'center',
        justifyContent:'center',
    },
});