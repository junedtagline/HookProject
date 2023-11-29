import {createContext, useContext, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CounterContext,
  CounterContextProvider,
  useCounterContextValues,
} from './counterContext';
const ThemeContext = createContext('test');

function Main() {
  const testValue = useContext(ThemeContext);
  const {counter, incrementCounter, decrementCounter} =
    useCounterContextValues();
  return (
    <View>
      <Image
        source={{uri: testValue.value}}
        style={{height: 50, width: 50}}></Image>
      <FlatList
        data={testValue.tempArray}
        renderItem={({item}) => {
          console.log('Flate List : ', item);
          return (
            <View>
              <Text>{item}</Text>
            </View>
          );
        }}></FlatList>
      <Text>{counter}</Text>
      <TouchableOpacity style={style.btnStyle} onPress={incrementCounter}>
        <Text style={{fontFamily: 'Gill Sans', fontSize: 18}}>
          Increment Counter
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.btnStyle} onPress={decrementCounter}>
        <Text style={{fontFamily: 'Gill Sans', fontSize: 18}}>
          Decrement counter
        </Text>
      </TouchableOpacity>
    </View>
  );
}
function FunUseContext() {
  const value = 'https://reactnative.dev/img/logo-og.png';
  const test = ['React Native', 'Angular.Js', 'React.Js', 'Python'];
  const [txtValue, setTxtValue] = useState<string>('');
  const [tempArray, setTempArray] = useState([]);
  const handleSubmit = () => {
    setTempArray([...tempArray, txtValue]);
  };

  return (
    <View>
      <View style={{flexDirection: 'row', margin: 5}}>
        <Text style={style.txtUi}>Your Name : </Text>
        <TextInput
          placeholder="Enter Your Name"
          onChangeText={data => setTxtValue(data)}
          style={style.txtInput}></TextInput>
      </View>
      <TouchableOpacity style={style.btnStyle} onPress={handleSubmit}>
        <Text style={{fontFamily: 'Gill Sans', fontSize: 18}}>Submit</Text>
      </TouchableOpacity>

      <ThemeContext.Provider value={{value, tempArray}}>
        {/* <CounterContextProvider> */}
        <Main />
        {/* </CounterContextProvider> */}
      </ThemeContext.Provider>
    </View>
  );
}
export default FunUseContext;
const style = StyleSheet.create({
  txtInput: {
    alignSelf: 'center',
    height: 40,
    width: 180,
    borderRadius: 24,
    borderWidth: 2,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Gill Sans',
  },
  txtUi: {
    fontFamily: 'Gill Sans',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 8,
  },
  btnStyle: {
    height: 40,
    width: 100,
    padding: 8,
    backgroundColor: 'burlywood',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 24,
    borderWidth: 2,
    margin: 10,
  },
});
