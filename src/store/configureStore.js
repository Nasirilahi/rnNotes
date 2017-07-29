import { applyMiddleware, compose, createStore } from "redux"
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from "../reducers";
import { autoRehydrate, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';

// add `autoRehydrate` as an enhancer to your store (note: `autoRehydrate` is not a middleware)
export const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(logger, thunk),
    autoRehydrate({log:true})
  )
)

const persistor = persistStore(store, {storage: AsyncStorage});
