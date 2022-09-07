import React from 'react';
import { View,Image, TouchableOpacity } from 'react-native';

function Circle(props) {
    return (
        <TouchableOpacity style={{
            height:60,
            width:60,
            borderColor:'#7267D1',
            borderWidth:2,
            borderRadius:30,
            marginLeft:5,
            marginTop:5,
            marginBottom:5,
            alignItems:'center'

        }}>
            <Image style={{
                height: 55,
                width: 55,
                borderRadius: 27.5
            }} source={{ uri: 'https://img.freepik.com/premium-photo/bengal-cat-head-with-green-eyes-close-up-white-background_340015-921.jpg' }} />
 
        </TouchableOpacity>
    );
}

export default Circle;