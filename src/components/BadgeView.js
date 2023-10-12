import React from "react";
import { View,Text, StyleSheet, Image } from "react-native";

const BadgeView = () =>{
    return(
        <View style={styles.container}>
            <View style={{width:'100%',height:90, backgroundColor:'white',borderRadius:10,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <Image
          style={{width: 60, height: 60,borderRadius:20}}
          source={require('../assets/placeholder.png')}
        />
          <View >
            <Text style={styles.textStyle1}>First Stripe Earned x3</Text>
            <Text style={styles.textStyle2}>Won 7 under over games in a row</Text>
          </View>

            </View>
        </View>
    )
}

export default BadgeView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
        marginTop: 20,
       
      },
      textStyle1:{
        fontSize:18,
        color:'#3e3e3e',
      },
      textStyle2:{
        fontSize:18,
        color:'#babcc2',
        marginTop:5
      }
})