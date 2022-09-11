import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { textColor } from '../../assets/colors';
import { styles } from './../../assets/styles';
import { FontAwesome } from '@expo/vector-icons';
import { Number } from '../../assets/values';



function DrCart(props) {
    return (
        <TouchableOpacity onPress={() => { props.onPress()}} style={{
            height: 180,
            width: 160,
            backgroundColor: '#FFFFFFFF',
            shadowOffset: {
                height: 1,
                width: 1,
            },
            shadowColor: "#e5e5e5",
            shadowRadius:10,
            elevation: 2,
            shadowOpacity: .5,
            borderRadius: 10,
            padding: 10,
            marginLeft: 10,
            marginTop: 10,
            marginBottom:10,
        }}>
            <Image style={{
                height: 80,
                width: 140,
                borderRadius: 10
            }} source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-picture-id1327024466?b=1&k=20&m=1327024466&s=170667a&w=0&h=vcw4Exhv4pkR8fMVLNXhNESaKq1HbYwJ1iElLlQBxI0=' }} />
            <Text style={[styles.mediumText, {

            }]}>
                Dr Jayen Bin Alom
            </Text>
            <Text style={[styles.smallText, {

            }]}>
                MBBS
            </Text>
            <View style={{
                flexDirection: 'row',
                alignItems:'center'
            }}>
                <FontAwesome style={{
                    
                }} name="star" size={12} color='#FFC300' />
                <FontAwesome style={{
                    
                }}  name="star" size={12} color="#FFC300" />
                <FontAwesome style={{
                    
                }} name="star" size={12} color="#FFC300" />
                <FontAwesome style={{
                    
                }} name="star" size={12} color="#FFC300" />
                <FontAwesome style={{
                    
                }} name="star" size={12} color="#FFC300" />
                <FontAwesome style={{
                    
                }} name="star" size={12} color="#FFC300" />
                <Text style={[styles.mediumText,{
                   marginLeft:5
                }]}>
                    {Number('bn')}
                </Text>
                <Text style={[styles.smallText,{
                   marginLeft:5,
                   
                }]}>
                    (১৩৭)
                </Text>
            </View>
            <View style={{
                height:20,
                backgroundColor:'#D7D4F2',
                alignItems:'center',
                width:50,
                borderRadius:10
            }}>
<Text>
    ট.১৬০
</Text>
            </View>
        </TouchableOpacity>
    );
}

export default DrCart;