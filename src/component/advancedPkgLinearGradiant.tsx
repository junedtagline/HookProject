import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';

function FunAdvancedPkgLinearGradiant() {
  return (
    <View>
      <View>
        <LinearGradient
          colors={['white', 'yellow', 'grey']}
          style={styles.linearGradient}>
          <Text style={styles.linearText}>Sign in with Facebook</Text>
        </LinearGradient>
      </View>
      <View>
        <LinearTextGradient
          style={{
            fontWeight: 'bold',
            fontSize: 30,
            textAlign: 'center',
            fontFamily: 'Gill Sans',
          }}
          locations={[0, 1]}
          colors={['white', 'red']}
          start={{x: 1, y: 1}}
          end={{x: 1, y: 0.5}}>
          <Text> Gradiant Text </Text>
        </LinearTextGradient>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    height: 100,
    width: 300,
    alignItems: 'center',
    alignSelf: 'center',
    margin: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 24,
  },
  linearText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    marginTop: 40,
    color: 'black',
    backgroundColor: 'transparent',
  },
  linearBackGround: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default FunAdvancedPkgLinearGradiant;
