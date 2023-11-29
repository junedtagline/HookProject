import {useId} from 'react';
import {Text, TextInput, View} from 'react-native';

function FunUseId() {
  const setId = useId();
  const setId2 = useId();
  const setId3 = useId();
  const setId4 = useId();
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  return (
    <View style={{alignItems: 'center', padding: 20}}>
      <Text id={setId} style={{fontFamily: 'times new roman', fontSize: 20}}>
        Enter Your Name :
      </Text>
      <TextInput
        keyboardAppearance="light"
        keyboardType="default"
        style={{
          fontFamily: 'times new roman',
          fontSize: 20,
          fontWeight: 'bold',
          borderBlockColor: 'black',
          borderColor: 'black',
          borderRadius: 20,
          borderWidth: 3,
          padding: 10,
          paddingTop: 10,
          width: 200,
        }}
        placeholder="Enter Your Name"
      />
      <Text
        style={{
          fontFamily: 'times new roman',
          fontSize: 20,
          textAlign: 'center',
        }}>
        {setId}
      </Text>
      <Text
        style={{
          fontFamily: 'times new roman',
          fontSize: 20,
          textAlign: 'center',
        }}>
        {setId2}
      </Text>
      <Text
        style={{
          fontFamily: 'times new roman',
          fontSize: 20,
          textAlign: 'center',
        }}>
        {setId3}
      </Text>
      <Text
        style={{
          fontFamily: 'times new roman',
          fontSize: 20,
          textAlign: 'center',
        }}>
        {setId4}
      </Text>
    </View>
  );
}
export default FunUseId;
