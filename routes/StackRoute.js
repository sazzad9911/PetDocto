import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from './../screens/SignIn';
import OTP from './../screens/OTP';
import TabRoute from './TabRoute';
import SignUp from './../screens/SignUp';
const Stack = createNativeStackNavigator();

const StackRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="SignIn" component={SignIn} />
        <Stack.Screen options={{headerShown:false}} name="SignUp" component={SignUp} />
        <Stack.Screen options={{headerShown:false}} name="OTP" component={OTP} />
        <Stack.Screen options={{headerShown:false}} name="Dashboard" component={TabRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoute;
