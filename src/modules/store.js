import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from ".";

const persistConfig = {
    key: 'root',
    storage: storage,
    // whitelist: ['user', 'preferences'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);