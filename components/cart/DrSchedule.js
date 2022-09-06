import React from 'react';
import { View, Dimensions, Text, Image } from 'react-native';
import { styles } from '../../assets/styles';
import { Disease, PaidAmount } from '../../assets/values';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

function DrSchedule(props) {
    return (
        <View style={{
            margin: 10,
            backgroundColor: '#e6eeff',
            borderRadius: 20,
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
                    width: '1%',
                    backgroundColor: '#ffffff'
                }}>

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
                borderWidth: 1,
                borderColor: '#ffffff'
            }}>

            </View>
            <View style={{
                margin: 10,
                backgroundColor: '#ffffff',
                padding: 5,
                borderRadius: 5
            }}>
                <Text style={{
                    textAlign: 'justify'
                }}>
                    {Disease('bn')}
                </Text>
            </View>
            <View style={{
                flexDirection: 'row',
                marginRight:10,
                marginBottom:15,
                marginLeft:10

            }}>
                <View style={{
                    backgroundColor: '#ffffff',
                    flexDirection: 'row',
                    borderRadius: 5,
                    padding: 5,
                    alignItems: 'center',
                    height: 35
                }}>
                    <Ionicons name="ios-alarm-outline" size={22} color="#7267D1" />
                    <Text style={[styles.mediumText, {}]}>
                        10:50 AM
                    </Text>

                </View>
                <View style={{
                    width: 20
                }}>

                </View>
                <View style={{
                    width: 100,
                    backgroundColor: '#ffffff',
                    padding: 2,
                    borderRadius: 5

                }}>
                    <Text style={{
                        fontSize: 10,
                        textAlign: 'center'
                    }}>
                        {PaidAmount('bn')}
                    </Text>
                </View>
                <View style={{
                    width: 20
                }}>

                </View>
                <View style={{
                    width: 40,
                    backgroundColor: '#ffffff',
                    padding: 2,
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <MaterialIcons name="notifications-active" size={24} color="#7267D1" />
                </View>
            </View>
        </View>
    );
}

export default DrSchedule;