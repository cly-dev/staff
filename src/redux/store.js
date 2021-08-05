import {createStore} from "redux";
import UserReducer from "./reducer/user";
import {persistStore,persistReducer} from "redux-persist"
//sessionStorage机制
import storageSession from "redux-persist/lib/storage/session";
 // import storage from 'redux-persist/lib/storage'; //localStorage机制
//数据对象
const storageConfig={
    key:'user',
    storage:storageSession,
}
const myPersistReducer = persistReducer(storageConfig, UserReducer);
const store=createStore(myPersistReducer);
export const persistor=persistStore(store)
export default store;