import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {persistStore} from 'redux-persist';
function TodoAppEcommerce() {
  const [cart, setCart] = useState();
  const navigation = useNavigation();
  const stack = createNativeStackNavigator();
  const product = [
    {
      id: 1,
      name: 'iPhone',
      category: 'Smart Phone',
      price: 1500,
      quantity: '1Pcs',
      images:
        'https://images.macrumors.com/t/oiWkxB5isnYn8BFbcgKsnDIUOdI=/800x0/smart/article-new/2023/09/iPhone-15-Pro-Lineup-Feature.jpg?lossy',
    },
    {
      id: 2,
      name: 'Samsung',
      category: 'Refrigrator',
      price: 200,
      quantity: '1Pcs',
    },
    {
      id: 3,
      name: 'Samsung',
      category: 'Smart Phone',
      price: 200,
      quantity: '1Pcs',
    },

    {
      id: 4,
      name: 'Oppo',
      category: 'Smart Phone',
      price: 400,
      quantity: '1Pcs',
    },
    {
      id: 5,
      name: 'MI',
      category: 'TV',
      price: 4500,
      quantity: '1Pcs',
    },
    {
      id: 6,
      name: 'LG',
      category: 'Washing Machine',
      price: 1000,
      quantity: '1Pcs',
    },
    {
      id: 7,
      name: 'Panasonic',
      category: 'Refrigrator',
      price: 1000,
      quantity: '1Pcs',
    },
  ];
  let createdDate = new Date().toJSON().slice(0, 10);
  console.log(createdDate);
  const handleSubmit = (item: any) => {
    let cartData = cart?.item ? cart?.item : [];

    const temp3 = cartData.filter(
      (getData: any) => getData?.category === item?.category,
    );
    let checkCategory = cartData.findIndex(
      (item1: any) => item1.category === item.category,
    );
    //Check Category Present
    if (checkCategory !== -1) {
      let checkProduct = cartData.findIndex((product1: any) =>
        product1?.product.find((test1: any) => test1?.name === item?.name),
      );
      console.log('ProductIndex :', checkProduct);
      // check if product Exist in category
      if (checkProduct >= 0) {
        let oldobj1 = cartData[checkProduct];

        let newIndex = oldobj1.product.findIndex(
          (test2: any) => test2.name === item?.name,
        );
        oldobj1.product[newIndex].TotalQuantity =
          oldobj1?.product[newIndex].TotalQuantity + 1;

        //Total Amount total Quantity
        let totalAmount = 0;
        let totalQty = 0;
        oldobj1.product.map(
          (getTotalAmount: any) => (
            (totalAmount =
              totalAmount +
              getTotalAmount.TotalQuantity * getTotalAmount.price),
            (totalQty = totalQty + getTotalAmount.TotalQuantity)
          ),
        );
        oldobj1.TotalQuantity = totalQty;
        oldobj1.TotalAmount = totalAmount;
        cartData[checkProduct] = oldobj1;
        let newUpdatdCart = [...cartData];
        cartData = newUpdatdCart;
      }
      // if product is not exist in category
      else {
        let oldObj = cartData[checkCategory];
        console.log('Old Object : ', oldObj);
        let totalAmount1 = oldObj.TotalAmount;
        let totalQty1 = oldObj.TotalQuantity;
        oldObj.product.map(
          (getTotalAmount: any) => (
            (totalAmount1 =
              totalAmount1 + getTotalAmount.TotalQuantity * item.price),
            (totalQty1 = totalQty1 + getTotalAmount.TotalQuantity)
          ),
        );

        oldObj.TotalAmount = totalAmount1;
        oldObj.TotalQuantity = totalQty1;
        console.log('Updated Old Object : ', oldObj);
        let newProductArray = [...oldObj.product, {...item, TotalQuantity: 1}];
        console.log('New Product Array : ', newProductArray);
        let newObj = {...oldObj, product: newProductArray};
        let newCart = [...cartData];
        console.log('New Cart :', newCart);
        console.log('New Cart Object : ', newObj);
        newCart[checkCategory] = newObj;
        console.log('New Cart : ', newCart);
        cartData = [...newCart];
      }
    }
    // check if category not present
    else {
      let obj2 = {
        category: item?.category,
        TotalAmount: item?.price,
        TotalQuantity: 1,
        product: [{...item, TotalQuantity: 1}],
      };
      cartData = [...cartData, obj2];
    }
    let objtoSet: any = {};

    if (!cart?.id) {
      objtoSet = {
        createdDate,
        id: 0,
        item: cartData,
      };
    } else {
      objtoSet = {
        ...cartData,
        item: cartData,
      };
    }
    setCart(objtoSet);
    persistStore;
  };
  return (
    <View>
      <View>
        <FlatList
          data={product}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          style={{height: 400}}
          renderItem={({item}) => {
            return (
              <View style={style.productCatelogueView}>
                {/* <Image
                  style={{height: 250, width: 150}}
                  resizeMode="contain"
                  source={{uri: item?.images}}></Image> */}
                <Text style={[style.txtStyle, {fontWeight: 'bold'}]}>
                  {item?.name}
                </Text>
                <Text
                  numberOfLines={1}
                  style={[style.txtStyle, {fontSize: 16}]}>
                  Details :{item?.category}
                </Text>
                <Text
                  style={[
                    style.txtStyle,
                    {fontSize: 18, fontFamily: 'times new roman'},
                  ]}>
                  Quntity: {item?.quantity}
                </Text>
                <Text
                  style={[style.txtStyle, {fontSize: 20, fontWeight: '600'}]}>
                  Price : {item?.price}
                </Text>
                <TouchableOpacity
                  style={{alignItems: 'center'}}
                  onPress={() => handleSubmit(item)}>
                  <Image
                    source={{
                      uri: 'https://t4.ftcdn.net/jpg/03/11/48/85/360_F_311488581_Yu4WPdLLNt47cymWU3VmHmOnH7BHqp9F.jpg',
                    }}
                    style={{height: 50, width: 50}}></Image>
                </TouchableOpacity>
              </View>
            );
          }}></FlatList>
      </View>
      <View>
        <Text
          style={{
            fontFamily: 'Gill Sans',
            fontWeight: 'bold',
            margin: 10,
            fontSize: 14,
            textAlign: 'center',
            textDecorationLine: 'underline',
          }}>
          Cart Details
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewCart', {cartData})}>
          <Text>View Cart</Text>
        </TouchableOpacity>
        {/* 
        <FlatList
          data={product}
          style={{
            height: 150,
            width: '95%',
            margin: 10,
            borderRadius: 24,
          }}
          renderItem={({item}) => {
            return (
              <View style={{margin: 10}}>
                <Text>Test</Text>
                <Text>Test</Text>
              </View>
            );
          }}></FlatList> */}
      </View>
    </View>
  );
}
export default TodoAppEcommerce;
const style = StyleSheet.create({
  productCatelogueView: {
    height: 220,
    width: '46%',
    borderRadius: 24,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    margin: 8,
    padding: 4,
  },
  txtStyle: {
    padding: 8,
    fontSize: 20,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
  },
  btnAddToCart: {
    height: 40,
    width: 150,
    backgroundColor: 'burlywood',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 4,
    borderRadius: 18,
    borderRightWidth: 2,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 4,
      width: 4,
    },
  },
  modalView: {
    flex: 1,
    backgroundColor: '#00000040',
    justifyContent: 'center',
    alignItems: 'center',
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
});

//   // If product Exist
//   if (checkProduct !== -1) {
//     console.log('Product Index : ', checkProduct);
//   }
//   //If Product not  Exist
//   else {

//   }
