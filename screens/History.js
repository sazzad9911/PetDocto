import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Search from '../components/Search';
import { styles } from '../assets/styles'
import HistoryCart from '../components/cart/HistoryCart';
const History = () => {
    return (
        <ScrollView>
            <View style={{
                margin: 20
            }}>
                <View style={{
                    flexDirection: 'row',
                    height: 50,
                    width: '100%',

                    borderRadius: 0,
                    alignContent: 'center',
                }}>
                    <TouchableOpacity style={{
                        width: '33%',
                        backgroundColor: '#e6eeff',
                        borderBottomLeftRadius: 10,
                        borderTopLeftRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text>
                            Ongoing
                        </Text>
                    </TouchableOpacity>
                    <View style={{
                        width: '.5%',
                        marginTop: 5,
                        marginBottom: 5,
                        backgroundColor: '#808080',

                    }}>

                    </View>
                    <TouchableOpacity style={{
                        width: '33%',
                        backgroundColor: '#e6eeff',
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text>
                            Completed
                        </Text>
                    </TouchableOpacity>
                    <View style={{
                        width: '.5%',
                        marginTop: 5,
                        marginBottom: 5,
                        backgroundColor: '#808080',

                    }}>

                    </View>
                    <TouchableOpacity style={{
                        width: '33%',
                        backgroundColor: '#e6eeff',
                        borderRadius: 10,

                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text>
                            Canceled
                        </Text>
                    </TouchableOpacity>
                </View>
                <Search />
                <Text style={[styles.mediumText, {}]}>
                    Recent
                </Text>
                <HistoryCart/>
                <HistoryCart/>
                <HistoryCart/>
                <HistoryCart/>
                
            </View>
        </ScrollView>
    );
};

export default History;