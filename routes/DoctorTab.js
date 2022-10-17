import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './../screens/Home';
import Calender from './../screens/Calender';
import DoctorList from './../screens/DoctorList';
import History from './../screens/History';
import Menu from './../screens/Menu';
import DashboardHeader from './../components/headers/DashboardHeader';
import BottomBar from './../components/bottom/BottomBar';
import MenuHeader from './../components/headers/MenuHeader';
import CalenderHeader from './../components/headers/CalenderHeader';
import ListHeader from './../components/headers/ListHeader';
import HistoryHeader from './../components/headers/HistoryHeader';
import DoctorPro from "../screens/users/DoctorPro";
import BottomDr from "../components/bottom/BottomDr";
import DrProHeader from "../components/headers/Doctor/DrProHeader";
import DrMenue from "../screens/doctors/DrMenue";






const Tab = createBottomTabNavigator(); 

const DoctorTab = () => {
  return (
    <Tab.Navigator tabBar={(props)=><BottomDr {...props}/>}>
      <Tab.Screen options={{header:(props)=><DrProHeader {...props}/>}} name="DoctorPro" component={DoctorPro} />
      <Tab.Screen options={{header:(props)=><CalenderHeader {...props}/>}} name="Calender" component={Calender} />
      <Tab.Screen options={{header:(props)=><ListHeader {...props}/>}} name="DoctorList" component={DoctorList} />
      <Tab.Screen options={{header:(props)=><HistoryHeader {...props}/>}} name="History" component={History} />
      <Tab.Screen options={{header:(props)=><MenuHeader {...props}/>}} name="DrMenue" component={DrMenue} />
      


    </Tab.Navigator>
  );
};

export default DoctorTab;
