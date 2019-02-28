import { createStore, applyMiddleware } from 'redux';
import loogger from 'redux-logger';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducers from '../reducers';

const persistConfig = {
    key: 'root',
    storage,
}

const combinedReducers = combineReducers({
    ...reducers,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers)


const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
    middleware.push(loogger);
}


export const store = createStore(persistedReducer, applyMiddleware(...middleware))
export const persistor = persistStore(store)
