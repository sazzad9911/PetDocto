import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { DrNumber, OnlineDr, Top10Doctor } from '../assets/values';
import DrCart from '../components/cart/DrCart';
import Search from '../components/Search';

const Home = () => {
    return (
        <ScrollView style={{
            margin: 10
        }}>
            <View style={{
                marginTop: '20%'
            }}>
                <Search />
            </View>
            <View style={{
                flexDirection: 'row',
                marginLeft: 10,
                marginRight: 10,
                alignItems: 'center'


            }}>
                <Text style={{
                    color: '#7267D1',
                    flex: 2,
                }}>
                    {Top10Doctor('bn')}
                </Text>
                <View style={art.line}>

                </View>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <DrCart />
                <DrCart />
                <DrCart />
                <DrCart />
                <DrCart />
            </ScrollView>
            <View style={{
                flexDirection: 'row',
                marginLeft: 10,
                marginRight: 10,
                alignItems: 'center'


            }}>
                <View style={{
                    height: 20,
                    width: 70,
                    borderRadius: 5,
                    backgroundColor: 'red',
                    flex: 2,
                    alignItems: 'center'
                }}>
                    <Text>
                        {DrNumber('bn')}
                    </Text>
                </View>
                <Text style={{
                    color: '#7267D1',
                    flex: 6,
                    marginLeft: 5
                }}>
                    {OnlineDr('bn')}
                </Text>
                <View style={{
                    height: 2,
                    backgroundColor: '#7267D1',
                    flex: 3,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 5,
                }}>

                </View>
            </View>
        </ScrollView>
    );
};

export default Home;

const art = StyleSheet.create({
    line: {
        height: 2,
        backgroundColor: '#7267D1',
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,

    }
})