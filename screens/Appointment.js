import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MakeAudioCall, MakeVideoCall, SelectPet, Symptoms, Today, VideoCall,AudioCall,Prescription, MakePrescription } from '../assets/values';
import Dropdown from '../components/Dropdown';
import { styles } from './../assets/styles';
import { Ionicons } from '@expo/vector-icons'; import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

function Appointment(props) {
    return (
        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
            <Text>{Today('bn')} </Text>
            <Text style={[styles.mediumText, { color: '#7267D1', marginTop: 30 }]}>
                {SelectPet('bn')}
            </Text>
            <View style={{ marginTop: 10 }}>
                <Dropdown DATA={[
                    'Jack', 'Mack'
                ]} />
            </View>
            <View style={{ height: 80, width: '100%', borderWidth: 2, borderColor: '#7267D1', marginTop: 10, borderRadius: 5, padding: 10 }}>
                <Text style={{ color: '#7267D1' }}>{Symptoms('bn')}</Text>
                <TextInput style={{ height: 30, width: 300 }}></TextInput>
            </View>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons style={{ width: '15%' }} name="checkmark" size={40} color="#7267D1" />
                <View style={art.miniBox}>
                    <View style={art.iconView}>
                        <FontAwesome name="video-camera" size={40} color="#7267D1" />
                    </View>

                    <View style={art.textBox}>
                        <Text style={art.bigText}> {VideoCall('bn')}</Text>
                        <Text style={art.smallText}> {MakeVideoCall('bn')}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons style={{ width: '15%' }} name="checkmark" size={40} color="#7267D1" />
                <View style={art.miniBox}>
                    <View style={art.iconView}>
                    <Ionicons name="call" size={40} color="#7267D1" />
                    </View>

                    <View style={art.textBox}>
                        <Text style={art.bigText}> {AudioCall('bn')}</Text>
                        <Text style={art.smallText}> {MakeAudioCall('bn')}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons style={{ width: '15%' }} name="checkmark" size={40} color="#7267D1" />
                <View style={art.miniBox}>
                    <View style={art.iconView}>
                    <FontAwesome5 name="prescription" size={40} color="#7267D1" />
                    </View>

                    <View style={art.textBox}>
                        <Text style={art.bigText}> {Prescription('bn')} </Text>
                        <Text style={art.smallText}> {MakePrescription('bn')}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Appointment;
const art = StyleSheet.create({
    miniBox: {
        height: 90,
        width: '85%',
        borderWidth: 2,
        borderColor: '#7267D1',
        marginTop: 10,
        borderRadius: 5,
        flexDirection: 'row',
        paddingBottom:5,
        paddingLeft:5,
        paddingRight:5

    },
    iconView: {
        height: 80,
        alignItems:'center',
        justifyContent:'center',
        
        width:'15%'
    },
    bigText: {
        fontSize: 16,
        color: '#7267D1',
        fontWeight:'600'
    },
    smallText: {
        fontSize: 10,
        color: '#7267D1',
    },
    textBox:{
        width:'85%',
        marginLeft:10,
        paddingRight:5,
    }
})