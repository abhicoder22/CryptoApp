import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import BottomScreen from '../components/BottomScreen';

const GameScreen = () => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const showBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };

 

  const ProgressBar = ({progress, borderRadius}) => {
    return (
      <View style={[styles.progressBarContainer, {borderRadius: borderRadius}]}>
        <View style={[styles.progressBar, {width: `${progress}%`}]} />
      </View>
    );
  };

  return (
    <View style={styles.safeareaview}>
      <Text style={{fontSize: 18, color: '#6c6c6c', fontWeight: 'bold'}}>
        Today's Game
      </Text>
      <View style={styles.container}>
        <View style={styles.firstview}>
          <View style={styles.firstInsideView}>
            <View style={styles.inlineView}>
              <View style={styles.textAndImage}>
                <Text
                  style={{color: '#c9afef', fontWeight: 'bold', fontSize: 16}}>
                  UNDER OR OVER
                </Text>
                <Image
                  style={styles.imageFirstView}
                  source={require('../assets/exclamation.png')}
                />
              </View>
              <View style={styles.textAndImage}>
                <Text style={{color: '#c9afef', fontSize: 13}}>
                  Starting in
                </Text>
                <Image
                  style={styles.imageFirstView}
                  source={require('../assets/time.png')}
                />
                <Text style={{color: '#c9afef', fontSize: 13}}>03:23:12</Text>
              </View>
            </View>
            <Text style={{marginTop: 20, color: '#c9afef', fontSize: 18}}>
              Bitcoin price will be under
            </Text>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              $24,524 at 7 a ET on 22nd Jan'27
            </Text>
          </View>
        </View>

        <View style={styles.middleview}>
          <View style={styles.middleInsideView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
              }}>
              <View>
                <Text style={styles.middleViewText}>PRICE POOL</Text>
                <Text style={styles.middleViewNumber}>$12,000</Text>
              </View>

              <View>
                <Text style={styles.middleViewText}>UNDER</Text>
                <Text style={styles.middleViewNumber}>3.25x</Text>
              </View>

              <View>
                <Text style={styles.middleViewText}>OVER</Text>
                <Text style={styles.middleViewNumber}>1.25x</Text>
              </View>

              <View>
                <Text style={styles.middleViewText}>ENTRY FEES</Text>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 15,
                    textAlign: 'right',
                    marginTop: 8,
                  }}>
                  5
                </Text>
              </View>
            </View>

            <Text style={{marginTop: 35, fontSize: 18, color: '#b4b6bd'}}>
              What's your prediction?
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonsizeunder}>
                <View style={styles.buttonInsideView}>
                  <Image
                    style={styles.buttonImage}
                    source={require('../assets/down-arrow.png')}
                  />
                  <Text style={styles.buttonText}>Under</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonsizeup}
                onPress={showBottomSheet}>
                <View style={styles.buttonInsideView}>
                  <Image
                    style={styles.buttonImage}
                    source={require('../assets/up-arrow.png')}
                  />
                  <Text style={styles.buttonText}>Up</Text>
                </View>
              </TouchableOpacity>

              <BottomScreen
                isVisible={isBottomSheetVisible}
                onDismiss={closeBottomSheet}
                numberList={numberList}
                
              />
            </View>
          </View>
        </View>

        <View style={styles.secondview}>
          <View style={styles.secondInsideView}>
            <View style={styles.inlineView}>
              <View style={styles.textAndImage}>
                <Image
                  style={styles.secondViewImage}
                  source={require('../assets/userimage.png')}
                />
                <Text style={styles.secondViewTopText}>355 Players</Text>
              </View>
              <View style={styles.textAndImage}>
                <Image
                  style={styles.secondViewImage}
                  source={require('../assets/chart.png')}
                />
                <Text style={styles.secondViewTopText}>View chart</Text>
              </View>
            </View>

            <View style={{marginTop: 20}}>
              <ProgressBar progress={75} borderRadius={10} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <Text style={styles.secondViewBottomText}>
                232 predicted under
              </Text>
              <Text style={styles.secondViewBottomText}>
                123 predicted over
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  safeareaview: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 20,
  },
  container: {
    marginTop: 15,
    width: '80',
    height: '70%',
    borderWidth: 1,
    borderColor: '#f6f4f9',
    backgroundColor: 'white',
  },
  firstview: {
    height: '25%',
    width: '100%',
    backgroundColor: '#6231ad',
    flexDirection: 'row',
    padding:15
  },
  firstInsideView: {
    flex: 1,
  },
  middleInsideView: {
    margin: 20,
    flex: 1,
  },
  secondInsideView: {
    margin: 20,
    flex: 1,
  },
  secondview: {
    height: '25%',
    width: '100%',
    backgroundColor: '#f6f3fa',
  },
  middleview: {
    flex: 1,
    height: '40%',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  buttonsizeunder: {
    width: '45%',
    height: 50,
    borderRadius: 35,
    backgroundColor: '#452c55',
    justifyContent: 'center',
  },
  buttonsizeup: {
    width: '45%',
    height: 50,
    borderRadius: 35,
    backgroundColor: '#6231ad',
    justifyContent: 'center',
  },
  buttonInsideView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  progressBarContainer: {
    width: '100%',
    height: 12,
    backgroundColor: '#2dabad',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#fe4190',
  },
  inlineView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  middleViewText: {
    color: '#dfe4e7',
    fontSize: 15,
  },
  middleViewNumber: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  imageFirstView: {
    width: 16,
    height: 16,
    margin: 6,
    tintColor: 'white',
  },
  buttonImage: {
    width: 17,
    height: 18,
    margin: 4,
    tintColor: 'white',
  },
  textAndImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  secondViewImage: {
    width: 15,
    height: 15,
    margin: 6,
    tintColor: '#757985',
  },
  secondViewTopText: {
    color: '#757985',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondViewBottomText: {
    color: '#c6cdd5',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
