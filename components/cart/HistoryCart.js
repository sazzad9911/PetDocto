import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from '../../assets/styles';
import { Disease, PaidAmount } from '../../assets/values';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

function HistoryCart(props) {
    return (
        <View style={{
            backgroundColor: '#e6eeff',
            borderRadius: 20,
            marginBottom:20
        }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{
                    height: 120,
                    width: '49.5%',
                    borderTopLeftRadius: 20,
                    justifyContent: 'center'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: '#ffffff',
                        margin: 5,
                        justifyContent: 'center',
                        height: 60,
                        borderRadius: 30,
                        alignItems: 'center',
                    }}>
                        <View>
                            <Text style={[styles.smallText, {}]}>
                                Dr. Robiul Islam
                            </Text>
                            <Text style={{
                                fontSize: 10,
                                textAlign: 'right'
                            }}>
                                Veterinarian
                            </Text>
                        </View>
                        <View style={{
                            width: 5
                        }}>

                        </View>
                        <View style={{
                            height: 40,
                            width: 40,
                            borderRadius: 20,
                            backgroundColor: 'red'
                        }}>
                            <Image style={{
                                height: 40,
                                width: 40,
                                borderRadius: 17.5
                            }} source={{ uri: 'https://images.ctfassets.net/rt5zmd3ipxai/1peknfJpoqwrWqihXWWZh4/29262936bb24fbb69d42ab94892e3ead/Dr._Ryan_Carney.webp' }} />

                        </View>
                    </View>
                </View>

                <View style={{
                    height: 120,
                    width: '49.5%',
                    borderTopRightRadius: 20,
                    justifyContent: 'center'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: '#ffffff',
                        margin: 5,
                        height: 60,
                        borderRadius: 30,
                        alignItems: 'center',

                    }}>
                        <View style={{
                            height: 40,
                            width: 40,
                            borderRadius: 20,
                            backgroundColor: 'red',
                            marginLeft: 5,
                            alignItems: 'center',
                            justifyContent: 'center'

                        }}>
                            <Image style={{
                                height: 40,
                                width: 40,
                                borderRadius: 17.5
                            }} source={{ uri: 'https://img.freepik.com/premium-photo/bengal-cat-head-with-green-eyes-close-up-white-background_340015-921.jpg' }} />

                        </View>
                        <View style={{
                            width: 5
                        }}>

                        </View>
                        <View>

                            <Text style={[styles.smallText, {}]}>
                                Jack
                            </Text>
                            <Text style={{
                                fontSize: 10,

                            }}>
                                Patient
                            </Text>
                        </View>


                    </View>
                </View>

            </View>

            <View style={{
                margin: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom:10
            }}>
                <TouchableOpacity style={[{ backgroundColor:'#7267D1'},art.tab]}>
                    <Text>
                        View Prescription
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[{ backgroundColor:'#FFFFFF'},art.tab]}>
                    <Text>
                        Reappointment
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={{
                borderWidth: 1,
                borderColor: '#ffffff'
            }}>

            </View>

            <View style={{
                flexDirection: 'row',
                margin: 10

            }}>
                <View style={{
                    backgroundColor: '#ffffff',
                    flexDirection: 'row',
                    borderRadius: 5,
                    padding: 5,
                    alignItems: 'center',
                    height: 35
                }}>
                    <FontAwesome name="calendar" size={16} color="#7267D1" />
                    <Text style={{ fontSize: 12 }}>
                        12/04/2022
                    </Text>

                </View>
                <View style={{
                    width: 15
                }}>

                </View>
                <View style={{
                    width: 100,
                    backgroundColor: '#ffffff',
                    padding: 2,
                    borderRadius: 5,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}>
                    <Ionicons name="ios-alarm-outline" size={22} color="#7267D1" />
                    <Text style={{
                        fontSize: 10,
                        textAlign: 'center',

                    }}>
                        10:50 AM
                    </Text>
                </View>
                <View style={{
                    width: 15,

                }}>

                </View>
                <View style={{
                    width: 70,
                    backgroundColor: '#ffffff',
                    padding: 2,
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row'
                }}>
                    <View style={{
                        height: 8,
                        width: 8,
                        borderRadius: 4,
                        backgroundColor: 'green',
                        margin: 3
                    }}>

                    </View>
                    <Text style={{
                        fontSize: 12,
                        margin: 3
                    }}>
                        Cleared
                    </Text>
                </View>
            </View>

        </View>
    );
}

export default HistoryCart;
const art = StyleSheet.create({
    tab: {
        height: 40,
        width: 150,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})