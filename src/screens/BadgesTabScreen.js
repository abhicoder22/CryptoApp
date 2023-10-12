import React from "react";
import { View,Text,ScrollView } from "react-native";

import BadgeView from "../components/BadgeView";


const BadgesTabScreen = () =>{
    return(
        <ScrollView>
      <BadgeView />
      <BadgeView />
      <BadgeView />
      <BadgeView />
      <BadgeView />
      <BadgeView />
      </ScrollView>
    )
}

export default BadgesTabScreen