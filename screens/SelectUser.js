import React from 'react';
import { View, Text, TouchableOpacity,StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import IconButton from '../components/button/IconButton';

function SelectUser(props) {
    const [Doctor, setDoctor] = React.useState(false)
    const [Patient, setPatient] = React.useState(false)

    return (
        <View>
        <StatusBar backgroundColor="#7267D1" barStyle="light-content" />
            <View style={{
                height: 200,
                width: 200,
                borderRadius: 150,
                backgroundColor: '#7267D1',
                position: 'absolute',
                marginLeft:-80,
                marginTop:-80
            }}>

            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 40,
                marginTop: '60%',
                justifyContent: 'space-between'

            }}>

                <TouchableOpacity onPress={() => {
                    if (!Patient) {
                        setDoctor(!Doctor)
                    } else {
                        setDoctor(!Doctor)
                        setPatient(false)
                    }
                }} style={{
                    height: 100,
                    width: 100,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: '#7267D1',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Doctor ? '#7267D1' : 'transparent'
                }}>
                    <View>
                        <FontAwesome name="stethoscope" size={50} color={Doctor ? '#ffff' : '#7267D1'} />
                    </View>
                    <Text style={{
                        fontSize: 20,
                        color: Doctor ? '#ffff' : '#7267D1'
                    }}>DOCTOR</Text>


                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    if (!Doctor) {
                        setPatient(!Patient)
                    } else {
                        setPatient(!Patient)
                        setDoctor(false)
                    }
                }} style={{
                    height: 100,
                    width: 100,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: '#7267D1',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Patient ? '#7267D1' : 'transparent'
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: Patient ? '#ffff' : '#7267D1'
                    }}>PATIENT</Text>

                </TouchableOpacity>
            </View>
            <View style={{ width: '100%', alignItems: 'center', paddingTop: 50 }}>
                <IconButton onPress={() => { props.navigation.navigate(Doctor ? 'DoctorsAgreement' : 'SignIn') }} style={{
                    backgroundColor: Patient || Doctor ? '#7267D1' : '#ffff',
                    color: Patient || Doctor ? 'white' : '#7267D1'
                }} title='NEXT' Icon={() => <MaterialIcons name="arrow-forward-ios" size={22} color={Doctor || Patient ? '#ffff' : '#7267D1'} />} />
            </View>

            <View style={{
                height: 200,
                width: 200,
                borderRadius: 150,
                backgroundColor: '#7267D1',
                position: 'absolute',
                bottom:-330,
                marginLeft:240
                
                
            }}>

            </View>

        </View>
    );
}
export default SelectUser;
