import React from 'react';
import { View,StyleSheet,Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../assets/styles';

function Picker(props) {
    return (
        <TouchableOpacity onPress={()=>{
            if(props.onPress){
                props.onPress()
            }
        }} style={art.PickerContainer}>
            <Ionicons name="add-circle-sharp" size={30} color="#7267D1" />
            <View style={art.textView}>
<Text style={[styles.mediumText,{color:'#7267D1'}]}> Attach Verified Certificate</Text>
            <Text style={[styles.smallText,{}]}>Add Image Files Only</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Picker;
const art=StyleSheet.create({
    PickerContainer:{
height:50,
width:'80%',
backgroundColor:'#fff',
marginTop:10,
alignItems:'center',
flexDirection:'row',
justifyContent:'center'
    },
    textView:{
marginLeft:10,
alignItems:'flex-start'
    }
    
})