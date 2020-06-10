import {RepairsType, RepairType, SaveRepairTypes} from "../types/datatypes";

const SET_REPAIRS = "SET_REPAIRS";
const SET_FETCHING = "SET_FETCHING";

type InitialStateType = {
    isFetching: IsFetchingType,
    saveRepairs: SaveRepairTypes
}

type IsFetchingType = boolean;

type ActionsTypes = SetRepairsType | DeleteRepairsType | SetToggleFetchingType

const initialState: InitialStateType = {
    isFetching: false,
    saveRepairs: []
}

let savedRepairReducer=(state = initialState, action: ActionsTypes):InitialStateType=>{
    switch (action.type) {
        case SET_REPAIRS: {
            return {
                ...state,
                repairs: action.repairs
            }
        }
        case SET_FETCHING: {
            if (action.isFetching != undefined) {
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
            if (action.procedure != undefined) {

                if (state.repairs) {
                    newRepairs = state.repairs.filter((repair) => {
                        // @ts-ignore
                        return repair.uin != action.procedure.uin;
                    });
                }

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
}
