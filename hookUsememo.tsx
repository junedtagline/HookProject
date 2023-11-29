import {useState, useMemo, useEffect, useCallback} from 'react';
import {Alert, Text, TextInput, View} from 'react-native';

function CalculateFactorial() {
  const [number, setNumber] = useState(1);
  const factorial = useMemo(() => factorialOf(number), [number]);
  const onChange = event => {
    console.log(number);
    setNumber(number);
  };
  return (
    <View style={{alignItems: 'center', padding: 20}}>
      <TextInput
        keyboardType="numeric"
        value={number}
        placeholder="Enter Your Input"
        onChangeText={data => setNumber(data)}
        style={{
          height: 50,
          width: 150,
          borderColor: 'black',
          borderRadius: 10,
          borderWidth: 2,
          alignItems: 'center',
          alignContent: 'center',
          textAlign: 'center',
        }}
      />
      <Text style={{padding: 10, fontFamily: 'times new roman', fontSize: 20}}>
        The Factorial Of {number} is {factorial}{' '}
      </Text>
    </View>
  );
}

function factorialOf(n) {
  console.log('factorialOf(n) called!');
  console.log(n);
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

export default CalculateFactorial;
