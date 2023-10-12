import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import  {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import GameTabScreen from './GamesTabScreen';
import BadgesTabScreen from './BadgesTabScreen';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.insideView}>
        <Image
          style={{width: 22, height: 22}}
          source={require('../assets/trophy.png')}
        />
        <Text style={styles.logout}>Profile</Text>
        <Image
          style={{width: 22, height: 22}}
          source={require('../assets/msg.png')}
        />
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../assets/placeholder.png')}
          style={styles.profileImage}
        />
        <Text style={{color: '#5a5a5a', fontSize: 17, marginTop: 10}}>
          Jina simons
        </Text>
        <Text style={styles.textStyle}>6000 Pts</Text>
        <Text style={styles.textStyle}>
          To mitigate the cons of callback-based code, many modern programming
          environments and libraries provide alternative solutions like
          Promises, async/await, or reactive programming (e.g., Observables in
          RxJS). These alternatives can improve code readability,
          maintainability,
        </Text>

        <View style={styles.textAndImage}>
          <Image
            style={styles.imageFirstView}
            source={require('../assets/logout.png')}
          />
          <Text style={styles.logout}>Logout</Text>
        </View>
        
        <View style={styles.firstview}>
        <View style={styles.inlineView}>
         <View>
            <Text style={styles.viewText}>Under or Over</Text>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
              <Image style={styles.viewImage} source={require('../assets/up-arrow.png')}/>
              <Text style={styles.numberText}>81%</Text>
            </View>
         </View>

         <View>
            <Text style={styles.viewText}>Top 5</Text>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
              <Image style={styles.viewImage} source={require('../assets/down-arrow.png')}/>
              <Text style={styles.numberText}>-51%</Text>
            </View>
         </View>

        </View>
        </View>

        <View style={{width:'100%',height:150,marginTop:5}}>
        <Tab.Navigator>
      <Tab.Screen name="GamesTab" component={GameTabScreen} />
      <Tab.Screen name="Badges" component={BadgesTabScreen} />
    </Tab.Navigator>
        </View>

      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 20,
  },
  insideView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textAndImage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  imageFirstView: {
    width: 25,
    height: 25,
    margin: 6,
    tintColor: '#727682',
  },
  textStyle: {
    color: '#a0a2aa',
    fontSize: 15,
    marginTop: 10,
  },
  logout: {
    color: '#a0a2aa',
    fontSize: 15,
  },
  firstview: {
    height: '25%',
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#f7f6f9',
    marginTop:25
  },
  inlineView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10
  },
  viewText:{
    fontSize:16,color:'#90939c',fontWeight:'bold'
  },
  numberText:{
    fontSize:28,color:'#4f4f4f',fontWeight:'bold'
  },
  viewImage:{
    width:25,height:25,margin:8
  },
  profileImage:{
    width: 80,
    height: 80,
    marginTop: 5,
    borderRadius: 40,
    borderWidth: 2,
  }
});
