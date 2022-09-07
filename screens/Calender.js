import React from 'react';
import {Scrollbar,Text, ScrollView} from 'react-native';
import { styles } from '../assets/styles';
import DrSchedule from '../components/cart/DrSchedule';
DrSchedule
const Calender = () => {
    return (
        <ScrollView style={{margin:10}}>
            <Text style={[styles.mediumText,{marginLeft:10, color:'#7267D1'}]}>Today, 8 July, 2021 </Text>
        <DrSchedule/>
        <Text style={[styles.mediumText,{marginLeft:10, color:'#7267D1'}]}>Today, 8 July, 2021 </Text>
        <DrSchedule/>
        <Text style={[styles.mediumText,{marginLeft:10, color:'#7267D1'}]}>Today, 8 July, 2021 </Text>
        <DrSchedule/>
        <Text style={[styles.mediumText,{marginLeft:10,color:'#7267D1'}]}>Today, 8 July, 2021 </Text>
        <DrSchedule/>
        </ScrollView>
    );
};

export default Calender;