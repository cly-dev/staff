import {createStore,combineReducers} from "redux";
import UserReducer from "./reducer/user";
import AdminReducer from "./reducer/admin";
import {persistStore,persistReducer} from "redux-persist"
//sessionStorage机制
import storageSession from "redux-persist/lib/storage/session";
 // import storage from 'redux-persist/lib/storage'; //localStorage机制
//数据对象
const storageConfig={
    key:'user',
    storage:storageSession,
}
const allReducer=combineReducers({
    user:UserReducer,
    admin:AdminReducer
})
const myPersistReducer = persistReducer(storageConfig, allReducer);
const store=createStore(myPersistReducer);
export const persistor=persistStore(store)
export default store;