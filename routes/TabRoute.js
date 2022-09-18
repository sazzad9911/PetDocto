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
import Profile from "../screens/Profile";
import DoctorProfile from "../screens/DoctorProfile";
import Appointment from "../screens/Appointment";
import AppointmentHeader from "../components/headers/AppointmentHeader";
import Subscription from "../screens/Subscription";
import SubscriptionHeader from "../components/headers/SubscriptionHeader";


const Tab = createBottomTabNavigator();

const TabRoute = () => {
  return (
    <Tab.Navigator tabBar={(props)=><BottomBar {...props}/>}>
      <Tab.Screen options={{header:(props)=><DashboardHeader {...props}/>}} name="Home" component={Home} />
      <Tab.Screen options={{header:(props)=><CalenderHeader {...props}/>}} name="Calender" component={Calender} />
      <Tab.Screen options={{header:(props)=><ListHeader {...props}/>}} name="DoctorList" component={DoctorList} />
      <Tab.Screen options={{header:(props)=><HistoryHeader {...props}/>}} name="History" component={History} />
      <Tab.Screen options={{header:(props)=><MenuHeader {...props}/>}} name="Menu" component={Menu} />
      <Tab.Screen options={{headerShown:false}} name="Profile" component={Profile} />
      <Tab.Screen options={{headerShown:false}} name="Doctor Profile" component={DoctorProfile} />
      <Tab.Screen options={{header:(props)=><AppointmentHeader {...props}/>}} name="Appointment" component={Appointment} />
      <Tab.Screen options={{header:(props)=><SubscriptionHeader {...props}/>}} name="Subscription" component={Subscription} />
    </Tab.Navigator>
  );
};

export default TabRoute;
