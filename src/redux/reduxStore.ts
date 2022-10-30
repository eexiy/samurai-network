import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// @ts-ignore
import profileReducer from "./profileReducer.ts";
// @ts-ignore
import dialogsReducer from "./dialogsReducer.ts";
// @ts-ignore
import usersReducer from './usersReducer.ts';
// @ts-ignore
import authReducer from './authReducer.ts';
// @ts-ignore
import appReducer from './appReducer.ts';
// @ts-ignore
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})

type RootReducerType = typeof rootReducer
type AppStateType = ReturnType<RootReducerType>

let state: AppStateType


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store;