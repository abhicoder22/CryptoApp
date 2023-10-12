import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameScreen from "./src/screens/GameScreen";
import MainScreen from "./src/screens/MainScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LeagueScreen from "./src/screens/LeagueScreen";
import LeaderBoardScreen from "./src/screens/LeaderBoardScreen";
import ResearchScreen from "./src/screens/ResearchScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import GameTabScreen from "./src/screens/GamesTabScreen";
import BadgesTabScreen from "./src/screens/BadgesTabScreen";

const Stack = createNativeStackNavigator();

const App = () =>{
  return(
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Game" component={GameScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="League" component={LeagueScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Leader" component={LeaderBoardScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Reasearch" component={ResearchScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
        <Stack.Screen name="GamesTab" component={GameTabScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Badges" component={BadgesTabScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App