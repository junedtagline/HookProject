import React from 'react';
import {useFormik} from 'formik';
import {
  Alert,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import * as Yup from 'yup';
const FunHookUseFormik = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Fullname is required'),
    contactno: Yup.number()
      .required('Contact is required')
      .min(10, 'Number Should be 10 Digit')
      .max(10, 'Number Should be 10 Digit'),
    city: Yup.string().required('City name required'),
  });

  const {
    errors,
    values,
    handleChange,
    handleSubmit,
    touched,
    setFieldValue,
    handleBlur,
  } = useFormik({
    initialValues: {
      firstName: '',
      contactno: '',
      city: '',
    },
    validationSchema,
    onSubmit: values => {
      Alert.alert(JSON.stringify(values, null, 2));
    },
  });

  console.log({values, touched, errors});
  return (
    <View style={{padding: 10, margin: 10}}>
      <TextInput
        keyboardType="default"
        placeholder="Enter Your Name"
        onChangeText={text => {
          setFieldValue('firstName', text);
        }}
        value={values.firstName}
        style={styles.inputStyle}
        onBlur={handleBlur('firstName')}
      />
      {touched.firstName && errors.firstName && (
        <Text style={styles.errorText}>{errors.firstName}</Text>
      )}
      <TextInput
        keyboardType="phone-pad"
        placeholder="Contact No"
        onChangeText={handleChange('contactno')}
        value={values.contactno}
        style={styles.inputStyle}
        onBlur={handleBlur('contactno')}
      />
      {touched.contactno && errors.contactno && (
        <Text style={styles.errorText}>{errors.contactno}</Text>
      )}
      <TextInput
        keyboardType="default"
        placeholder="City "
        onChangeText={handleChange('city')}
        value={values.city}
        style={styles.inputStyle}
        onBlur={handleBlur('city')}
      />
      {touched.city && errors.city && (
        <Text style={styles.errorText}>{errors.city}</Text>
      )}
      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          marginLeft: 120,
        }}>
        <Text style={styles.buttonStyle}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 3,
    borderColor: '#4e4e4e',
    padding: 12,
    marginBottom: 5,
    width: 200,
    borderRadius: 32,
    marginLeft: 80,
  },
  errorText: {
    marginLeft: 90,
    fontSize: 12,
    color: '#FF0D10',
  },
  buttonStyle: {
    backgroundColor: 'cornsilk',
    width: 120,
    borderRadius: 12,
    borderWidth: 2,
    textAlign: 'center',
    height: 40,
    color: 'maroon',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'times new roman',
    marginTop: 30,
    paddingTop: 5,
  },
});
export default FunHookUseFormik;
