import React from 'react';
import {View,Text, Dimensions, TouchableOpacity} from 'react-native';
import { textColor } from './../assets/colors';
import { styles } from './../assets/styles';
import Input from '../components/Input';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Button from '../components/button/Button';
import SideButton from '../components/button/SideButton';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import SignIn from './SignIn';

const SignUp = (props) => {
    const [Name, setName] = React.useState(null);
    const [District, setDistrict] = React.useState(null);
    const [PhoneNumber, setPhoneNumber] = React.useState(null);
    const [Password, setPassword] = React.useState(null);
    const window = Dimensions.get('window')
    return (
        <View>
            <View style={{
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={[styles.largeText, {
                color: textColor('light'),
                marginTop: '40%',
                textAlign: 'center',
                marginBottom: '10%',
            }]}> Register</Text>
            <Input onChange={setName} placeholder='Full Name' Icon={<FontAwesome name="user" size={24} color="black" />} />
            <Input onChange={setPhoneNumber} placeholder='Phone Number' Icon={<Ionicons name="ios-call" size={24} color="black" />} />
            <Input onChange={setDistrict} placeholder='District' Icon={<Fontisto name="world-o" size={24} color="black" />} />
            <Input onChange={setPassword} placeholder='Password' Icon={<MaterialIcons name="lock" size={24} color="black" />} />
            <Input onChange={setPassword} placeholder='Re-type password' Icon={<MaterialIcons name="lock" size={24} color="black" />} />
            <Button {...props} onPress={() => {props.navigation.navigate('OTP') }} buttonName='REGISTER' />
            
            
        </View>
        <SideButton {...props} onPress={() => {props.navigation.navigate('SignIn')}} buttonName='Login' />
        </View>

    );
};

export default SignUp;