import {useEffect, useState} from 'react';
import {Image, Modal} from 'react-native';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {string} from 'yup';

function FunApiAuthentication() {
  const [loginUserData, setLoginUserDate] = useState([]);
  const [txtUserName, setTxtUserName] = useState();
  const [txtPassword, setTxtPassword] = useState();
  const [loginData, setLoginData] = useState('');
  const [modalVal, setModalVal] = useState(false);
  let checkUserName = [];
  let checkPassword = [];
  useEffect(() => {
    getAuthenticationApi();
  }, []);
  const getAuthenticationApi = async () => {
    try {
      const getLoginUserData = await fetch('https://dummyjson.com/users'); //API CALLING FOR GET DATA
      const finalData1 = await getLoginUserData.json();
      setLoginUserDate(finalData1);
    } catch (error) {
      console.log('🚀 ~ file: apiTodo.tsx:21 ~ init ~ error:', error);
    }
  };
  const loginCheck = () => {
    checkUserName = loginUserData.users.filter(
      usersdata => usersdata.username === txtUserName,
    );
    checkPassword = loginUserData.users.filter(
      usersdata => usersdata.password === txtPassword,
    );
    setLoginData(checkPassword[0]);
    if (checkUserName.length > 0 && checkPassword.length > 0) {
      setModalVal(true);
    } else if (checkUserName.length <= 0 && checkPassword.length > 0) {
      Alert.alert('User name was wrong !! ');
    } else if (checkPassword.length <= 0 && checkUserName.length > 0) {
      Alert.alert('Password Wrong !! ');
    } else {
      Alert.alert('User Name or Password Was Wrong !!');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Modal transparent={true} visible={modalVal}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#00000040',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 40,
              borderRadius: 10,
              borderWidth: 0.5,
              shadowColor: 'black',
              shadowOpacity: 0.2,
              shadowOffset: {
                height: 2,
                width: 2,
              },
            }}>
            <Text style={{fontSize: 20}}>Hii</Text>
            <Text style={{fontSize: 20}}>{loginData?.firstName}</Text>
            <Image
              source={{uri: loginData?.image}}
              style={{height: 100, width: 80}}
            />
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignSelf: 'center',
              }}>
              <TouchableOpacity></TouchableOpacity>
              <TouchableOpacity
                style={{paddingLeft: 20}}
                onPress={() => setModalVal(false)}>
                <AntDesign name="close" size={36} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.mainView}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              styles.buttonText,
              {paddingTop: 14, paddingRight: 20, fontSize: 18},
            ]}>
            User Name :
          </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="default"
            onChangeText={data => setTxtUserName(data)}
            placeholder="User name"></TextInput>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              styles.buttonText,
              {paddingTop: 14, paddingRight: 32, fontSize: 18},
            ]}>
            Password :
          </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="default"
            secureTextEntry={true}
            onChangeText={data => setTxtPassword(data)}
            placeholder="Password"></TextInput>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => loginCheck()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 24,
    height: 50,
    width: 200,
    borderColor: 'green',
    alignSelf: 'center',
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  buttonStyle: {
    width: 150,
    borderWidth: 2,
    borderRadius: 24,
    height: 40,
    marginTop: 30,
    marginLeft: 80,
    backgroundColor: 'green',
  },
  buttonText: {
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 7,
  },
});
export default FunApiAuthentication;
