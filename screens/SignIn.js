import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { textColor } from './../assets/colors';
import { styles } from './../assets/styles';
import Input from '../components/Input';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Button from '../components/button/Button';
import SideButton from '../components/button/SideButton';

const SignIn = (props) => {
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
                marginTop: '50%',
                textAlign: 'center',
                marginBottom: '10%',
            }]}> Login</Text>
            <Input onChange={setPhoneNumber} placeholder='Phone Number' Icon={<Ionicons name="ios-call" size={24} color="black" />} />
            <Input onChange={setPassword} placeholder='Password' Icon={<MaterialIcons name="lock" size={24} color="black" />} />
            <Button {...props} onPress={() => {props.navigation.navigate('Dashboard') }} buttonName='Login' disable={PhoneNumber && Password ? false : true} />
            <TouchableOpacity>
                <Text style={[styles.mediumText, {
                    color: textColor('light'),
                    marginTop: 10,
                    textAlign: 'center',
                }]}>
                    Forget Password?
                </Text>      
            </TouchableOpacity>
            
        </View>
        <SideButton {...props} onPress={() => {props.navigation.navigate('SignUp')}} buttonName='Register' />
        </View>
    );
};

export default SignIn;