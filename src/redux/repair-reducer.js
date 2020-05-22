import {ZakupkiRepairAPI} from "../api/api";

const SET_REPAIRS = "SET_REPAIRS";
const SET_FETCHING = "SET_FETCHING";
const DELETE_REPAIR_BY_UIN = "DELETE_REPAIR_BY_UIN";

const initialState = {
    isFetching: false,
    repairs: []
}

let repairReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPAIRS: {
            return {
                ...state,
                repairs: action.repairs
            }
        }
        case SET_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case DELETE_REPAIR_BY_UIN: {
            let newRepairs = state.repairs.filter( (repair)=> {
                return repair.uin !== action.procedure.uin
            });

           // let newRepairs =state.repairs.splice(state.repairs.findIndex(item => item.uin === action.procedure.uin), 1)

            return {
                ...state,
                repairs: newRepairs
            }
        }


        default: {
            return state;
        }

    }
}
export default repairReducer;

export const setRepairs = (repairs) => ({type: SET_REPAIRS, repairs});
export const deleteRepairs = (procedure) => ({type: DELETE_REPAIR_BY_UIN, procedure});

export const setToggleFetching = (isFetching) => ({type: SET_FETCHING, isFetching: isFetching});


export const getRepairsFromZakupkiThunkCreator = () => {
    return (dispatch) => {
        dispatch(setToggleFetching(true));
        ZakupkiRepairAPI.getAllNew().then(data => {
            dispatch(setRepairs(data));
            dispatch(setToggleFetching(false));
        });
    }
};
export const saveRepairsToZakupkiThunkCreator = (procedure) => {
    return (dispatch) => {
        dispatch(setToggleFetching(true));
        ZakupkiRepairAPI.saveProcedure(procedure).then(data => {
            dispatch(deleteRepairs(procedure));
            dispatch(setToggleFetching(false));
        });
    }
};


