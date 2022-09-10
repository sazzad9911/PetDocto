import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { CelenderText } from '../../assets/values';

const CalenderHeader = () => {
    return (
        <View style={styles.Box}>

            <TouchableOpacity style={styles.IconView}>
                <AntDesign name="left" size={24} color="#7267D1" />
            </TouchableOpacity>

            <Text style={{ fontSize: 25, color: 'white', marginLeft: 10,textAlign:'center' }}>
               
                {CelenderText('bn')}
                </Text>
        </View>
    );
};

export default CalenderHeader;


const styles = StyleSheet.create({
    Box: {
        flexDirection: 'row',
        paddingTop:35,
        display: 'flex',
        height: 80,
        
        backgroundColor: '#7267D1',
       
    },
    IconView: {
        height: 30,
        width: 30,
        borderRadius:15,
        backgroundColor: 'white',
        marginLeft: 20,
        alignItems: 'center',
        justifyContent:'center',

        marginTop:5
    },
});