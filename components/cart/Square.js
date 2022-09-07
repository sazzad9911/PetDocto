import React from 'react';
import { TouchableOpacity,Image } from 'react-native';

function Square(props) {
    return (
        <TouchableOpacity style={{
            height:60,
            width:60,
            borderRadius:10,
            borderWidth:2,
            borderColor:'#7267D1',
            margin:10,
        }}>
            <Image style={{
                height: 55,
                width: 55,
                borderRadius: 10
            }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65iP59vXfebNBBAVdXZcIV5BgxiwWv5_vSw&usqp=CAU' }} />
 
        </TouchableOpacity>
    );
}

export default Square;