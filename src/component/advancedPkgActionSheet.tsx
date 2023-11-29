import {useRef} from 'react';
import {Alert, Text, View} from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import {TouchableOpacity} from 'react-native-gesture-handler';

function FunAdvancedActionSheet() {
  const actionHook = useRef();
  const actionSheetData = ['Ahemdabad', 'Vadodra', 'Surat', 'Delete', 'Cancel'];
  const showActionSheet = () => {
    actionHook?.current?.show();
  };
  return (
    <View>
      <TouchableOpacity
        onPress={showActionSheet}
        style={{
          height: 'auto',
          width: 180,
          alignSelf: 'center',
          margin: 10,
          padding: 5,
          backgroundColor: 'burlywood',
          borderWidth: 2,
          borderRadius: 24,
        }}>
        <Text
          style={{textAlign: 'center', fontFamily: 'Gill Sans', fontSize: 18}}>
          Open Action Sheet
        </Text>
      </TouchableOpacity>
      <ActionSheet
        ref={actionHook}
        title={'Select Your City'}
        options={actionSheetData}
        cancelButtonIndex={5}
        onPress={index => {
          Alert.alert(actionSheetData[index]);
        }}>
        <Text>ergtergreghrthg</Text>
      </ActionSheet>
    </View>
  );
}
export default FunAdvancedActionSheet;
