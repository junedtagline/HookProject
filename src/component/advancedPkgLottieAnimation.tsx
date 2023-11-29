import {Text, View} from 'react-native';
import LottieView from 'lottie-react-native';

function FunLottieAnimation() {
  return (
    <View>
      <View style={{height: 400, width: 400}}>
        <LottieView
          source={require('../../src/lottieAnimation/Animation - 1695720898176.json')}
          autoPlay
          style={{
            height: 300,
            width: 'auto',
          }}
        />
      </View>
      <View>
        <LottieView
          source={require('../../src/lottieAnimation/Animation - 1695724078898.json')}
          autoPlay
          style={{
            height: 300,
            width: 'auto',
          }}
        />
      </View>
    </View>
  );
}
export default FunLottieAnimation;
