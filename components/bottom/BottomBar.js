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
            <TouchableOpacity style={{flex:1,marginLeft:20}} 
            onPress={() => {props.navigation.navigate('DoctorList')}}>
                <FontAwesome name="stethoscope" size={50} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={{flex:1}} 
            onPress={() => {props.navigation.navigate('Calender')}}>
                <MaterialCommunityIcons name="briefcase-clock" size={45} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={{flex:1}} 
            onPress={() => {props.navigation.navigate('Home')}}>
                <Ionicons name="md-home" size={45} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={{flex:1}}
            onPress={() => {props.navigation.navigate('History')}}>
                <Ionicons name="document-text" size={45} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={{flex:1}}
            onPress={() => {props.navigation.navigate('Menu')}}>
                <Ionicons name="md-menu" size={55} color="white" />
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
        backgroundColor: '#7267D1',
        borderRadius: 15,
        width:'100%',
    },
})