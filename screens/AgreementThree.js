import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../assets/styles';
import { Checkbox, } from '@ant-design/react-native'
import Button from '../components/button/Button';
const AgreeItem = Checkbox.AgreeItem

function AgreementThree(props) {
    return (
        <ScrollView style={{ margin: 10 }}>
            <Ionicons onPress={() => {
                props.navigation.goBack()
            }} name="chevron-back-circle" size={35} color="#7267D1" />
            <View style={art.tabBox}>
                <View style={[art.tabCircle, { backgroundColor: "#7267D1", }]}>
                    <Text style={[art.tabText, { color: '#fff', }]}>1 </Text>
                </View>
                <View style={[art.tabLine, { backgroundColor: '#7267D1' }]}>

                </View>
                <View style={[art.tabCircle, { backgroundColor: "#7267D1" }]}>
                    <Text style={[art.tabText, { color: '#fff', }]}>2 </Text>
                </View>
                <View style={[art.tabLine, { backgroundColor: '#7267D1' }]}>

                </View>
                <View style={[art.tabCircle, { backgroundColor: "#7267D1" }]}>
                    <Text style={[art.tabText, { color: '#fff', }]}>3 </Text>
                </View>
            </View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Text style={[styles.largeText, { color: '#7267D1' }]}>Terms & Conditions</Text>

            </View>
            <View>
                <Text style={[styles.mediumText, { marginTop: 20 }]}>
                    Why do we use it?
                </Text>
                <Text style={[styles.smallText, {}]}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.                </Text>
                <Text style={[styles.mediumText, { marginTop: 20 }]}>
                    Why do we use it?
                </Text>
                <Text style={[styles.smallText, {}]}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.                </Text>
                <Text style={[styles.mediumText, { marginTop: 20 }]}>
                    Why do we use it?
                </Text>
                <Text style={[styles.smallText, {}]}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.                </Text>

            </View>
            <AgreeItem style={[styles.mediumText, { marginTop: 20, paddingRight: 10 }]}>
                I Agree with those terms and conditions
            </AgreeItem>
            <View style={{ alignItems: 'center', }}>
                <Button buttonName='SUBMIT' />
            </View>
        </ScrollView>
    );
}

export default AgreementThree;
const art = StyleSheet.create({
    tabBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    tabCircle: {
        height: 35,
        width: 35,
        borderRadius: 17.5,

        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },
    tabText: {

        fontWeight: '800',
        fontSize: 18,
        textAlign: 'center',

    },
    tabLine: {
        height: 4,
        width: 50,


    },
    nameInput: {
        height: 30,
        marginTop: 5,
        borderRadius: 5,
        padding: 5,
        backgroundColor: '#fff',
        width: '100%'
    },
})