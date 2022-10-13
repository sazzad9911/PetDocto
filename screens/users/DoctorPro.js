import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function DoctorPro(props) {
    return (
        <View style={{ padding: 30 }}>
            <View style={art.tiniBox}>
                <Text style={{fontSize:18}}>
                    Total Erning
                </Text>
                <View style={{ flexDirection: 'row',alignItems:'center',justifyContent:'center' }}>
                    <FontAwesome name="dollar" size={14} color="black" />
                    <Text>
                        89,000 BDT
                    </Text>
                </View>
            </View>
            <View style={art.tiniBox}>
                <Text style={{fontSize:18}}>
                    Total Erning
                </Text>
                <View style={{ flexDirection: 'row',alignItems:'center',justifyContent:'center' }}>
                    <FontAwesome name="dollar" size={14} color="black" />
                    <Text>
                        89,000 BDT
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default DoctorPro;

const art = StyleSheet.create({
    tiniBox: {
        padding: 10,
        width: '40%',
        backgroundColor: 'red',
        width: 130,
        alignItems:'center'
    }
})