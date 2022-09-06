import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native';
import { styles } from '../assets/styles';
import { textColor } from '../assets/colors';
import Button from '../components/button/Button';


const OTP = (props) => {
    return (
        <View style={{
            alignItems:'center'
            
        }}>
        <View style={{
            marginTop:'30%'
        }}>
        <Image style={{
                    height: 150,
                    width: 150,
                }} source={require('../assets/OTP.png')} />
        </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={[styles.largeText, {
                    color: textColor('light'),
                    marginTop: '3%',
                    textAlign: 'center',

                }]}>OTP Verification</Text>

            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={[styles.mediumText, {
                    color: textColor('light'),
                    textAlign: 'center',
                    marginTop: '3%',
                }]}>Enter the OTP sent to 01855779058</Text>

            </View>
            
            <View style={{
                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'center'
            }}>
                <View style={art.box}>
                    <TextInput style={[styles.largeText, {
                        color: '#7267D1',
                        textAlign: 'center',

                    }]}>
                        5
                    </TextInput>
                </View>
                <View style={art.box} >
                    <TextInput style={[styles.largeText, {
                        color: '#7267D1',
                        textAlign: 'center',

                    }]}>
                        0
                    </TextInput>
                </View>
                <View style={art.box}>
                    <TextInput style={[styles.largeText, {
                        color: '#7267D1',
                        textAlign: 'center',

                    }]}>
                        7
                    </TextInput>
                </View>
                <View style={art.box}>
                <TextInput style={[styles.largeText, {
                        color: '#7267D1',
                        textAlign: 'center',

                    }]}>
                        
                    </TextInput>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems:'center',
                justifyContent:'center',
                margin:10
            }}>
                <Text style={[styles.mediumText, {

                    textAlign: 'center',

                }]}> Don't receive the OTP?</Text>
                <TouchableOpacity>
                    <Text style={[styles.mediumText, {
                        color: '#7267D1',
                        textAlign: 'center',

                    }]}>  RESEND OTP</Text>
                </TouchableOpacity>
            </View>
            <Button {...props} onPress={() => {props.navigation.navigate('SignIn') }} buttonName='VERIFY & PROCEED' />
        </View>
    );
};

export default OTP;

const art = StyleSheet.create({
    box: {
        height: 45,
        width: 45,
        backgroundColor: '#D7D4F2',
        marginTop: 10,
        margin: 10,

    }
})