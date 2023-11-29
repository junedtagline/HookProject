import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {string} from 'yup';
const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    productName: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.productName.push(action.payload);
      Alert.alert('Data Added !!');
    },
    deleteTodo: (name, action) => {
      let tempArray = [];

      tempArray = name.productName?.filter(
        product => product?.productName !== action.payload.productName,
      );
    },
  },
});

export const {addTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;
