import {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';

function FunApiToDo() {
  type item = {
    id: string;
    email: string;
    website: string;
    name: string;
    phone: number;
    address: {
      street: string;
      zipcode: string;
      city: string;
    };
    title: string;
    brand: string;
    description: string;
    price: number;
    images: string;
  };
  type productData = {
    product: {
      category: string;
    };
  };
  const [userData, setUserData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [searchProductData, setSearchProductData] = useState([]);
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const data1 = await fetch('https://jsonplaceholder.typicode.com/users'); //API CALLING FOR GET DATA
      const finalData1 = await data1.json();
      setUserData(finalData1);

      const data2 = await fetch('https://dummyjson.com/products');
      const finalDat2 = await data2.json();
      setProductData(finalDat2?.products);

      const data3 = await fetch('https://dummyjson.com/products/categories'); //API CALLING FOR GET DATA
      const finalDat3 = await data3.json();
      let check = [];
      check = finalDat3;
      check.unshift('All');
      setCategoryData(finalDat3);
    } catch (error) {
      console.log('🚀 ~ file: apiTodo.tsx:21 ~ init ~ error:', error);
    }
  };

  function getsortedData(category1: string) {
    // Category wise Filtering
    let tempArray = [];
    if (category1 == 'All') {
      setSearchProductData(productData);
    } else {
      tempArray = productData.filter(product =>
        product.category.toUpperCase().includes(category1.toUpperCase()),
      );
      console.log(tempArray.length);
      tempArray.length > 0
        ? setSearchProductData(tempArray)
        : Alert.alert(category1, 'We have no Data For This Category');
    }
  }

  function getSearchData(temp: string) {
    //Product Name wise search
    let tempArray = [];
    tempArray = productData.filter(product =>
      product.title.toUpperCase().includes(temp.toUpperCase()),
    );
    setSearchProductData(tempArray);
  }
  return (
    <View>
      {/* First API Calling */}
      <FlatList
        data={userData}
        showsVerticalScrollIndicator={false}
        style={{height: 300, marginTop: 20}}
        renderItem={({item}: {item: item}) => {
          return (
            <View style={{padding: 10}}>
              <Text style={styles.mainTextStyle}>{item?.name}</Text>
              <Text style={styles.textStyle}>{item?.email}</Text>
              <Text style={styles.textStyle}>{item?.phone}</Text>
              <Text style={styles.textStyle}>{item?.website}</Text>
              <Text style={styles.textStyle}>{item?.address?.street}</Text>
              <Text style={styles.textStyle}>{item?.address?.city}</Text>
              <Text style={styles.textStyle}>{item?.address?.zipcode}</Text>
            </View>
          );
        }}></FlatList>

      {/* User Textiput wise Search */}
      <TextInput
        style={{
          borderWidth: 2,
          borderRadius: 12,
          height: 35,
          width: '46%',
          marginTop: 10,
          textAlign: 'center',
          alignSelf: 'center',
          fontFamily: 'Gill Sans',
        }}
        keyboardType="default"
        onChangeText={data => getSearchData(data)}
        id="txtSearch"
        placeholder="Search your product here"></TextInput>

      {/* display Category Button */}
      <FlatList
        data={categoryData}
        showsHorizontalScrollIndicator={false}
        style={{height: 50, marginTop: 20}}
        horizontal
        renderItem={({item}: {item: item}) => {
          return (
            <View>
              <ScrollView
                style={{
                  width: '100%',
                  paddingLeft: 5,
                }}>
                <TouchableOpacity
                  style={{
                    borderRadius: 16,
                    borderWidth: 2,
                    height: 50,
                    width: 120,
                  }}
                  onPress={() => getsortedData(item)}>
                  <Text
                    style={[
                      styles.filteredButtonStyle,
                      {fontSize: 20, textAlign: 'center', flexWrap: 'wrap'},
                    ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          );
        }}
      />
      {/* display 2nd API Data with All Product Searching and Sorting  */}
      <FlatList
        data={searchProductData.length > 0 ? searchProductData : productData}
        showsVerticalScrollIndicator={false}
        style={{height: 400, marginTop: 20}}
        renderItem={({item}: {item: item}) => {
          return (
            <View style={{padding: 10}}>
              <Text style={[styles.productMainText, {fontSize: 20}]}>
                {item?.title}
              </Text>
              <Text style={[styles.productMainText, {fontSize: 15}]}>
                {item?.brand}
              </Text>
              <Text style={{fontFamily: 'times new roman', fontSize: 14}}>
                {item?.description}
              </Text>
              <Text style={[styles.productMainText, {fontSize: 17}]}>
                Price : {item?.price}
              </Text>
              <Carousel
                width={420}
                height={200}
                autoPlay={true}
                data={item.images}
                pagingEnabled
                mode="parallax"
                scrollAnimationDuration={2000}
                renderItem={({item}) => {
                  return (
                    <Image
                      source={{uri: item}}
                      style={{
                        height: 200,
                        width: '90%',
                        borderRadius: 24,
                      }}
                    />
                  );
                }}
              />
            </View>
          );
        }}></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  mainTextStyle: {
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    fontSize: 22,
    backgroundColor: 'ghostwhite',
    marginTop: 10,
    paddingLeft: 10,
  },
  textStyle: {
    fontFamily: 'Gill Sans',
    fontSize: 14,
    paddingTop: 5,
    paddingLeft: 10,
    backgroundColor: 'ghostwhite',
  },
  productMainText: {
    fontFamily: 'times new roman',
    fontSize: 14,
    fontWeight: 'bold',
  },
  filteredButtonStyle: {
    fontFamily: 'Gill Sans',
    paddingTop: 8,
  },
});
export default FunApiToDo;
