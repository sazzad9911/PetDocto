import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { styles } from '../../../assets/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

function Silver(props) {
    return (
        <View style={art.box}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{
                    height: '100%',
                    width: '75%',

                    justifyContent: 'center'
                }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>PetDocto Silver </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 10 }}>$১২০ / মাস</Text>
                        <Text style={{ fontSize: 10 }}> (একটি প্রাণীর জন্য)</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons name="checkbox-marked-circle-outline" size={24} color="black" />
                        <Text style={{ fontWeight: '600', fontSize: 12, textAlign: 'center' }}>একটি প্রাণীর জন্য ব্যাবহার করতে পারবেন</Text>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons name="checkbox-marked-circle-outline" size={24} color="black" />
                        <Text style={{ fontWeight: '600', fontSize: 12, textAlign: 'center' }}>৩০% ডিসকাউন্ট পান</Text>
                        <Text style={{ fontSize: 10, textAlign: 'center' }}>  (২ বার)</Text>
                    </View>
                    <TouchableOpacity onPress={() => {props.navigation.navigate('SubscriptionPlan')}} style={{
                        height: 45,
                        width: '80%',
                        backgroundColor: '#7267D1',
                        marginTop: 10,
                        borderRadius: 10,
                        justifyContent: 'center'
                    }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>সাবস্ক্রাইব করুন</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center' }} >
                    <SimpleLineIcons name="badge" size={60} color="black" />
                </View>

            </View>


        </View>
    );
}

export default Silver;
const art = StyleSheet.create({
    box: {
        height: 180,
        width: '100%',
        backgroundColor: '#FFFFFFFF',
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowColor: "#e5e5e5",
        shadowRadius: 10,
        elevation: 2,
        shadowOpacity: .5,
        borderRadius: 10,

        marginTop: 10,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10
    }
})