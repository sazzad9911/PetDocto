import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '../../assets/styles';
import { SimpleLineIcons } from '@expo/vector-icons';

function MyPet(props) {
    return (
        <View style={art.cart}>
            <Image style={art.image} source={{ uri: 'https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg?q=60' }} />
            <View>
                <TouchableOpacity style={art.circle}>
                    <MaterialCommunityIcons name="square-edit-outline" size={22} color="white" />

                </TouchableOpacity>
                <View style={art.name}>
                    <Text style={[styles.mediumText, { color: "#7267D1" }]}>Snow</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                    <View style={art.button}>
                        <Text style={[styles.smallText, { color: '#ffffff' }]}> 2.3 KG </Text>
                    </View>
                    <View style={{ width: 10 }}>

                    </View>
                    <View style={art.button}>
                        <Text style={[styles.smallText, { color: '#ffffff' }]}> 1.5 Years </Text>

                    </View>
                </View>
                <View style={art.buttonBig}>
                    <Text style={[styles.smallText, { color: '#ffffff' }]}> NEATURED </Text>

                </View>
            
                <TouchableOpacity style={{marginLeft:'60%', marginTop:10}}>
                    <SimpleLineIcons name="note" size={20} color="#7267D1" />
                </TouchableOpacity>
            
            </View>
        </View>
    );
}

export default MyPet;
const art = StyleSheet.create({
    cart: {
        width: '100%',
        borderRadius: 20,
        backgroundColor: '#e6eeff',
        marginTop: 20,
        flexDirection: 'row',
        marginBottom: 20

    },
    image: {
        height: 180,
        width: 140,
        borderRadius: 20,

    },
    circle: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: '#7267D1',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '65%',
        marginTop: -10,
    },
    name: {
        backgroundColor: '#FFFFFF',
        width: '55%',
        height: 35,
        borderBottomRightRadius: 17.5,
        borderTopRightRadius: 17.5,
        alignItems: 'center',
        justifyContent: 'center'

    },
    button: {
        height: 30,
        width: 60,
        backgroundColor: "#7267D1",
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonBig: {
        height: 30,
        width: 130,
        backgroundColor: "#7267D1",
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 10
    },
})