import React from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../assets/styles';
import DropDownOne from '../components/DropDownOne';
import Button from '../components/button/Button'
import {
  
    Checkbox,
    Flex,
    List,
    WingBlank,
  } from '@ant-design/react-native'


function AgreementOne(props) {
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
   const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`)
      }

    return (
        <ScrollView style={{ margin: 10 }}>
            <Ionicons onPress={() => {
                props.navigation.goBack()
            }} name="chevron-back-circle" size={35} color="#7267D1" />
            <View style={art.tabBox}>
                <View style={[art.tabCircle, { backgroundColor: "#7267D1", }]}>
                    <Text style={[art.tabText, { color: '#fff', }]}>1 </Text>
                </View>
                <View style={art.tabLine}>

                </View>
                <View style={[art.tabCircle, { backgroundColor: "#fff" }]}>
                    <Text style={[art.tabText, { color: '#7267D1', }]}>2 </Text>
                </View>
                <View style={art.tabLine}>

                </View>
                <View style={[art.tabCircle, { backgroundColor: "#fff" }]}>
                    <Text style={[art.tabText, { color: '#7267D1', }]}>3 </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center' }}>
                <Text style={[styles.mediumText, {fontSize:18}]}> Personal Information</Text>
                <View style={{
                    width: '50%',
                    height: 2,
                    backgroundColor: '#7267D1',
                    marginLeft: 10,

                }}></View>
            </View>
            <View style={{ marginLeft: 10, marginTop: 10 }}>
                <Text style={styles.mediumText}>Full name</Text>
                <TextInput
                    style={art.nameInput}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Ex:Naymul Islam"

                />
                <Text style={[styles.mediumText, { marginTop: 10 }]}>Gender</Text>
                <View style={{flexDirection:'row',marginTop:8}}>
                <Checkbox onChange={onChange}>Male</Checkbox>
                <Checkbox onChange={onChange}>Female</Checkbox>
                <Checkbox onChange={onChange}>Trangender</Checkbox>
                </View>

                <Text style={[styles.mediumText, { marginTop: 10 }]}>Maritial Status</Text>
                <View style={{flexDirection:'row',marginTop:8}}>
                <Checkbox onChange={onChange}>Single</Checkbox>
                <Checkbox onChange={onChange}>Married</Checkbox>
                <Checkbox onChange={onChange}>Devorced</Checkbox>
                </View>
                <Text style={[styles.mediumText, { marginTop: 10 }]}>Date of Birth</Text>
                <View style={art.datePickerView}>
                    <View style={art.pickerBox}>
                        <Text style={styles.smallText}>Day</Text>
                        <TextInput
                            style={art.dateInput}
                            onChangeText={onChangeNumber}
                            value={Number}
                            placeholder="DD"
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={art.pickerBox}>
                        <Text style={styles.smallText}>Month</Text>
                        <TextInput
                            style={art.dateInput}
                            onChangeText={onChangeNumber}
                            value={Number}
                            placeholder="MM"
                            keyboardType="numeric"

                        />
                    </View>
                    <View style={art.pickerBox}>
                        <Text style={styles.smallText}>Year</Text>
                        <TextInput
                            style={art.dateInput}
                            onChangeText={onChangeNumber}
                            value={Number}
                            placeholder="YYYY"
                            keyboardType="numeric"

                        />
                    </View>
                </View>
                <Text style={[styles.mediumText, { marginTop: 10 }]}>Nationality</Text>
                <DropDownOne style={{
                    backgroundColor: 'white',
                    width: '80%',
                    marginTop: 10
                }} placeholder={'Ex:Bangladeshi'} DATA={['Bangladeshi', 'Indian', 'American']} />

            </View>
            <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                <Text style={[styles.mediumText, {fontSize:18}]}> Address ANd Billing</Text>
                <View style={{
                    width: '50%',
                    height: 2,
                    backgroundColor: '#7267D1',
                    marginLeft: 10,

                }}>

                </View>

            </View>
            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text style={styles.mediumText}>Parmanent Address</Text>
                <TextInput
                    style={art.nameInput}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Ex:Bashundhara N/A"

                />
                <Text style={[styles.mediumText, { marginTop: 10 }]}>Present Address</Text>
                <TextInput
                    style={art.nameInput}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Ex:Bashundhara N/A"

                />
                <Text style={[styles.mediumText, { marginTop: 10 }]}>District</Text>
                <DropDownOne style={{
                    backgroundColor: 'white',
                    width: '80%',
                    marginTop: 10
                }} placeholder={'Ex:Dhaka'} DATA={['Dhaka', 'Jessore', 'Barisal', 'Rongpur']} />
                <Text style={[styles.mediumText, { marginTop: 10 }]}>Zip Code</Text>
                <TextInput
                    style={art.nameInput}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Ex:1206"

                />
            </View>
            <View style={{alignItems:'center'}}>
                <Button onPress={() => {props.navigation.navigate('AgreementTwo')}} buttonName='NEXT' />
            </View>

        </ScrollView>
    );
}

export default AgreementOne;

const art = StyleSheet.create({
    tabBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    tabCircle: {
        height: 35,
        width: 35,
        borderRadius: 17.5,

        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },
    tabText: {

        fontWeight: '800',
        fontSize: 18,
        textAlign: 'center',

    },
    tabLine: {
        height: 4,
        width: 50,
        backgroundColor: '#fff'

    },
    nameInput: {
        height: 30,
        marginTop: 5,
        borderRadius: 5,
        padding: 5,
        backgroundColor: '#fff',
        width: '80%'
    },
    dateInput: {
        height: 30,
        marginTop: 5,
        borderRadius: 5,
        padding: 5,
        backgroundColor: '#fff',
        width: 50,
        textAlign: 'center'
    },
    pickerBox: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    },
    datePickerView: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 10,
    }

})