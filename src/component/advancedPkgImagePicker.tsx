import {useState} from 'react';
import {Button, Image, Text, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

function FunAdvancedPkgImagePicker() {
  const [selectedImage, setSelectedImage] = useState(null);
  const openImagePicker = () => {
    try {
      const options = {
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
      };
      launchImageLibrary(options, response => {
        setSelectedImage(response.assets[0].uri);
      });
    } catch (error) {
      console.log(
        '🚀 ~ file: advancedPkgImagePicker.tsx:11 ~ openImagePicker ~ error:',
        error,
      );
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {selectedImage && (
        <Image
          source={{uri: selectedImage}}
          style={{flex: 1}}
          resizeMode="contain"
        />
      )}
      <View style={{marginTop: 20}}>
        <Button title="Choose from Device" onPress={openImagePicker} />
      </View>
    </View>
  );
}
export default FunAdvancedPkgImagePicker;
