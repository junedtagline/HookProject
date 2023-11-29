import {Provider} from 'react-redux';
import HomeSlice from '../../component/apiToDo/redux/HomeSlice';
import {persistor, store} from '../apiToDo/redux/toolkitStore';
import {PersistGate} from 'redux-persist/integration/react';

// ...
export const FunReduxSlice = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomeSlice />
      </PersistGate>
    </Provider>
  );
};
