import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from './../screens/SignIn';
import OTP from './../screens/OTP';
import TabRoute from './TabRoute';
import SignUp from './../screens/SignUp';
import DoctorProfile from "../screens/DoctorProfile";
import Appointment from "../screens/Appointment";
import AppointmentHeader from "../components/headers/AppointmentHeader";
import Subscription from "../screens/Subscription";
import SubscriptionHeader from "../components/headers/SubscriptionHeader";
import SubscriptionPlan from "../screens/SubscriptionPlan";
import SubscriptionplanHeader from "../components/headers/SubscriptionplanHeader";
import DoctorsAgreement from "../screens/DoctorsAgreement";
import AgreementOne from "../screens/AgreementOne";
import AgreementTwo from "../screens/AgreementTwo";
import AgreementThree from "../screens/AgreementThree";

const Stack = createNativeStackNavigator();

const StackRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="SignIn" component={SignIn} />
        <Stack.Screen options={{headerShown:false}} name="SignUp" component={SignUp} />
        <Stack.Screen options={{headerShown:false}} name="OTP" component={OTP} />
        <Stack.Screen options={{headerShown:false}} name="Dashboard" component={TabRoute} />
        <Stack.Screen options={{headerShown:false}} name="Doctor Profile" component={DoctorProfile} />
      <Stack.Screen options={{header:(props)=><AppointmentHeader {...props}/>}} name="Appointment" component={Appointment} />
      <Stack.Screen options={{header:(props)=><SubscriptionHeader {...props}/>}} name="Subscription" component={Subscription} />
      <Stack.Screen options={{header:(props)=><SubscriptionplanHeader {...props}/>}} name="SubscriptionPlan" component={SubscriptionPlan} />
      <Stack.Screen options={{headerShown:false}} name="DoctorsAgreement" component={DoctorsAgreement} />
      <Stack.Screen options={{headerShown:false}} name="AgreementOne" component={AgreementOne} />
      <Stack.Screen options={{headerShown:false}} name="AgreementTwo" component={AgreementTwo} />
      <Stack.Screen options={{headerShown:false}} name="AgreementThree" component={AgreementThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoute;
