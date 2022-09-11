import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../assets/styles';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const window = Dimensions.get('window')
function DoctorProfile(props) {

    return (
        <ScrollView>
            <View style={{
                marginTop: 40,
                marginHorizontal: 20
            }}>
                <View style={art.circle}>
                    <MaterialIcons name="arrow-back-ios" size={24} color="#ffffff" />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={art.profile}>

                    </View>
                    <Text style={styles.mediumText}>
                        Dr. Madhur Reza Kabir
                    </Text>
                    <Text style={styles.mediumText}>এম,বি বি এস</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                    <View style={[art.minicart, { alignItems: 'center' }]}>
                        <Text style={{ color: 'red' }}>বর্তমান কর্মসংস্থল</Text>
                        <Text style={{ color: '#1a8cff', fontSize: 12 }}>চট্টগ্রাম ভেটেনারি ক্লিনিক</Text>
                        <Text style={{ color: '#1a8cff', fontSize: 12 }}>যোগদানের সময় ১০/০৬/২০১৯</Text>
                    </View>
                    <View style={art.minicart}>
                        <View><Text style={{ color: 'red' }}>কন্সালটেশন ফি</Text>
                            <Text style={{ color: '#1a8cff', fontSize: 30 }}>ট১২০</Text></View>
                        <View style={{ marginTop: -15, marginLeft: 80 }}><Text style={{ fontSize: 8, textAlign: 'right' }}>ভ্যাট সহ</Text></View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 20, }}>
                    <View style={art.dotLine} />
                    <View style={[art.box, {}]}>
                        <Text style={[art.text, { color: '#808080' }]}>মোট রেটিং (৬৫)</Text>
                        <Text style={[art.text, { fontWeight: 'bold' }]}>৩.৯/৫</Text>
                        <View style={{ flexDirection: 'row', }}><Entypo name="star" size={10} color="#ffcc00" />
                            <Entypo name="star" size={10} color="#ffcc00" />
                            <Entypo name="star" size={10} color="#ffcc00" />
                            <Entypo name="star" size={10} color="#ffcc00" />
                            <Entypo name="star" size={10} color="#808080" /></View>
                    </View>
                    <View style={art.dotLine} />
                    <View style={art.box}>
                        <Text style={[art.text, { color: '#808080' }]}>মোট অভিজ্ঞতা</Text>
                        <Text style={[art.text, { fontWeight: 'bold' }]}>২ বছর</Text>
                    </View>
                    <View style={art.dotLine} />
                    <View style={art.box}>
                        <Text style={[art.text, { color: '#808080' }]}>ইউনিক কোড</Text>
                        <Text style={[art.text, { fontWeight: 'bold' }]}>778805</Text>
                    </View>
                    <View style={art.dotLine} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity  onPress={() => {props.navigation.navigate('Appointment')}} style={art.button}>
                    <FontAwesome name="video-camera" size={20} color="#fff" />
                        <Text style={{ color: '#fff',marginLeft:10 }}>
                            ডাক্তার দেখান
                        </Text>
                        
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default DoctorProfile;

const art = StyleSheet.create({
    circle: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#1a8cff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 7
    },
    profile: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: "#7267D1",
        borderWidth: 3,
        marginBottom: 10,
        marginTop: -30,
    },
    minicart: {

        borderRadius: 10,
        backgroundColor: '#ebebe0',
        padding: 10
    },
    box: {
        height: 50,
        width: window.width / 4,
        marginTop: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dotLine: {
        borderStyle: 'dotted',
        borderWidth: 1,
        borderRadius: 1,
        height: 50,
        marginTop: 20
    },
    text: {
        fontSize: 10,
        textAlign: 'center'
    },
    button: {
        height: 40,
        width: '70%',
        backgroundColor: '#1a8cff',
        marginTop: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'
    }

})