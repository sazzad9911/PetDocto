import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, Foundation } from '@expo/vector-icons';
import { styles } from '../assets/styles';
import {
    Button,
    Icon,
    List,
    Switch,
    WhiteSpace,
    WingBlank,
} from '@ant-design/react-native'


const Menu = (props) => {

    return (
        <ScrollView>
            <View style={art.box}>
                <TouchableOpacity onPress={() => {props.navigation.navigate('Profile')}} style={art.select}>
                    <MaterialCommunityIcons style={{ marginRight: 10 }} name="account-cog" size={24} color="#7267D1" />
                    <Text style={styles.mediumText}>
                        Manage my account
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={art.select}>
                    <MaterialCommunityIcons style={{ marginRight: 10 }} name="account-cog" size={24} color="#7267D1" />
                    <Text style={styles.mediumText}>
                        Recharge money
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {props.navigation.navigate('History')}} style={art.select}>
                    <Foundation style={{ marginRight: 15 }} name="clipboard-notes" size={26} color="#7267D1" />
                    <Text style={styles.mediumText}>
                        Consultation and History
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={[art.box, { justifyContent: 'space-between' }]}>
                <Text style={[styles.mediumText, { textAlign: 'left' }]}>
                    App settings
                </Text>
                <View style={art.select}>
                    <Text style={[styles.mediumText, { flex: 11 }]}>
                        Language
                    </Text>
                    <Switch
                        checkedChildren="En"
                        unCheckedChildren="বাং"
                        defaultChecked
                    />
                </View>
                <View style={art.select}>
                    <Text style={[styles.mediumText, {marginRight:'60%'}]}>
                        Theme
                    </Text>
                    <List.Item extra={<Switch checked color="black" />}>
                        color="red"
                    </List.Item>
                </View>
                <View style={art.select}>
                    <Text style={[styles.mediumText, { flex: 11 }]}>
                        Notification
                    </Text>
                    <Switch
                        checkedChildren="On"
                        unCheckedChildren="Off"
                        defaultChecked
                    />
                </View>
            </View>
            <View style={[art.box, { justifyContent: 'space-between' }]}>
                <Text style={[styles.mediumText, { textAlign: 'left' }]}>
                    App settings
                </Text>
                <TouchableOpacity style={art.select}>
                    <Text style={[styles.mediumText, { flex: 11 }]}>
                        ETC
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={art.select}>
                    <Text style={[styles.mediumText, {}]}>
                        ETC
                    </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>

    );
};

export default Menu;

const art = StyleSheet.create({
    select: {
        marginTop: 10,
        width: '100%',
        height: 50,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 25
    },
    box: {
        backgroundColor: '#e6eeff',
        paddingTop: 10,
        paddingBottom: 20,
        paddingHorizontal: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        justifyContent: 'center'

    },
    container: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    }
})