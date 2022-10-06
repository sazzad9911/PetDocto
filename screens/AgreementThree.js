import React from 'react';
import { View,Text,StyleSheet,TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../assets/styles';
function AgreementThree(props) {
    return (
        <View>
            <Ionicons onPress={() => {
                props.navigation.goBack()
            }} name="chevron-back-circle" size={35} color="#7267D1" />
            <View style={art.tabBox}>
                <View style={[art.tabCircle, { backgroundColor: "#7267D1", }]}>
                    <Text style={[art.tabText, { color: '#fff', }]}>1 </Text>
                </View>
                <View style={[art.tabLine,{backgroundColor: '#7267D1'}]}>

                </View>
                <View style={[art.tabCircle, { backgroundColor: "#7267D1" }]}>
                    <Text style={[art.tabText, { color: '#fff', }]}>2 </Text>
                </View>
                <View style={[art.tabLine,{backgroundColor: '#7267D1'}]}>

                </View>
                <View style={[art.tabCircle, { backgroundColor: "#7267D1" }]}>
                    <Text style={[art.tabText, { color: '#fff', }]}>3 </Text>
                </View>
            </View>
            <View style={{alignItems:'center',marginTop:20}}>
            <Text style={[styles.largeText,{color:'#7267D1'}]}>Terms & Conditions</Text>

            </View>
        </View>
    );
}

export default AgreementThree;
const art = StyleSheet.create({
    tabBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    tabCircle: {
        height: 35,
        width: 35,
        borderRadius: 17.5,

        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },
    tabText: {

        fontWeight: '800',
        fontSize: 18,
        textAlign: 'center',

    },
    tabLine: {
        height: 4,
        width: 50,
        

    },
    nameInput: {
        height: 30,
        marginTop: 5,
        borderRadius: 5,
        padding: 5,
        backgroundColor: '#fff',
        width: '100%'
    },
})