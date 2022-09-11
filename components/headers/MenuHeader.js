import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { HistoryText } from '../../assets/values';
import profile from "../../assets/Profile.jpeg"


const MenuHeader = () => {
    return (
        <View>
            <View style={styles.Box}>
                <TouchableOpacity style={styles.Profile}>
                    <View style={styles.ProfileView}>
                        <Image source={profile} style={{ width:53, height:53, borderRadius:26.5 }} />
                    </View>

                    <View style={{ justifyContent: 'center', }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Naymul Islam</Text>
                        <Text>01855779058</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.MenuIcon}>
                    <AntDesign name="logout" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.ProfileLin}></View>
        </View>
    );
};

export default MenuHeader;

const styles = StyleSheet.create({
    Box: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        height: 100,
        marginLeft: 5,
        marginRight: 5,
        paddingTop:20
    },
    Profile: {
        height:55,
        width:220,
        backgroundColor: '#DED1E9',
        marginLeft:10,
        borderRadius: 35,
        flexDirection: 'row',

    },
    ProfileView: {
        height:55,
        width:55,
        borderRadius:32.5,
        
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        marginRight:10,
        borderColor:'#7267D1'
    },
    ProfileLin: {
        height: 3,
        width: '100%',
        backgroundColor: '#676CFF',
    },
    MenuIcon: {
        height: 40,
        width: 40,
        backgroundColor: '#AC79F6',
        marginLeft: '20%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});