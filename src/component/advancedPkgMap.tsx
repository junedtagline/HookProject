import {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Geojson from 'react-native-geojson';
import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
  Polygon,
  Polyline,
} from 'react-native-maps';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
function FunAdvancedPkgMap() {
  const [mapDalta, setmapDalta] = useState(0.01);
  const myPlace = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: [21.187843393041636, 72.82459284558813],
        },
      },
    ],
  };

  const mapType = [
    {
      mapsStyle: 'Map Style',
      typeOfMap: [
        {functionName: 'simpleMap', display: 'Simple Map'},
        {functionName: 'marker', display: 'Marker'},
        {functionName: 'polyGon', display: 'Poly Gon'},
        {functionName: 'polyLine', display: 'Poly Line'},
        {functionName: 'circle', display: 'Circle'},
        {functionName: 'customStyled', display: 'Custom Styled Map'},
      ],
    },
  ];
  const simpleMap = () => {
    console.log('test');
    return <Text>Test</Text>;
  };
  const cuttomMapStyle = [
    {elementType: 'geometry', stylers: [{color: '#f5f5f5'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#000000'}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#ff0000'}],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '##000000'}],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#6b9a76'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#38414e'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9ca5b3'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#746855'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f3d19c'}],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#87cefa'}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#87cefa'}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#000000'}],
    },
  ];
  const [expandedDrawerItem, setExpandedDrawerItem] = useState<string | null>(
    null,
  );
  return (
    <View>
      <FlatList
        data={mapType}
        renderItem={({item}) => {
          return (
            <>
              <Entypo
                name={expandedDrawerItem == item?.mapsStyle ? 'minus' : 'plus'}
                size={24}
                color="black">
                <TouchableOpacity
                  style={{paddingTop: 20}}
                  onPress={() => {
                    setExpandedDrawerItem(previousValue => {
                      if (previousValue == item?.mapsStyle) {
                        return null;
                      } else {
                        return item?.mapsStyle;
                      }
                    });
                  }}
                  activeOpacity={2}>
                  <Text
                    style={{
                      fontFamily: 'times new roman',
                      fontSize: 20,
                      color: '#4d1d19',
                      fontWeight: 'bold',
                      marginLeft: 15,
                    }}>
                    {item?.mapsStyle}
                  </Text>
                </TouchableOpacity>
              </Entypo>
              {item?.typeOfMap.length > 0 &&
                expandedDrawerItem == item?.mapsStyle &&
                item?.typeOfMap.map(typeOfMap => {
                  return (
                    <TouchableOpacity
                      style={{
                        height: 30,
                        paddingTop: 10,
                      }}
                      onPress={typeOfMap?.functionName}>
                      <Text
                        style={{
                          fontFamily: 'times new roman',
                          fontSize: 15,
                          color: 'maroon',
                          marginLeft: 40,
                        }}>
                        {typeOfMap?.display}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
            </>
          );
        }}
        keyExtractor={item => item?.mapsStyle}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.textstyle}>Simple Map</Text>
        </View>
        <MapView
          region={{
            latitude: 128.6448,
            longitude: -122.4324,
            latitudeDelta: 0.9,
            longitudeDelta: 100,
          }}
          style={styles.map}></MapView>

        <View>
          <Text style={styles.textstyle}>Map With Marker</Text>
        </View>
        <MapView
          region={{
            latitude: 21.23819998144366,
            longitude: 72.88742018081629,
            latitudeDelta: 0.5,
            longitudeDelta: 0.3,
          }}
          toolbarEnabled={true}
          style={styles.map}>
          <Marker
            coordinate={{
              latitude: 21.23819998144366,
              longitude: 72.88742018081629,
            }}
            title={'Surat'}
            description={'Tagline Infotech'}></Marker>
        </MapView>

        <View>
          <Text style={styles.textstyle}>Google Map With Zoom In Out</Text>
        </View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: mapDalta,
            longitudeDelta: mapDalta,
          }}></MapView>
        <View
          style={{
            alignSelf: 'flex-end',
            flexDirection: 'row',
            padding: 12,
            marginRight: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              setmapDalta(pre => Number(pre - 0.01));
              console.log(mapDalta);
            }}>
            <Feather name="zoom-in" size={42} color="maroon" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setmapDalta(pre => Number(pre + 0.01));
              console.log(mapDalta);
            }}>
            <Feather name="zoom-out" size={42} color="maroon" />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.textstyle}>Google Map With Call Out</Text>
        </View>
        <MapView
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: 21.23819998144366,
            longitude: 72.88742018081629,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          }}
          toolbarEnabled={true}
          style={styles.map}>
          <Marker
            draggable
            coordinate={{
              latitude: 21.23819998144366,
              longitude: 72.88742018081629,
            }}
            pinColor="blue">
            <Callout>
              <Image
                source={require('../../src/assets/taglineinfotech.webp')}
                style={{height: 100, width: 200}}></Image>
              <Text>Tagline Infotech</Text>
            </Callout>
          </Marker>
        </MapView>

        <View>
          <Text style={styles.textstyle}>Google Map With Circle & Polygon</Text>
        </View>
        <MapView
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: 21.23819998144366,
            longitude: 72.88742018081629,
            latitudeDelta: 0.02,
            longitudeDelta: 0,
          }}
          toolbarEnabled={true}
          style={[styles.map]}>
          <Circle
            center={{
              latitude: 21.187615821303773,
              longitude: 72.82711033247897,
            }}
            radius={100}
            strokeWidth={3}
            fillColor="burlywood"
            strokeColor="black"></Circle>
          <Polygon
            coordinates={[
              {latitude: 21.187843393041636, longitude: 72.82459284558813},
              {latitude: 21.18378535249945, longitude: 72.83024782983722},
              {latitude: 21.18136916361323, longitude: 72.82211610565118},
              {latitude: 21.183865446482482, longitude: 72.81504379623587},
              {latitude: 21.19057983775098, longitude: 72.81796434506325},
              {latitude: 21.190246127694117, longitude: 72.82370522780725},
            ]}
            strokeWidth={3}
            fillColor="yellow"></Polygon>
        </MapView>

        <View>
          <Text style={styles.textstyle}>Google Map With PolyLine</Text>
        </View>
        <MapView
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: 21.23819998144366,
            longitude: 72.88742018081629,
            latitudeDelta: 0.05,
            longitudeDelta: 0,
          }}
          toolbarEnabled={true}
          style={[styles.map]}>
          <Polyline
            coordinates={[
              {latitude: 21.187843393041636, longitude: 72.82459284558813},
              {latitude: 21.18378535249945, longitude: 72.83024782983722},
              {latitude: 21.18136916361323, longitude: 72.82211610565118},
              {latitude: 21.183865446482482, longitude: 72.81504379623587},
              {latitude: 21.19057983775098, longitude: 72.81796434506325},
              {latitude: 21.190246127694117, longitude: 72.82370522780725},
            ]}
            strokeWidth={5}
            strokeColor="red"></Polyline>
        </MapView>
        <View>
          <Text style={styles.textstyle}>Custom Map</Text>
        </View>
        <SafeAreaView style={{flex: 5, height: 250}}>
          <View style={styles.container}>
            <MapView
              provider={PROVIDER_GOOGLE}
              region={{
                latitude: 21.148341391266925,
                longitude: 72.85864053926133,
                latitudeDelta: 0.05,
                longitudeDelta: 0,
              }}
              style={styles.mapStyle}
              customMapStyle={cuttomMapStyle}></MapView>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  textstyle: {
    paddingTop: 3,
    textAlign: 'center',
    fontFamily: 'times new roman',
    fontSize: 20,
    fontWeight: 'bold',
    top: 1,
    backgroundColor: 'burlywood',
  },
  map: {
    height: 220,
    width: '100%',
    backgroundColor: 'black',
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export default FunAdvancedPkgMap;
