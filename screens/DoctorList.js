import React from 'react';
import { Scrollbar, ScrollView, Text, View } from 'react-native';
import Search from '../components/Search';
import Circle from '../components/cart/Circle';
import DrCart from '../components/cart/DrCart';
const DoctorList = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{
            marginLeft: 10,
            marginTop:10,
        }}>
            <View>
                <Search />
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </ScrollView>
            <View style={{
                flexDirection: 'row'
            }}>
                <DrCart />
                <DrCart />
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <DrCart />
                <DrCart />
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <DrCart />
                <DrCart />
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <DrCart />
                <DrCart />
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <DrCart />
                <DrCart />
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <DrCart />
                <DrCart />
            </View>
        </ScrollView>
    );
};

export default DoctorList;