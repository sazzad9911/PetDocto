import React from 'react';
import {
    View, Text, ScrollView,
    StyleSheet, TouchableOpacity, Image, SafeAreaView,Platform
} from 'react-native';
import { FontAwesome,MaterialIcons } from '@expo/vector-icons';
import profile from "/Users/macbookpro/Documents/GitHub/PetDocto/assets/Profile.jpeg"



const DashboardHeader = () => {
    return (
            <View style={styles.Box}>
                <View style={{flex:1}}>
                    <Text>Logo</Text>
                </View>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    flex:1,
                    alignItems:'center'
                }}>
                <TouchableOpacity style={{flexDirection:'row'}}>
                    <FontAwesome name="bell" size={24} color="#FFC300" />
                    <View style={styles.Notification}>
                        <Text style={{color:'white'}}>2</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.ViewAmount}>
                    <View style={styles.ViewAmountBoxIcon}>
                    <MaterialIcons name="attach-money" size={20} color="#5719E8" />
                    </View>
                    <Text style={styles.ViewAmountText}>500</Text>
                </View>
                <TouchableOpacity>
                <Image source={profile} style={{ 
                    width: 45,
                     height: 45, 
                     borderRadius:25,
                     borderWidth:2,
                     borderColor:'#5719E8'
                      }} /> 
                </TouchableOpacity>
                </View>
            </View>
    );
};

export default DashboardHeader;

const styles = StyleSheet.create({
    Box: {
        flexDirection: 'row',
        alignItems:'center',
        paddingTop:35,
        paddingBottom:5,
        shadowOffset:{
            width:1,height:1
        },
        shadowRadius:2,
        elevation:2,
        shadowColor:'#777777',
        shadowOpacity:.1,
        backgroundColor:'white',
        paddingLeft:10,
        paddingRight:10
    },
    ViewAmount:{
        backgroundColor:'#7267D1',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:5,
        justifyContent:'space-between',
        paddingVertical:Platform.OS=='ios'?5:2
    },
    ViewAmountBoxIcon:{
        height:20,
        width:20,
        borderRadius:12.5,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    ViewAmountText:{
        fontSize:16,
        color:'white',
        marginLeft:5,
        marginRight:5
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