
import { Platform ,View,Text,StyleSheet,TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../assets/styles';
import Button from '../components/button/Button'
import React, { useState, useEffect } from 'react';



function AgreementTwo(props) {
    const [text, onChangeText] = React.useState(null);
  
    return (
        <View style={{margin:10}}>
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
                <View style={[art.tabLine,{backgroundColor: '#fff'}]}>

                </View>
                <View style={[art.tabCircle, { backgroundColor: "#fff" }]}>
                    <Text style={[art.tabText, { color: '#7267D1', }]}>3 </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center' }}>
                <Text style={[styles.mediumText, {fontSize:18}]}> Identity Verification</Text>
                <View style={{
                    width: '50%',
                    height: 2,
                    backgroundColor: '#7267D1',
                    marginLeft: 10,

                }}></View>
            </View>
            <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Text style={styles.mediumText}>Present Workplace Name</Text>
                <TextInput
                    style={art.nameInput}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Ex:Chottogram Clinic"

                />
            </View>
            
            <View style={{alignItems:'center'}}>
                <Button onPress={() => {props.navigation.navigate('AgreementThree')}} buttonName='NEXT' />
            </View>
            
        </View>
    );
}

export default AgreementTwo;
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