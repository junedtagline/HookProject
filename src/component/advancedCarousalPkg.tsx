import * as React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {create} from 'react-test-renderer';

function FunAdvancedPkgCrousal() {
  const width = Dimensions.get('window').width;
  const dataSource = [
    {url: '', color: '#FE0404'},
    {url: '', color: '#522A73'},
    {url: '', color: '#008200'},
    {url: '', color: '#034223'},
    {url: '', color: '#015280'},
  ];
  const views1 = [
    {
      imgUrl: 'https://picsum.photos/200/300?random=1',
      title: 'Airport Cabs',
    },
    {
      imgUrl: 'https://picsum.photos/200/300?random=3',
      title: 'Gift Cards',
    },
    {
      imgUrl: 'https://picsum.photos/200/300?random=5',
      title: 'Hourly Stays',
    },
    {
      imgUrl: 'https://picsum.photos/200/300?random=7',
      title: 'Travel Insurance',
    },
    {
      imgUrl: 'https://picsum.photos/200/300?random=9',
      title: 'Forex',
    },
    {
      imgUrl: 'https://picsum.photos/200/300?random=11',
      title: 'HomeStays & Villas',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <Carousel
        width={width}
        height={width / 2}
        autoPlay={true}
        data={dataSource}
        scrollAnimationDuration={1500}
        renderItem={({index}) => (
          <View
            style={{
              flex: 1,
              borderWidth: 2,
              borderBlockColor: 'red',
              justifyContent: 'center',
              margin: 20,
              borderRadius: 24,
              backgroundColor: 'burlywood',
            }}>
            <Text style={{textAlign: 'center', fontSize: 30}}>{index}</Text>
          </View>
        )}
      />
      <Carousel
        width={width}
        height={width / 2}
        autoPlay={true}
        data={views1}
        mode="parallax"
        scrollAnimationDuration={1500}
        renderItem={({item: {imgUrl}}) => (
          <Image
            source={{uri: imgUrl}}
            style={{height: 300, width: 250, borderRadius: 24}}
          />
        )}
      />
    </View>
  );
}
export default FunAdvancedPkgCrousal;
