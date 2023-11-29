import {useEffect, useState} from 'react';
import axios from 'axios';
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoaderKit from 'react-native-loader-kit';

function FunToDoUsingAxios() {
  const [apiData, setApiData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [tempArray, setTempArray] = useState([]);
  const [productName, setProductName] = useState('');
  const [productRate, setProductRate] = useState('');
  const [test, setTest] = useState('');
  const [visible, setVisible] = useState(true);
  type apiData = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
  type item = {
    title: string;
    image: string;
    price: number;
    rating: {
      rate: number;
    };
    item: string;
  };
  const axiosGetData = () => {
    try {
      const apiUrl = 'https://fakestoreapi.com/products';
      axios.get(apiUrl).then(responce => {
        const allresponce = responce.data;
        setApiData(allresponce);
        setTempArray(allresponce);
        setVisible(false);
      });
    } catch (error) {
      console.log('🚀 ~ file: apiTodo.tsx:21 ~ init ~ error:', error);
    }
  };

  useEffect(() => {
    axiosGetData();
  }, []);
  const editData = () => {};
  // Remove Data using Filter method
  function deleteData(selectedData) {
    console.log('test');
    let temp = [...tempArray]?.filter(item => item?.id !== selectedData?.id);
    Alert.alert(selectedData);
    setTempArray(temp);
    console.log(temp);
    Alert.alert('Deleted !! ');
  }
  //
  const addInapi = () => {
    if (test) {
      console.log(test);
    } else {
      let temp = {
        id: apiData.length,
        title: productName,
        price: productRate,
        description: '',
        category: '',
        image: 'https://www.filepicker.io/api/file/4C6yPDywSUeWYLyg1h9G',
        rating: {rate: '', count: ''},
      };
      tempArray.push(temp);
      setTempArray(tempArray);
      Alert.alert('Data Saved Successully');
      setShowModal(!showModal);
    }
    // try {
    //   const addApi = axios
    //     .post('https://dummyjson.com/products/add', {
    //       title: productName,
    //       price: productRate,
    //     })
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // } catch (error) {
    //   console.log(error);
    // }
    setProductName('');
    setProductRate('');
  };
  return (
    <View>
      {/* Add and Edit Product */}
      <Modal transparent={true} visible={showModal}>
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
            <TextInput
              keyboardType="default"
              placeholder="Product Name"
              onChangeText={data => setProductName(data)}
              style={styles.textInput}></TextInput>
            <TextInput
              keyboardType="numeric"
              placeholder="Rate"
              onChangeText={data => setProductRate(data)}
              style={styles.textInput}></TextInput>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignSelf: 'center',
              }}>
              <TouchableOpacity onPress={addInapi}>
                <FontAwesome name="save" size={36} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{paddingLeft: 20}}
                onPress={() => {
                  setShowModal(!showModal);
                }}>
                <AntDesign name="close" size={36} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={[styles.editButton, {padding: 20}]}
        onPress={() => {
          setShowModal(!showModal);
        }}>
        <FontAwesome name="plus" size={36} color="black" />
      </TouchableOpacity>
      {visible ? (
        <LoaderKit
          style={{
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          name={'LineSpinFadeLoader'}
          size={50}
          color={'black'}
        />
      ) : (
        <View
          style={{
            padding: 6,
            backgroundColor: 'white',
            flexDirection: 'row',
          }}>
          <FlatList
            data={tempArray.length < 0 ? tempArray : apiData}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({item}: {item: item}) => {
              {
                console.log(tempArray.length);
              }
              return (
                <View style={styles.ViewStyle}>
                  <Text
                    numberOfLines={4}
                    adjustsFontSizeToFit
                    style={styles.productTextStyle}>
                    {item?.title}
                  </Text>
                  <Image
                    resizeMode="contain"
                    source={{uri: item.image}}
                    style={styles.styleImage}
                  />
                  <Text style={[styles.textStyle, {fontSize: 18}]}>
                    Rating : {item?.rating.rate}
                  </Text>
                  <Text
                    style={[
                      styles.textStyle,
                      {
                        fontSize: 20,
                        fontFamily: 'times new roman',
                        fontWeight: 'bold',
                        marginBottom: 15,
                      },
                    ]}>
                    Price : {item?.price}
                    <Text> </Text>
                    <Fontisto
                      name="inr"
                      size={15}
                      style={{paddingLeft: 10}}
                      color="red"
                    />
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'center',
                      paddingBottom: 20,
                    }}>
                    <TouchableOpacity
                      style={styles.editButton}
                      onPress={() => {
                        setShowModal(!showModal);
                        setTest(item?.title);
                      }}>
                      <FontAwesome
                        name="pencil-square-o"
                        size={36}
                        color="green"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteData(item)}>
                      <MaterialCommunityIcons
                        name="delete-alert"
                        size={36}
                        color="red"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}></FlatList>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Gill Sans',
    fontSize: 15,
    paddingLeft: 20,
    paddingTop: 5,
  },
  styleImage: {
    height: 200,
    width: '100%',
    borderRadius: 52,
    margin: 5,
  },
  productTextStyle: {
    fontSize: 16,
    height: 50,
    marginBottom: 10,
    color: 'black',
    fontWeight: '600',
    flexWrap: 'wrap',
    fontFamily: 'Gill Sans',
  },
  ViewStyle: {
    width: '50%',
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  editButton: {
    paddingRight: 40,
  },
  textInput: {
    borderRadius: 24,
    height: 50,
    width: 200,
    borderWidth: 2,
    textAlign: 'center',
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  lottie: {
    width: 100,
    height: 100,
  },
});
export default FunToDoUsingAxios;
