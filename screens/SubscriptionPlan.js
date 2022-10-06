import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './../assets/styles';
import { AntDesign } from '@expo/vector-icons';



export default function SubscriptionPlan(props) {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <View style={{
        flexDirection: 'row', marginTop: 20
      }}>
        <View style={art.planBox}>
          <Text style={[styles.mediumText, { color: '#ffff' }]}>Pet Docto Gold Plan </Text>
        </View>
        <View style={{ width: 2 }}>

        </View>
        <View style={art.miniPlanBox}>
          <View>
            <Text style={art.text}>৪৯৯ টাকা</Text>
            <Text style={art.miniText}>(ভ্যাট সহ)</Text>
          </View>

        </View>

      </View>
      <View style={art.promoBox}>
        <View style={{ flexDirection: 'row' }}>
          <AntDesign name="checkcircle" size={24} color="#7267D1" />
          <Text style={[styles.mediumText, { justifyContent: 'center' }]}> Add promo Code</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <TextInput style={art.input}></TextInput>
          <TouchableOpacity style={art.applyButton}>
            <Text style={[styles.mediumText, { color: '#fff' }]}>Apply Promo</Text>
          </TouchableOpacity>

        </View>
      </View>
      <Text style={{marginTop:20}}>
        Pay With
      </Text>
      <TouchableOpacity onPress={() => {props.navigation.navigate('DoctorsAgreement')}} style={art.payButton}>
      <AntDesign name="shoppingcart" size={20} color="#fff" />
<Text style={{fontSize:20,color:'#fff',marginLeft:5}}>পে - করুন</Text>
      </TouchableOpacity>

    </View>
  )
}

const art = StyleSheet.create({
  planBox: {
    height: 50,
    width: '75%',
    backgroundColor: '#7267D1',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  miniPlanBox: {
    height: 50,
    width: '25%',
    backgroundColor: '#7267D1',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  text: {
    color: '#fff'
  },
  miniText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 10,
    opacity: 10
  },
  promoBox: {
    backgroundColor: '#D7D4F2',
    height: 130,
    width: '100%',
    marginTop: 20,
    borderRadius: 10,
    padding: 20

  },
  input: {
    height: 40,
    width: '50%',
    backgroundColor: '#fff',
    borderRadius: 5,

  },
  applyButton: {
    height: 40,
    width: '40%',
    backgroundColor: '#7267D1',
    borderRadius: 5,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  payButton:{
flexDirection:'row',
height:45,
width:'40%',
backgroundColor:'#7267D1',
borderRadius:5,
alignItems:'center',
justifyContent:'center',
marginLeft:'60%'
  }
}
)
