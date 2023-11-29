import {Formik} from 'formik';
import {useState} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as yup from 'yup';
function FunAdvancedPkgFormik() {
  const inputStyle = {};
  const [nameTranslate, setNameTranslate] = useState<string>();
  function toEnghlish() {
    setNameTranslate('Your Name');
  }
  function tospanish() {
    setNameTranslate('Su nombre');
  }
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={values => Alert.alert(JSON.stringify(values))}
      validationSchema={yup.object().shape({
        name: yup.string().required('Please, provide your name!'),
        email: yup.string().email().required('Please Provide you Email'),
        password: yup
          .string()
          .min(4)
          .max(10, 'Password should not excced 10 chars.')
          .required('Please Provide Your Password'),
      })}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <View style={styles.formContainer}>
          <TextInput
            value={values.name}
            style={styles.inputStyle}
            onChangeText={handleChange('name')}
            onBlur={() => setFieldTouched('name')}
            placeholder={nameTranslate}
          />
          {touched.name && errors.name && (
            <Text style={styles.errorText}>{errors.name}</Text>
          )}
          <TextInput
            value={values.email}
            style={styles.inputStyle}
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
            placeholder="Your E-mail"
          />
          {touched.email && errors.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}
          <TextInput
            value={values.password}
            style={styles.inputStyle}
            onChangeText={handleChange('password')}
            placeholder="Your Password"
            onBlur={() => setFieldTouched('password')}
            secureTextEntry={true}
          />
          {touched.password && errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
          <TouchableOpacity
            disabled={!isValid}
            onPress={handleSubmit}
            style={{
              marginLeft: 120,
            }}>
            <Text style={styles.buttonStyle}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!isValid}
            onPress={toEnghlish}
            style={{
              marginLeft: 120,
            }}>
            <Text style={styles.buttonStyle}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!isValid}
            onPress={tospanish}
            style={{
              marginLeft: 120,
            }}>
            <Text style={styles.buttonStyle}>spanish</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}
const styles = StyleSheet.create({
  formContainer: {
    padding: 50,
  },
  inputStyle: {
    borderWidth: 3,
    borderColor: '#4e4e4e',
    padding: 12,
    marginBottom: 5,
    width: 200,
    borderRadius: 32,
    marginLeft: 80,
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
  errorText: {
    marginLeft: 90,
    fontSize: 12,
    color: '#FF0D10',
  },
});
export default FunAdvancedPkgFormik;
