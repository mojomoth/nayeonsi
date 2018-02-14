import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import sagas from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
const store = createStoreWithMiddleware(persistedReducer);

// then run the saga
sagaMiddleware.run(sagas);

export default store;
