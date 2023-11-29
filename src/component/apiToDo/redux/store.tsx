import {combineReducers, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import countreducer from './reducer/countreducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  countreducer: countreducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

// import {createStore, combineReducers} from 'redux';
// import CountReducer from '../redux/reducer/countreducer';

// const rootReducer = combineReducers({
//   countReducer: CountReducer,
// });

// export const store = createStore(rootReducer);
