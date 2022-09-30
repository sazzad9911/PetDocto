import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,StatusBar } from 'react-native';
import { AntDesign, MaterialIcons, FontAwesome } from '@expo/vector-icons';

import { SubscriptionPlanHeaderTitle } from '../../assets/values';

const SubscriptionPlanHeader = (props) => {
    return (
        <View style={styles.Box}>
<StatusBar backgroundColor={'#7267D1'} barStyle='light-content'/>
            <TouchableOpacity style={{flex:1}}>
            <TouchableOpacity style={styles.IconView}>
                <AntDesign onPress={()=>{
                        props.navigation.goBack()
                    }} name="left" size={24} color="#7267D1" />
            </TouchableOpacity>
            </TouchableOpacity>

            <Text style={{ fontSize: 22, color: 'white',flex:9,textAlign:'center', }}>
               
                {SubscriptionPlanHeaderTitle('bn')}
                </Text>
        </View>
    );
};

export default SubscriptionPlanHeader;


const styles = StyleSheet.create({
    Box: {
        flexDirection: 'row',
        display: 'flex',      
        alignItems:'center',
        backgroundColor: '#7267D1',
        paddingVertical:5,
        textAlign:'center',
       
    },
    IconView: {
        height: 30,
        width: 30,
        borderRadius:15,
        backgroundColor: 'white',
        marginLeft:10,
        alignItems: 'center',
        justifyContent:'center',

    },
});