import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { CommonMed, DrNumber, OnlineDr, SeeAll, SymptomsSolution, Top10Doctor } from '../assets/values';
import DrCart from '../components/cart/DrCart';
import Search from '../components/Search';
import { AntDesign } from '@expo/vector-icons';
import { styles } from '../assets/styles';
import Circle from '../components/cart/Circle';
import Square from '../components/cart/Square';

const Home = (props) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{
            margin: 10,

        }}>

            <View style={{
                marginTop: '10%'
            }}>
                <Search />
            </View>
            <View style={{
                alignItems: 'center'
            }}>
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
                    <DrCart  onPress={() => {props.navigation.navigate('Doctor Profile')}} />
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
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <DrCart />
                    <DrCart />
                    <DrCart />
                    <DrCart />
                    <DrCart />
                </ScrollView>
                <TouchableOpacity style={art.button}>
                    <Text style={{
                        color: '#7267D1',
                        marginLeft: 5,
                        textAlign: 'center'

                    }}>
                        {SeeAll('bn')}
                    </Text>
                    <AntDesign name="arrowright" size={20} color="#7267D1" />
                </TouchableOpacity>
                <View style={art.container}>
                    <Text style={[styles.mediumText, {
                        color: "#7267D1",
                        margin:5
                    }]}>
                        {SymptomsSolution('bn')}
                    </Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
                        flexDirection: 'row'
                    }}>
                        <Circle />
                        <Circle />
                        <Circle />
                        <Circle />
                        <Circle />
                        <Circle />
                    </ScrollView>
                </View>
                <View style={art.container}>
                    <Text style={[styles.mediumText, {
                        color: "#7267D1",
                        margin:5
                    }]}>
                        {CommonMed('bn')}
                    </Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
                        flexDirection: 'row'
                    }}>
                        <Square/>
                        <Square/>
                        <Square/>
                        <Square/>
                        <Square/>

                    </ScrollView>
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

    },
    container: {

        width: '100%',
        backgroundColor: '#e6eeff',
        marginTop: 10,
        borderRadius: 10,
        
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowColor: "#e5e5e5",
        shadowRadius: 10,
        elevation: 2,
        shadowOpacity: .5,
    },
    button: {
        height: 40,
        width: '90%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#808080',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor:'#ffffff'
    }

})