import {configureStore} from '@reduxjs/toolkit';
import todoSlice from './reducer/reduxToolkitSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, todoSlice);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
export const persistor = persistStore(store);
// const store = configureStore({
//   reducer: {
//     todoReducer: todoSlice,
//   },
// });
//export default store;
