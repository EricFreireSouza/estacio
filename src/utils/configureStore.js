import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducer/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};
