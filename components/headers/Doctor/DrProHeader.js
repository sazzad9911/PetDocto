import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import profile from "../../../assets/Profile.jpeg";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../../../assets/styles'

function DrProHeader(props) {
    return (
        <View style={{
            flexDirection: 'row',
            paddingTop: 35,
            justifyContent:'space-between',
            paddingRight:20,
        }}>
            <View style={art.dox}>
                <View>
                    <TouchableOpacity style={art.Profile}>
                        <View style={art.ProfileView}>
                            <Image source={profile} style={{ width: 57, height: 57, borderRadius: 28.5 }} />
                        </View>

                        <View style={{ justifyContent: 'center', }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>4.8</Text>
                                <Text style={{
                                    color: '#d9d9d9',
                                    fontSize: 12,
                                    marginLeft: 5,
                                }}>(126 Rating)</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Entypo name="star" size={16} color="#fff" />
                                <Entypo name="star" size={16} color="#fff" />
                                <Entypo name="star" size={16} color="#fff" />
                                <Entypo name="star" size={16} color="#fff" />
                                <Entypo name="star" size={16} color="#fff" />
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
            <View style={{}}>
                <View style={{ flexDirection: 'row',justifyContent:'flex-end' }}>
                    <Ionicons name="sunny" size={24} color="#ff9900" />
                    <Text style={[styles.mediumText, {color:'#7267D1'}]}>
                        Good morning
                    </Text>
                </View>
                <Text style={{color:'#7267D1',textAlign:'right'}}>
                    Anisur Rahman
                </Text>

            </View>


        </View>
    );
}

export default DrProHeader;

const art = StyleSheet.create({
    Profile: {
        height: 50,
        width: 180,
        backgroundColor: '#7267D1',
        marginLeft: 10,
        borderRadius:25,
        flexDirection: 'row',
        alignItems: 'center'

    },
    ProfileView: {
        height: 60,
        width: 60,
        borderRadius: 30,

        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderColor: '#7267D1'
    },
    

});