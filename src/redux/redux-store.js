import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import repairReducer from "./repair-reducer";


let reducers = combineReducers({
    repairContent: repairReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store;

export default store;
