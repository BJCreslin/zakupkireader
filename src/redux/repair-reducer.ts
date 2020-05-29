import {ZakupkiRepairAPI} from "../api/api";
import {ProcedureType, RepairType} from "../types/datatypes";
import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

const SET_REPAIRS = "SET_REPAIRS";
const SET_FETCHING = "SET_FETCHING";
const DELETE_REPAIR_BY_UIN = "DELETE_REPAIR_BY_UIN";

type InitialStateType = {
    isFetching: IsFetchingType,
    repairs: undefined | null | RepairType[]
}

type IsFetchingType = boolean;

type ActionsTypes = SetRepairsType | DeleteRepairsType | SetToggleFetchingType

const initialState: InitialStateType = {
    isFetching: false,
    repairs: []
}

let repairReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_REPAIRS: {
            return {
                ...state,
                repairs: action.repairs
            }
        }
        case SET_FETCHING: {
            if (action.isFetching !== undefined) {
                return {
                    ...state,
                    isFetching: action.isFetching
                }
            } else
                return {
                    ...state
                }
        }
        case DELETE_REPAIR_BY_UIN: {
            let newRepairs: Array<RepairType> | null = null;
            if (action.procedure !== undefined) {

                if (state.repairs) {
                    newRepairs = state.repairs.filter((repair) => {
                        // @ts-ignore
                        return repair.uin = action.procedure.uin;
                    });
                }

                // let newRepairs =state.repairs.splice(state.repairs.findIndex(item => item.uin === action.procedure.uin), 1)

                return {
                    ...state,
                    repairs: newRepairs
                }
            } else
                return {
                    ...state
                }

        }

        default: {
            return state;
        }

    }
}
export default repairReducer;

type SetRepairsType = {
    type: typeof SET_REPAIRS,
    repairs: RepairType[]
}

type DeleteRepairsType = {
    type: typeof DELETE_REPAIR_BY_UIN,
    procedure: ProcedureType
}

type SetToggleFetchingType = {
    type: typeof SET_FETCHING,
    isFetching: IsFetchingType
}

export const setRepairs = (repairs: RepairType[]): SetRepairsType => ({type: SET_REPAIRS, repairs});
export const deleteRepairs = (procedure: ProcedureType): DeleteRepairsType => ({type: DELETE_REPAIR_BY_UIN, procedure});

export const setToggleFetching = (isFetching: boolean): SetToggleFetchingType => ({
    type: SET_FETCHING,
    isFetching: isFetching
});


type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsTypes>

export const getRepairsFromZakupkiThunkCreator = (): ThunkAction<Promise<void>, AppStateType, any, ActionsTypes> => {
    return async (dispatch, getState ) => {
        dispatch(setToggleFetching(true));
        ZakupkiRepairAPI.getAllNew().then(function (data: any) {
            dispatch(setRepairs(data));
            dispatch(setToggleFetching(false));
        });
    }
};
export const saveRepairsToZakupkiThunkCreator = (procedure: ProcedureType): ThunkAction<Promise<void>, AppStateType, any, ActionsTypes> => {
    return async (dispatch, getState) => {
        dispatch(setToggleFetching(true));
        ZakupkiRepairAPI.saveProcedure(procedure).then(function (data: any) {
            dispatch(deleteRepairs(procedure));
            dispatch(setToggleFetching(false));
        });
    }
};
