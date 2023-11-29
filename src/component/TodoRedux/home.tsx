import {useDispatch, useSelector} from 'react-redux';
import {
  increment,
  decrement,
  addData,
  addProduct,
  editProduct,
  deleteProduct,
} from '../../component/apiToDo/redux/action/countAction';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import * as Yup from 'yup';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Modal} from 'react-native';
import {useFormik} from 'formik';
export default function Home() {
  const dispatch = useDispatch();
  const {count, name, product} = useSelector(state => state.countreducer);
  console.log('🚀 ~ file: home.tsx:29 ~ Home ~ product:', product);
  const [txtValue, setTxtValue] = useState('');
  const [productId, setProductId] = useState('');
  const [txtProductName, setProductName] = useState('');
  const [txtProductRate, setProductRate] = useState('');
  const [txtProductDetails, setProductDetails] = useState('');
  const [txtProductReview, setProductReview] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [updateButtonVal, setUpdateButtonVal] = useState(false);

  const validationSchema = Yup.object().shape({
    productName: Yup.string().required('Product Name is required'),
    productRate: Yup.string().required('Product Rate is required'),
  });
  const {
    errors,
    values,
    touched,
    handleReset,
    handleBlur,
    handleSubmit,
    handleChange,
    setFieldValue,
    setValues,
  } = useFormik({
    initialValues: {
      productName: '',
      productRate: '',
      productDescription: '',
      productReview: '',
    },
    validationSchema,
    onSubmit: values => {
      console.log('Formik passes ', values);
      Alert.alert('Product Added');
      dispatch(addProduct(values));
      formClear();
    },
  });

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const funAdddata = () => {
    dispatch(addData(txtValue));
  };

  const formClear = () => {
    handleReset();
    setProductName('');
    setProductDetails('');
    setProductRate('');
    setProductReview('');
    setModalVisible(!modalVisible);
  };
  const clearData = () => {
    formClear();
    setUpdateButtonVal(false);
  };
  const handleEdit = (product: any) => {
    console.log(product);
    setValues(product);
  };
  const handleEditData = () => {
    Alert.alert('Product Updated');
    setModalVisible(false);
    dispatch(editProduct({...product, productId}));
    formClear();
  };
  const handleDeleteData = (productId: string) => {
    console.log('Home product Id : ', productId);
    dispatch(deleteProduct(productId));
  };

  const showData = (product: any) => {
    setProductId(product.productId);
    setProductName(product.productName);
    setProductDetails(product.productDescription);
    setProductRate(product.productRate);
    setProductReview(product.productReview);
  };
  return (
    <View>
      {/* Modal View */}
      <Modal transparent={false} visible={viewModal}>
        <View style={[style.modalView]}>
          <View style={[style.productView, {width: 300, height: 150}]}>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setViewModal(false);
              }}>
              <FontAwesome name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text style={style.textStyle}>Product Name : {txtProductName}</Text>
            <Text style={style.textStyle}>Product Rate : {txtProductRate}</Text>
            <Text style={style.textStyle}>
              Product Description : {txtProductDetails}
            </Text>
            <Text style={style.textStyle}>
              Product Review : {txtProductReview}
            </Text>
          </View>
        </View>
      </Modal>
      <Modal transparent={false} visible={modalVisible}>
        <View style={style.modalView}>
          <View style={style.productView}>
            <View style={{flexDirection: 'row', width: 350}}>
              <Text style={style.textStyle}>Product Name :</Text>
              <TextInput
                value={values.productName}
                keyboardType="default"
                placeholder="Product Name"
                onChangeText={handleChange('productName')}
                onBlur={handleBlur('productName')}
                style={style.txtInputStyle}></TextInput>
            </View>
            {touched.productName && errors.productName && (
              <Text style={style.errorText}>{errors.productName}</Text>
            )}
            <View style={{flexDirection: 'row', paddingTop: 10}}>
              <Text style={[style.textStyle]}>Product Rate :</Text>
              <TextInput
                value={values.productRate}
                onBlur={handleBlur('productRate')}
                keyboardType="number-pad"
                placeholder="Product Rate"
                onChangeText={handleChange('productRate')}
                style={[style.txtInputStyle, {marginLeft: 55}]}></TextInput>
            </View>
            {touched.productRate && errors.productRate && (
              <Text style={style.errorText}>{errors.productRate}</Text>
            )}

            <View style={{flexDirection: 'row', paddingTop: 10}}>
              <Text style={style.textStyle}>Product Details :</Text>
              <TextInput
                value={values.productDescription}
                keyboardType="default"
                placeholder="Product Description"
                onChangeText={handleChange('productDescription')}
                style={style.txtInputStyle}></TextInput>
            </View>

            <View style={{flexDirection: 'row', paddingTop: 10}}>
              <Text style={style.textStyle}>Product Review :</Text>
              <TextInput
                value={values.productReview}
                keyboardType="numeric"
                placeholder="Product Review"
                onChangeText={handleChange('productReview')}
                style={style.txtInputStyle}></TextInput>
            </View>

            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              {updateButtonVal ? (
                <TouchableOpacity
                  style={[style.btnStyle, {marginTop: 40}]}
                  onPress={handleEditData}>
                  <Text style={style.textStyle}>Update</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={[style.btnStyle, {marginTop: 40}]}
                  onPress={handleSubmit}>
                  <Text style={style.textStyle}>Save</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={[style.btnStyle, {marginTop: 40}]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  clearData();
                }}>
                <Text style={style.textStyle}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* Increment Decrement  */}
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          alignContent: 'center',
        }}>
        <Text style={[style.textStyle, {marginLeft: '30%'}]}>{count}</Text>
        <TouchableOpacity style={style.btnStyle} onPress={handleIncrement}>
          <Text style={style.textStyle}>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btnStyle} onPress={handleDecrement}>
          <Text style={style.textStyle}>Decrease</Text>
        </TouchableOpacity>
      </View>

      {/* Single Input Text save */}
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TextInput
          keyboardType="default"
          placeholder="Enter Your text"
          onChangeText={data => setTxtValue(data)}
          style={style.txtInputStyle}></TextInput>
        <TouchableOpacity style={style.btnStyle} onPress={() => funAdddata()}>
          <Text style={[style.textStyle]}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{height: 100}}
        numColumns={3}
        data={name}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          () => console.log(item);
          return (
            <View style={{padding: 10, height: 40, width: 120}}>
              <Text
                style={{
                  fontFamily: 'Gill Sans',
                  fontSize: 16,
                  textAlign: 'center',
                }}>
                {item}
              </Text>
            </View>
          );
        }}
      />

      {/* Crud On Product */}

      <TouchableOpacity
        style={{padding: 20, height: 40}}
        onPress={() => {
          setModalVisible(!modalVisible);
          setUpdateButtonVal(updateButtonVal);
        }}>
        <View style={{flexDirection: 'row', height: 80}}>
          <FontAwesome name="plus" size={18} color="black" />
          <Text style={style.clickme}>click to add product</Text>
        </View>
      </TouchableOpacity>

      <View>
        <FlatList
          style={style.mainFlateListView}
          numColumns={3}
          data={product}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            () => console.log(item);
            return (
              <View style={style.productFlateListMainView}>
                <Text
                  style={[
                    style.productFlateListView,
                    {fontWeight: 'bold', fontSize: 20, textAlign: 'left'},
                  ]}>
                  {item.productName}
                </Text>
                <Text style={[style.productFlateListView, {textAlign: 'left'}]}>
                  {item.productDescription}
                </Text>
                <Text style={style.productFlateListView}>
                  {item.productRate}
                </Text>
                <Text style={style.productFlateListView}>
                  {item.productReview}
                </Text>
                <View style={{flexDirection: 'row', marginTop: 30}}>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      setUpdateButtonVal(!updateButtonVal);
                      handleEdit(item);
                    }}>
                    <FontAwesome
                      name="pencil-square-o"
                      size={36}
                      color="green"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setViewModal(true);
                      showData(item);
                    }}
                    style={{marginLeft: 10}}>
                    <AntDesign name="eye" size={36} color="burlywood" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{marginLeft: 10}}
                    onPress={() => {
                      handleDeleteData(item?.productId);
                    }}>
                    <MaterialCommunityIcons
                      name="delete-alert"
                      size={36}
                      color="red"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  btnStyle: {
    height: 35,
    width: 100,
    backgroundColor: 'burlywood',
    boderRadious: 12,
    borderWidth: 2,
    textAlign: 'center',
    borderRadius: 3,
    margin: 10,
    paddingTop: 4,
  },
  textStyle: {
    fontFamily: 'times new roman',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
  },
  txtInputStyle: {
    height: 40,
    width: 180,
    marginLeft: 45,
    borderWidth: 2,
    borderRadius: 16,
    borderColor: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Gill Sans',
  },
  productView: {
    backgroundColor: 'white',
    padding: 9,
    marginTop: 5,
    borderRadius: 24,
    borderWidth: 0.5,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  modalView: {
    flex: 1,
    backgroundColor: '#00000040',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productFlateListView: {
    fontFamily: 'Gill Sans',
    fontSize: 16,
    textAlign: 'center',
  },
  mainFlateListView: {
    height: 400,
    borderRadius: 34,
    padding: 2,
    margin: 5,
  },
  productFlateListMainView: {
    padding: 10,
    height: 165,
    width: 160,
    margin: 10,
    borderRadius: 24,
    borderWidth: 2,
  },
  clickme: {
    fontFamily: 'Gill Sans',
    fontSize: 16,
    fontWeight: 'bold',
    padding: -1,
    paddingLeft: 5,
    textDecorationLine: 'underline',
  },
  errorText: {
    marginLeft: 180,
    marginTop: 4,
    fontSize: 12,
    color: '#FF0D10',
  },
});
