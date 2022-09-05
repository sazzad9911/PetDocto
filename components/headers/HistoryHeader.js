import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign, MaterialIcons,FontAwesome } from '@expo/vector-icons';
import { HistoryText } from '../../assets/values';



const HistoryHeader = () => {
    return (
        <View style={styles.Box}>
            <TouchableOpacity style={styles.IconView}>
                <AntDesign name="left" size={30} color="white" />
            </TouchableOpacity>

            <View>
                <Text style={{fontSize:25, color:'black', marginLeft:10,}}>{HistoryText('en')}</Text>
            </View>
        </View>
    );
};

export default HistoryHeader;

const styles = StyleSheet.create({
    Box: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        height: 60,
        marginLeft: 5,
        marginRight: 5,
    },
    IconView: {
        height: 35,
        width: 35,
        borderRadius: 17.5,
        backgroundColor: '#7267D1',
        marginLeft: 20,
        alignItems: 'center',
        justifyContent:'center',
    },
});