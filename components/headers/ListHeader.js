import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign, MaterialIcons,FontAwesome } from '@expo/vector-icons';
import { ListText } from '../../assets/values';


const ListHeader = () => {
    return (
        <View style={styles.Box}>
            <TouchableOpacity style={styles.IconView}>
                <AntDesign name="left" size={30} color="#7267D1" />
            </TouchableOpacity>

            <View>
                <Text style={{fontSize:25, color:'white', marginLeft:10,}}>{ListText('')}</Text>
            </View>

            <TouchableOpacity style={{flexDirection:'row', marginLeft:10}}>
                    <FontAwesome name="bell" size={25} color="#FFC300" />
                    <View style={styles.Notification}>
                        <Text style={{color:'#7267D1',textAlign:'center',fontSize:8,fontWeight:'bold'}}>2</Text>
                    </View>
                </TouchableOpacity>

            <View style={styles.ViewAmount}>
                    <View style={styles.ViewAmountBoxIcon}>
                    <MaterialIcons name="attach-money" size={20} color="#5719E8" />
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
        height: 80,
        backgroundColor: '#7267D1',
        paddingTop:20
    },
    IconView: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: 'white',
        marginLeft: 20,
        alignItems: 'center',
        justifyContent:'center',
    },
    ViewAmount:{
        height:30,
        backgroundColor:'white',
        borderRadius:15,
       
        flexDirection:'row',
        marginLeft:10,
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
        textAlign:'center'
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
        textAlign:'center'
    }
});