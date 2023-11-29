import {useRef} from 'react';
import {Alert, Button, View} from 'react-native';

function FunUseRef() {
  const temp = useRef(0);
  function handleclick() {
    temp.current = temp.current + 1;
    Alert.alert('you clicked ' + temp.current + 'Times');
  }
  return (
    <View>
      <Button onPress={handleclick} title="Click Me" />
    </View>
  );
}
export default FunUseRef;
