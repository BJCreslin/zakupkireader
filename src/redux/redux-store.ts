import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import repairReducer from "./repair-reducer";


let rootReducer = combineReducers({
    repairContent: repairReducer
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export default store;

// @ts-ignore
window.store = store;
