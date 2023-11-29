import {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addTodo,
  deleteTodo,
} from '../../apiToDo/redux/reducer/reduxToolkitSlice';
export default function HomeSlice() {
  const {productName} = useSelector(
    (state: {todoReducer: {productName: []}}) => {
      console.log({state});
      return state;
    },
  );

  const dispatch = useDispatch();
  const [txtProductName, setProductName] = useState('');
  const addItem = () => {
    dispatch(addTodo(txtProductName));
  };
  const deleteItem = (item: string) => {
    console.log(item);
    dispatch(deleteTodo(item));
  };
  return (
    <View>
      <View>
        <TextInput
          onChangeText={data => setProductName(data)}
          style={styles.txtInput}></TextInput>
        <TouchableOpacity onPress={addItem} style={styles.btnStyle}>
          <Text
            style={{fontFamily: 'Gill Sans', fontSize: 15, fontWeight: 'bold'}}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={productName}
          showsVerticalScrollIndicator={false}
          style={{
            padding: 8,
            margin: 8,
            borderRadius: 24,
            height: 150,
          }}
          renderItem={({item}) => (
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.txtStyle}>{item}</Text>
              <TouchableOpacity
                style={{
                  padding: 8,
                  borderWidth: 2,
                  height: 35,
                }}
                onPress={() => deleteItem(item)}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          )}></FlatList>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  txtInput: {
    borderRadius: 24,
    borderWidth: 2,
    width: 150,
    alignSelf: 'center',
    margin: 10,
    textAlign: 'center',
    fontFamily: 'Gill Sans',
    height: 40,
  },
  btnStyle: {
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 24,
    width: 120,
    height: 35,
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'burlywood',
  },
  txtStyle: {
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    height: 40,
    fontSize: 18,
    textAlign: 'justify',
    margin: 5,
  },
});
