import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Home from './home';
import {persistor, store} from '../apiToDo/redux/store';

function FunReduxCore() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
}
export default FunReduxCore;
