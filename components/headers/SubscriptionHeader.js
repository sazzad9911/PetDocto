import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from '../../assets/styles';
import { SubscriptionHeaderTitle } from '../../assets/values';
 
const SubscriptionHeader = () => {
    return (

        <View style={art.Box}>
            <StatusBar backgroundColor={'#7267D1'} barStyle='light-content'/>
            <FontAwesome style={{ marginRight:10 }} name="chevron-circle-left" size={30} color="#fff" />
            <View style={{alignItems:'center',justifyContent:'center'}}>

                <Text style={{ color: '#fff',textAlign:'center', fontSize:22}}> {SubscriptionHeaderTitle('bn') } </Text>

            </View>
        </View>
    );
};

export default SubscriptionHeader;


const art = StyleSheet.create({
    Box: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        height: 80, 
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