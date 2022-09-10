import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import { FontAwesome,MaterialIcons } from '@expo/vector-icons';
import Profile from '../../assets/Profile.jpeg'


const DashboardHeader = () => {
    return (
            <View style={styles.Box}>
                <View style={{flex:1, marginLeft:20}}>
                    <Text>Logo</Text>
                </View>
                <TouchableOpacity style={{flexDirection:'row'}}>
                    <FontAwesome name="bell" size={30} color="#FFC300" />
                    <View style={styles.Notification}>
                        <Text style={{color:'white'}}>2</Text>
                    </View>
                </TouchableOpacity>
                <View style={{width:10}}></View>
                <View style={styles.ViewAmount}>
                    <View style={styles.ViewAmountBoxIcon}>
                    <MaterialIcons name="attach-money" size={22} color="#5719E8" />
                    </View>
                    <Text style={styles.ViewAmountText}>500</Text>
                </View>
                <TouchableOpacity  style={styles.Profile}>
                <Image source={Profile} style={{ width: 52, height: 52, borderRadius:26 }} /> 
                </TouchableOpacity>
            </View>
    );
};

export default DashboardHeader;

const styles = StyleSheet.create({
    Box: {
        flexDirection: 'row',
        alignItems:'center',
        display:'flex',
        marginTop:30,
    },
    ViewAmount:{
        height:30,
        backgroundColor:'#7267D1',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
         },
    ViewAmountBoxIcon:{

        width:25,
        marginLeft:5,
        borderRadius:12.5,
        backgroundColor:'white',
    },
    ViewAmountText:{
        fontSize:20,
        marginLeft:10,
        marginRight:10,
        color:'white',
    },
    Profile:{
        height:55,
        width:55,
        borderRadius:32.5,
        marginLeft:10,
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        marginRight:20,
        borderColor:'#7267D1'
    },
    Notification:{
        backgroundColor:'red',
        position:'absolute',
        height:15,
        width:15,
        borderRadius:7.5,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:15,
    }
});