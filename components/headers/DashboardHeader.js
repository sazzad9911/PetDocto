import React from 'react';
import {
    View, Text, ScrollView,
    StyleSheet, TouchableOpacity, Image,
} from 'react-native';
import { FontAwesome,MaterialIcons } from '@expo/vector-icons';
import profile from "/Users/macbookpro/Documents/GitHub/PetDocto/assets/Profile.jpeg"



const DashboardHeader = () => {
    return (
        <ScrollView >
            <View style={styles.Box}>
                <View>
                    <Text>Logo</Text>
                </View>
                <TouchableOpacity>
                    <FontAwesome name="bell" size={30} color="#CFE313" />
                </TouchableOpacity>
                <View style={styles.ViewAmount}>
                    <View style={styles.ViewAmountBoxIcon}>
                    <MaterialIcons name="attach-money" size={24} color="#5719E8" />
                    </View>
                    <Text style={styles.ViewAmountText}>500</Text>
                </View>
                <TouchableOpacity  style={styles.Profile}>
                <Image source={profile} style={{ width: 60, height: 60, borderRadius:30 }} /> 
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default DashboardHeader;

const styles = StyleSheet.create({
    Box: {
        marginTop: 30,
        margin: 20,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
    },
    ViewAmount:{
        height:30,
        marginLeft:15,
        backgroundColor:'#5719E8',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    ViewAmountBoxIcon:{
        height:25,
        width:25,
        marginLeft:5,
        borderRadius:12.5,
        backgroundColor:'white',
    },
    ViewAmountText:{
        fontSize:25,
        marginLeft:10,
        marginRight:10,
        color:'white',
    },
    Profile:{
        height:65,
        width:65,
        borderRadius:32.5,
        marginLeft:20,
        backgroundColor:'#5719E8',
        justifyContent:'center',
        alignItems:'center',
    },
});