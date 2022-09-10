import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from '../assets/styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Search from '../components/Search';
import { Octicons } from '@expo/vector-icons';
import MyPet from '../components/cart/MyPet';

const Profile = (props) => {
    return (
        <ScrollView>
            <View style={{
                marginHorizontal: 20,

            }}>
                <View style={art.header}>
                    <View style={art.wallet}>
                        <FontAwesome5 name="coins" size={20} color="#FFC300" />
                        <Text style={[styles.mediumText, { color: '#ffffff', marginLeft: 10 }]}>
                            1000
                        </Text>
                    </View>
                    <View style={art.logout}>
                        <AntDesign name="logout" size={15} color="#ffffff" />

                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={art.profilePic}>

                    </View>
                    <View style={art.userName}>
                        <Text style={styles.largeText}>Naymul Islam</Text>
                    </View>
                </View>
                <View style={art.detailsCart}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text style={[styles.mediumText, {}]}>
                            Email
                        </Text>
                        <View style={art.inputBar}>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text style={[styles.mediumText, {}]}>
                            Phone
                        </Text>
                        <View style={art.inputBar}>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text style={[styles.mediumText, {}]}>
                            Address
                        </Text>
                        <View style={art.inputBar}>

                        </View>
                    </View>
                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                        <TouchableOpacity style={art.button}>
                            <Text style={[styles.mediumText, { color: '#ffffff' }]}> Save </Text>
                        </TouchableOpacity>
                        <View style={{ width: 20 }}>

                        </View>
                        <TouchableOpacity style={art.button}>
                            <Text style={[styles.mediumText, { color: '#ffffff' }]}> Cancel </Text>

                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text style={[styles.smallText, { textAlign: 'right', marginTop: 10, color: '#7267D1' }]}>Reset Password</Text>
                    </TouchableOpacity>
                </View>
                <Text style={[styles.mediumText, { textAlign: 'left', color: "#7267D1", marginTop: 10 }]}> My pets</Text>
                <Search />
                <MyPet />
                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <View style={[art.buttonBig, { flexDirection: 'row' }]}>
                        <Octicons name="diff-added" size={24} color="#FFFFFF" />
                        <Text style={[styles.mediumText, { color: '#FFFFFF', marginLeft: 10 }]}>Add Your Pet</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Profile;
const art = StyleSheet.create({
    wallet: {
        height: 35,
        backgroundColor: "#7267D1",
        marginTop: 35,
        borderRadius: 22.5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    logout: {
        height: 35,
        backgroundColor: "#7267D1",
        marginTop: 35,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'

    },
    header: {
        height: 80,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profilePic: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: "#7267D1", borderWidth: 3,

    },
    userName: {
        paddingVertical: 5,
        borderRadius: 20,
        backgroundColor: '#e6eeff',
        margin: 10,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    detailsCart: {
        width: '100%',
        borderRadius: 20,
        backgroundColor: '#e6eeff',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    inputBar: {
        flexDirection: 'row',
        height: 35,
        width: 240,
        borderRadius: 17.5,
        backgroundColor: '#ffffff'
    },
    button: {
        height: 35,
        width: 80,
        backgroundColor: "#7267D1",
        borderRadius: 17.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonBig: {
        height: 45,
        width: 180,
        backgroundColor: "#7267D1",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10%'
    }
})