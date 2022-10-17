import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


function DoctorPro(props) {
    return (
        <View >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, paddingTop: 30, }}>
                <View style={art.tiniBox}>
                    <Text style={{ fontSize: 14 }}>
                        Total Erning
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <FontAwesome name="dollar" size={14} color="black" />
                        <Text style={{ marginLeft: 5 }}>
                            89,000 BDT
                        </Text>
                    </View>
                </View>
                <View style={art.tiniBox}>
                    <Text style={{ fontSize: 14 }}>
                        Consultant
                    </Text>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 8 }}>
                            (last Month)
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name="checkmark-circle" size={16} color="#7267D1" />
                            <Text style={{ marginLeft: 5, fontSize: 14 }}>
                                51
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={art.boxRow}>
                <View style={art.tiniBox}>
                    <Text style={{ fontSize: 14 }}>
                        Total Cases
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons name="checkmark-circle" size={16} color="#7267D1" />
                        <Text style={{ marginLeft: 5 }}>
                            287
                        </Text>
                    </View>
                </View>
                <View style={art.tiniBox}>
                    <Text style={{ fontSize: 14 }}>
                        Total Consultant
                    </Text>
                    <View style={{ alignItems: 'center' }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name="checkmark-done" size={18} color="#7267D1" />
                            <Text style={{ marginLeft: 5, fontSize: 14 }}>
                                287
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={art.boxRow}>
                <View style={art.tiniBox}>
                    <Text style={{ fontSize: 14 }}>
                        Pending Cases
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <MaterialIcons name="pending" size={16} color="#7267D1" />
                        <Text style={{ marginLeft: 5 }}>
                            6
                        </Text>
                    </View>
                </View>
                <View style={art.tiniBox}>
                    <Text style={{ fontSize: 14 }}>
                        Upcoming Schedule
                    </Text>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name="checkmark-circle" size={16} color="#7267D1" />
                            <Text style={{ marginLeft: 5, fontSize: 14 }}>
                                8
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <View style={art.yourBox}>
                    <Text style={{ fontSize: 18, color: '#fff' }}>
                        Your Available Time
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: '10%', marginTop: 10, justifyContent: 'space-between', marginRight: '10%' }}>
                    <View style={art.timeBox}>
                        <Text style={{ color: '#fff', fontSize: 12 }}>8.00 AM - 9.00 AM</Text>
                    </View>
                    <View style={art.timeBox}>
                        <Text style={{ color: '#fff', fontSize: 12 }}>8.00 AM - 9.00 AM</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: '5%', marginTop: 10, justifyContent: 'space-between', marginRight: '5%',marginTop:30 }}>
                <TouchableOpacity style={art.actionBox1}>
                    <Feather name="check-circle" size={24} color="#fff" />
                    <Text style={{ color: '#fff', fontSize: 18, marginLeft: 5 }}>SET NOW</Text>

                </TouchableOpacity>
                <TouchableOpacity style={art.actionBox2}>
                    <Text style={{ color: '#fff', fontSize: 18, marginRight: 5 }}>REMOVE ALL</Text>
                    <AntDesign name="delete" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default DoctorPro;

const art = StyleSheet.create({
    tiniBox: {
        padding: 5,
        width: '48%',
        backgroundColor: '#E0DAF7',

        alignItems: 'center',
        borderRadius: 10
    },

    boxRow: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    yourBox: {
        width: '80%',
        height: 50,
        textAlign: 'center',
        backgroundColor: '#7267D1',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '10%',
        marginTop: 50,
        borderRadius: 25
    },
    timeBox: {
        height: 40,
        padding: 5,
        backgroundColor: '#7267D1',
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        borderRadius: 20,
    },
    actionBox1: {
        height: 50,
        width: '48%',
        backgroundColor: '#7267D1',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,


    },
    actionBox2: {
        height: 50,
        width: '48%',
        backgroundColor: '#7267D1',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25


    }
})