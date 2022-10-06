import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../assets/styles';
import {
    Button,
    Checkbox,
    Flex,
    List,
    WingBlank,
} from '@ant-design/react-native'
const AgreeItem = Checkbox.AgreeItem

function DoctorsAgreement(props) {
    return (
        <View style={{ margin: 10,}}>
            <Ionicons onPress={()=>{
                        props.navigation.goBack()
                    }} name="chevron-back-circle" size={35} color="#7267D1" />
            <View style={{alignItems:'center' }}>
            <View style={art.pic}>
                <Image style={{
                    height: 180,
                    width: 180,
                }} source={require('../assets/dr.png')} />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={[styles.largeText, { textAlign: 'center', marginTop: 30 }]}>Become a "PetDoctos's" doctor</Text>
                <Text style={{ textAlign: 'center', color: '#808080', marginTop: 10 }}> Join Bangladesh's largest online pet doctor platform </Text>
            </View>
            <View>

                <AgreeItem style={{ marginTop: 20, paddingRight: 10 }}>
                    By ticking, you are confirming that you have read, understood and agree to "PetDocto's" term and conditions.
                </AgreeItem>

            </View>
            <TouchableOpacity onPress={() => {props.navigation.navigate('AgreementOne')}} style={art.nextButton}>
                <Text style={{fontSize:20,fontWeight:'700',color:'#fff'}}>NEXT</Text>
                <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
            </TouchableOpacity>
            </View>
        </View>
    );
}

export default DoctorsAgreement;

const art = StyleSheet.create({
    pic: {
        alignItems: 'center',
        marginTop: 20
    },
    nextButton: {
        height: 45,
        width: '30%',
        borderRadius: 10,
        backgroundColor: '#7267D1',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        marginTop:60
    }
})