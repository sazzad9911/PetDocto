import React from 'react';
import {
    View, Text, ScrollView,
    StyleSheet, TouchableOpacity, Image, SafeAreaView
} from 'react-native';
import {
    FontAwesome, MaterialCommunityIcons,
    Ionicons,
} from '@expo/vector-icons';
const BottomBar = (props) => {
    return (
        <View style={styles.Box}>
            <TouchableOpacity style={{ flex: 1, marginLeft: 20 }}
                onPress={() => { props.navigation.navigate('DoctorList') }}>
                <FontAwesome name="stethoscope" size={30} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1 }}
                onPress={() => { props.navigation.navigate('Calender') }}>
                <MaterialCommunityIcons name="briefcase-clock" size={30} color="white" />
            </TouchableOpacity>
            <View style={{
                flex: 1.5
            }}>

            </View>

            <TouchableOpacity style={{ flex: 1 }}
                onPress={() => { props.navigation.navigate('Subscription') }}>
                <Ionicons name="document-text" size={30} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1 }}
                onPress={() => { props.navigation.navigate('Menu') }}>
                <Ionicons name="md-menu" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{
                flex: 1,
                position: 'absolute',
                top: -20,
                borderRadius: 30,
            }}
                onPress={() => { props.navigation.navigate('Home') }}>
                <View style={{
                    backgroundColor: 'white',
                    width: 60,
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowOffset: {
                        width: 3, height: 3
                    },
                    shadowColor: 'black',
                    shadowOpacity: .3,
                    shadowRadius: 5,
                    elevation: 5,
                    borderRadius:20

                }}>
                    <Ionicons name="md-home" size={35} color="#7267D1" />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default BottomBar;

const styles = StyleSheet.create({
    Box: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        height: 60,
        justifyContent: 'center',
        backgroundColor: '#7267D1',
        borderRadius: 15,
    },
})