import React, {useState} from 'react';
import {SafeAreaView, Text, View, Button, StyleSheet} from 'react-native';
import LocalizedStrings from 'react-native-localization';

const App = () => {
  const [temp, SetTemp] = useState<string>();
  const temp1 = () => {
    SetTemp('English');
  };
  const temp2 = () => {
    SetTemp('مثال');
  };

  const languages = new LocalizedStrings({
    en: {
      message: 'Localization Example',
    },
    es: {
      message: 'Ejemplo de localización',
    },
    zh: {
      message: '本地化示例',
    },
    ja: {
      message: 'ローカリゼーションの例',
    },
    ara: {
      message: 'مثال الترجمة',
    },
  });
  const english = () => {
    languages.setLanguage('en');
    setDisplayText(languages.message);
  };

  const spanish = () => {
    languages.setLanguage('es');
    setDisplayText(languages.message);
  };

  const chinese = () => {
    languages.setLanguage('zh');
    setDisplayText(languages.message);
  };

  const japanese = () => {
    languages.setLanguage('ja');
    setDisplayText(languages.message);
  };
  const arabic = () => {
    languages.setLanguage('ara');
    setDisplayText(languages.message);
  };

  const [displayText, setDisplayText] = useState(languages.message);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}> {displayText} </Text>
      <View style={styles.buttonLayout}>
        <Button
          title="English"
          color="black"
          onPress={() => english()}></Button>
      </View>
      <View style={styles.buttonLayout}>
        <Button
          title="Spanish"
          color="black"
          onPress={() => spanish()}></Button>
      </View>
      <View style={styles.buttonLayout}>
        <Button
          title="Chinese"
          color="black"
          onPress={() => chinese()}></Button>
      </View>
      <View style={styles.buttonLayout}>
        <Button
          title="Japanese"
          color="black"
          onPress={() => japanese()}></Button>
      </View>
      <View style={styles.buttonLayout}>
        <Button title="Arabic" color="black" onPress={() => arabic()}></Button>
      </View>

      <View style={styles.buttonLayout}>
        <Button
          title="Test To English"
          color="black"
          onPress={() => temp1()}></Button>
      </View>
      <View style={styles.buttonLayout}>
        <Button
          title="Test To Arabic"
          color="black"
          onPress={() => temp2()}></Button>
      </View>
      <Text>{temp}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
    padding: 10,
    fontFamily: 'Gill Sans',
  },
  buttonLayout: {
    backgroundColor: 'burlywood',
    fontSize: 18,
    fontFamily: 'times new roman',
    borderRadius: 24,
    padding: 10,
    margin: 10,
    width: 180,
    borderColor: 'red',
  },
  separator: {
    padding: 5,
  },
});

export default App;
