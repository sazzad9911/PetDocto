import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign, MaterialIcons,FontAwesome } from '@expo/vector-icons';


const ListHeader = () => {
    return (
        <View style={styles.Box}>
            <TouchableOpacity style={styles.IconView}>
                <AntDesign name="left" size={30} color="#7267D1" />
            </TouchableOpacity>

            <View>
                <Text style={{fontSize:30, color:'white', marginLeft:20,}}>সকল ডাক্তার</Text>
            </View>

            <TouchableOpacity style={{flexDirection:'row', marginLeft:25}}>
                    <FontAwesome name="bell" size={30} color="#FFC300" />
                    <View style={styles.Notification}>
                        <Text style={{color:'#7267D1'}}>2</Text>
                    </View>
                </TouchableOpacity>

            <View style={styles.ViewAmount}>
                    <View style={styles.ViewAmountBoxIcon}>
                    <MaterialIcons name="attach-money" size={24} color="#5719E8" />
                    </View>
                    <Text style={styles.ViewAmountText}>500</Text>
                </View>
        </View>
    );
};

export default ListHeader;

const styles = StyleSheet.create({
    Box: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        height: 60,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#7267D1',
    },
    IconView: {
        height: 35,
        width: 35,
        borderRadius: 17.5,
        backgroundColor: 'white',
        marginLeft: 20,
        alignItems: 'center',
        justifyContent:'center',
    },
    ViewAmount:{
        height:30,
        backgroundColor:'white',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginLeft:20,
    },
    ViewAmountBoxIcon:{
        height:25,
        width:25,
        marginLeft:5,
        borderRadius:12.5,
        backgroundColor:' #7267D1',
        borderColor:' #7267D1',
    },
    ViewAmountText:{
        fontSize:25,
        marginLeft:10,
        marginRight:10,
        color:'#7267D1',
    },
    Notification:{
        backgroundColor:'white',
        position:'absolute',
        height:15,
        width:15,
        borderRadius:7.5,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:15,
    }
});