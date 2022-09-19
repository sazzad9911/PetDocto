import React from 'react';
import { View, Image, TouchableOpacity, ScrollView,StatusBar } from 'react-native';
import Gold from '../components/cart/Subscription/Gold';
import Platinum from '../components/cart/Subscription/Platinum';
import  Silver  from '../components/cart/Subscription/Silver';


const Subscription = (props) => {
    return (
        <ScrollView>
            
            <View style={{marginHorizontal:10}}>
            <Silver />
            <Platinum/>
            <Gold/>
            </View>
            
        </ScrollView>
    );
}

export default Subscription;