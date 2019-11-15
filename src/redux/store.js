import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createFilter from 'redux-persist-transform-filter'
import logger from 'redux-logger'
import rootReducer from './root.reducer'
import rootSaga from './root.saga'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const subsetFilter = createFilter(
  'auth', 
  ['userCreds']
);

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
  transforms: [subsetFilter]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const store = createStore(persistedReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;