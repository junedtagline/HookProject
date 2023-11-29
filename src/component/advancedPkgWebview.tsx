import {View} from 'react-native';
import WebView from 'react-native-webview';

function FunAdvancedWebView() {
  return (
    <WebView source={{uri: 'https://taglineinfotech.com/'}} style={{flex: 1}} />
  );
}
export default FunAdvancedWebView;
