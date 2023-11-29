import {useState} from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

function FunUseState() {
  const [txtValue, setTempValue] = useState('');
  const [counterValue, setCountValue] = useState(0);
  return (
    <View style={{alignItems: 'center', flex: 1, padding: 50}}>
      <TextInput
        keyboardType="default"
        placeholder="Enter Your Input"
        onChangeText={data => setTempValue(data)}
        style={{
          height: 50,
          width: 150,
          borderColor: 'black',
          borderRadius: 20,
          borderWidth: 2,
          alignItems: 'center',
          textAlign: 'center',
        }}
      />
      <View
        style={{
          height: 30,
          width: 150,
          margin: 10,
          borderRadius: 25,
          borderTopColor: 'black',
          justifyContent: 'center',
          borderBottomColor: 'black',
          alignItems: 'center',
        }}>
        <RNPickerSelect
          onValueChange={value => setTempValue(value)}
          items={[
            {label: 'BurlyWood', value: 'burlyWood'},
            {label: 'Gold', value: 'gold'},
            {label: 'Wheat', value: 'wheat'},
          ]}
        />
      </View>
      <Text>
        UseState : <Text>{txtValue}</Text>{' '}
      </Text>
      <Button
        title="Hit Me"
        onPress={() =>
          setCountValue(counterValue => counterValue + 1)
        }></Button>
      <Text>
        Button Hit <Text>{counterValue}</Text> Time{' '}
      </Text>
    </View>
  );
}
export default FunUseState;
