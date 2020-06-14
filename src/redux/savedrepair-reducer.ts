import {PageType, SaveRepairTypes} from "../types/datatypes";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {SavedRepairApi} from "../api/api";
import {Dispatch} from "redux";

const SET_REPAIRS = "SET_REPAIRS";
const SET_TOTAL_ELEMENTS_NUMBER = "SET_TOTAL_ELEMENTS_NUMBER";
const SET_TOTAL_PAGES_NUMBER = "SET_TOTAL_PAGES_NUMBER";
const SET_FETCHING = "SET_FETCHING";

type InitialStateType = {
    isFetching: IsFetchingType,
    saveRepairs: SaveRepairTypes,
    page: PageType,
    totalElements: number,
    totalPages: number
}

type IsFetchingType = boolean;

type SetRepairsType = {
    type: typeof SET_REPAIRS,
    saveRepairs: SaveRepairTypes
}

type SetToggleFetchingType = {
    type: typeof SET_FETCHING,
    isFetching: IsFetchingType
}

type SetTotalElementsNumberType = {
    type: typeof SET_TOTAL_ELEMENTS_NUMBER,
    newTotalElements: number
}
type SetTotalPagesType = {
    type: typeof SET_TOTAL_PAGES_NUMBER,
    newTotalPages: number
}

type ActionsTypes = SetRepairsType | SetToggleFetchingType | SetTotalElementsNumberType | SetTotalPagesType

const initialState: InitialStateType = {
    isFetching: false,
    saveRepairs: [],
    page: {pageNumber: 0, pageSize: 10},
    totalElements: 0,
    totalPages: 0
}

let savedRepairReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_REPAIRS: {
            return {
                ...state,
                saveRepairs: action.saveRepairs
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

        case SET_TOTAL_ELEMENTS_NUMBER: {
            return {
                ...state,
                totalElements: action.newTotalElements
            }
        }
        case SET_TOTAL_PAGES_NUMBER: {
            return {
                ...state,
                totalPages: action.newTotalPages
            }
        }
        // case DELETE_REPAIR_BY_UIN: {
        //     let newRepairs: Array<RepairType> | null = null;
        //     if (action.procedure != undefined) {
        //
        //         if (state.repairs) {
        //             newRepairs = state.repairs.filter((repair) => {
        //                 // @ts-ignore
        //                 return repair.uin != action.procedure.uin;
        //             });
        //         }
        //
        //         return {
        //             ...state,
        //             repairs: newRepairs
        //         }
        //     } else
        //         return {
        //             ...state
        //         }
        // }

        default: {
            return state;
        }

    }
}

export const setRepairs = (saveRepairs: SaveRepairTypes): SetRepairsType => ({type: SET_REPAIRS, saveRepairs});
export const setTotalElements = (newTotalElements: number): SetTotalElementsNumberType => ({
    type: SET_TOTAL_ELEMENTS_NUMBER,
    newTotalElements
});
export const setTotalPages = (newTotalPages: number): SetTotalPagesType => ({
    type: SET_TOTAL_PAGES_NUMBER,
    newTotalPages
});
// export const deleteRepairs = (procedure: ProcedureType): DeleteRepairsType => ({type: DELETE_REPAIR_BY_UIN, procedure});

export const setToggleFetching = (isFetching: boolean): SetToggleFetchingType => ({
    type: SET_FETCHING,
    isFetching: isFetching
});


type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsTypes>;

export const getSavedRepairsFromZakupkiThunkCreator = (page: PageType): ThunkAction<Promise<void>, AppStateType, any, ActionsTypes> => {
    return async (dispatch, getState) => {
        dispatch(setToggleFetching(true));
        SavedRepairApi.getAll(page).then(function (data: any) {
            dispatch(setRepairs(data.content));
            dispatch(setTotalElements(data.totalElements))
            dispatch(setTotalPages(data.totalPages));
            dispatch(setToggleFetching(false));
        });
    }
};

export default savedRepairReducer;
