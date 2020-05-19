import {ZakupkiRepairAPI} from "../api/api";

const SET_REPAIRS = "SET_REPAIRS";
const SET_FETCHING = "SET_FETCHING";

const initialState = {
    isFetching: false
}

let repairReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPAIRS: {
            return {
                ...state
            }
        }
        case SET_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: {
            return state;
        }

    }
}
export default repairReducer;

export const setRepairs = (repairs) => ({type: SET_REPAIRS, repairs});
export const setToggleFetching = (isFetching) => ({type: SET_FETCHING, isFetching: isFetching});


export const getRepairsFromZakupkiThunkCreator = (task) => {
    return (dispatch) => {
        dispatch(setToggleFetching(true));
        ZakupkiRepairAPI.getAllNew().then(data => {
            dispatch(setRepairs(data));
            dispatch(setToggleFetching(false));
        });
    }
};
