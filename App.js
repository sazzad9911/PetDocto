import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import StackRoute from './routes/StackRoute';
import {useColorScheme } from 'react-native'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Bold': require('./assets/fonts/Amaranth-Bold.ttf'),
    'Regular': require('./assets/fonts/Amaranth-Regular.otf'),
  });
  if (!fontsLoaded) {
    console.log('No fonts loaded')
    return null;
  }
  return (
    <StackRoute/>
    
  );
}


