import React from 'react';
import { View,Text, TouchableOpacity } from 'react-native';
import { styles } from '../../assets/styles';



function SideButton(props) {
    
    return (
        <TouchableOpacity onPress={() => { props.onPress()}}  style={{
            height:50,
            width:150,
            borderTopRightRadius:25,
            borderBottomRightRadius:25,
            backgroundColor:'#E49FFD',
            justifyContent:'center',
            marginTop:'10%'
            
        }}>
        <Text style={[styles.largeText,{
            color:'white',
            fontWeight:'bold',
            fontSize:25,
            textAlign:'center'
        }]} > 
            {props.buttonName}
        </Text>
            
        </TouchableOpacity>
    );
}

export default SideButton;