import React from "react";
import { View,Text,Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import LeagueScreen from "./LeagueScreen";
import LeaderBoardScreen from "./LeaderBoardScreen";
import ResearchScreen from "./ResearchScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

const MainScreen = () =>{
    return(
        <Tab.Navigator initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#6231ad',
          tabBarStyle: {
            height: 90,
            position: 'absolute',
            backgroundColor: '#ffffff',
          },
        }}>
            <Tab.Screen name="Home" component={HomeScreen} 
            options={{ headerShown:false,
          tabBarLabelStyle: {fontSize: 14, marginBottom: 10},
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/home.png')}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? '#6231ad' : '#b6c1c9',
              }}
            />
          ),}} />
            <Tab.Screen name="League" component={LeagueScreen} options={{ headerShown:false,
          tabBarLabelStyle: {fontSize: 14, marginBottom: 10},
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/trophy.png')}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? '#6231ad' : '#b6c1c9',
              }}
            />
          ),}}/>
            <Tab.Screen name="Research" component={ResearchScreen} 
            options={{ headerShown:false,
                tabBarLabelStyle: {fontSize: 14, marginBottom: 10},
                tabBarIcon: ({focused}) => (
                  <Image
                    source={require('../assets/search.png')}
                    style={{
                        height: 25,
                        width: 25,
                      tintColor: focused ? '#6231ad' : '#b6c1c9',
                    }}
                  />
                ),}}/>
            <Tab.Screen name="Leader" component={LeaderBoardScreen} options={{ headerShown:false,
          tabBarLabelStyle: {fontSize: 14, marginBottom: 10},
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/ranking.png')}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? '#6231ad' : '#b6c1c9',
              }}
            />
          ),}}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown:false,
          tabBarLabelStyle: {fontSize: 14, marginBottom: 10},
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/userimage.png')}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? '#6231ad' : '#b6c1c9',
              }}
            />
          ),}}/>
        </Tab.Navigator>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    tabIcon:{
        height: 30,
                width: 30
    }
})