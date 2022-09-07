import React from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

function Search(props) {
    const [Search, setSearch] = React.useState(null);
    const [Value, setValue] = React.useState(true);
    const navigation = useNavigation()
    return (
        <View style={{
            alignItems:'center',
        }}>
            <View style={{
                height: 60,
                width: '100%',
                flexDirection: 'row', 
                justifyContent:'center'


            }}>
                <View style={{
                    height: 45,
                    alignItems: 'center',
                    width: '100%',
                    borderWidth: 1,
                    borderRadius: 25,
                    flexDirection: 'row',
                    flex: 4,
                    marginTop: 10,
                    justifyContent:'center',
                    backgroundColor:'#e6eeff'
                }}>
                    <TouchableOpacity style={{
                        height: 35,
                        width: 35,
                        borderRadius: 20,
                        backgroundColor: '#7267D1',
                        marginLeft: 5,
                        alignItems: 'center',
                        

                    }}>
                        <Ionicons style={{
                            
                            marginTop:5,
                            flex: 1,

                        }} name="search" size={24} color='#FFFFFF' />
                    </TouchableOpacity>
                    <TextInput onFocus={() => setValue(false)} onChange={setSearch} placeholder='Search' style={{
                        height: 50,
                        borderRadius: 25,
                        width: '70%',
                        flex: 4,
                        padding: 10,



                    }}>

                    </TextInput>


                </View>


            </View>
        </View>
    );
}

export default Search;