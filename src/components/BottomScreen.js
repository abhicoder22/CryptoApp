import React from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
const BottomScreen = ({isVisible, onDismiss, numberList}) => {
  const handleClose = () => {
    onDismiss();
  };

  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      onSwipeComplete={handleClose}
      swipeDirection="down">
      <View
        style={styles.container}>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#3e3e3e'}}>
          Your Prediction is Under
        </Text>
        <Text
          style={{
            fontSize: 14,
            marginTop: 16,
            fontWeight: 'bold',
            color: '#8d9099',
          }}>
          ENTRY TICKETS
        </Text>
        <View style={{alignItems: 'center', height: 160, marginTop: 10}}>
          <FlatList
            data={numberList}
            keyExtractor={item => item.toString()}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => console.warn("Selected number is"+item)}>
                <Text style={{fontSize: 24}}>{item}</Text>
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <Text style={{fontSize: 15, color: '#b8c2ca'}}>You can win</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Text style={{fontSize: 15, color: '#7dd1bd', fontWeight: 'bold'}}>
            $2000
          </Text>
          <Text style={{fontSize: 15, color: '#b8c2ca'}}>Total 5</Text>
        </View>
        <TouchableOpacity onPress={onDismiss} style={styles.buttonstyle}>
          <Text style={styles.buttonText}>
            Submit my prediction
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default BottomScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
  buttonstyle: {
    width: '100%',
    height: 40,
    borderRadius: 22,
    backgroundColor: '#6231ad',
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal:{
    margin: 0, justifyContent: 'flex-end'
  },
  buttonText:{
    fontSize: 16, color: 'white'
  }
});
