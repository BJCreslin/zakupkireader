import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import repairReducer from "./repair-reducer";
import savedRepairReducer from "./savedrepair-reducer";


let rootReducer = combineReducers({
    repairContent: repairReducer,
    savedRepairContent:savedRepairReducer
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export default store;

// @ts-ignore
window.store = store;
