import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,StatusBar } from 'react-native';
import { AntDesign, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { CelenderText } from '../../assets/values';

const CalenderHeader = (props) => {
    return (
        <View style={styles.Box}>
<StatusBar backgroundColor={'#7267D1'} barStyle='light-content'/>
            <TouchableOpacity style={styles.IconView}>
                <AntDesign onPress={()=>{
                        props.navigation.goBack()
                    }} name="left" size={24} color="#7267D1" />
            </TouchableOpacity>

            <Text style={{ fontSize: 22, color: 'white', marginLeft: 10,textAlign:'center' }}>
               
                {CelenderText('bn')}
                </Text>
        </View>
    );
};

export default CalenderHeader;


const styles = StyleSheet.create({
    Box: {
        flexDirection: 'row',
        display: 'flex',      
        alignItems:'center',
        backgroundColor: '#7267D1',
        paddingVertical:5,
        paddingTop:30,
       
    },
    IconView: {
        height: 30,
        width: 30,
        borderRadius:15,
        backgroundColor: 'white',
        marginLeft: 20,
        alignItems: 'center',
        justifyContent:'center',

        marginTop:5
    },
});