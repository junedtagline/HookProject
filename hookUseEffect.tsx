import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function FunUseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count => count + 1);
    }, 1000);
  });
  return (
    <LinearGradient colors={['#3f87a6', '#ebf8e1', '#f69d3c']}>
      <View>
        <Text
          style={{
            fontFamily: 'times new roman',
            fontSize: 20,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          {count}
        </Text>
      </View>
    </LinearGradient>
  );
}
export default FunUseEffect;
