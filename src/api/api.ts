import axios, {AxiosResponse} from 'axios';
import {PageType, ProcedureType, RepairType} from "../types/datatypes";

const ali="http://8.209.73.85:8080/12";
const localhost ="http://localhost:8080";
const SERVER =ali;
const GET_REPAIR_PROCEDURE_FROM_ZAKUPKI_ENDPOINT = "/goszakupki/repair/";
const SAVE_REPAIR_PROCEDURE_TO_ZAKUPKI_ENDPOINT = "/base/repair/";
const GET_ALL_SAVED_REPAIR_PROCEDURE_TO_ZAKUPKI_ENDPOINT = "/base/repair/get_all";


export const ZakupkiRepairAPI = {
    getAllNew() {
        let address = SERVER + GET_REPAIR_PROCEDURE_FROM_ZAKUPKI_ENDPOINT;
        // let sessionId = localStorage.getItem('sessionId');
        return axios.get(address,
            // {headers: {sessionId: sessionId}}
        ).then((response: AxiosResponse<Array<RepairType>>) => {
            return response.data;
        });
    },

    saveProcedure(procedure: ProcedureType) {
        let address = SERVER + SAVE_REPAIR_PROCEDURE_TO_ZAKUPKI_ENDPOINT;
        // let sessionId = localStorage.getItem('sessionId');

        return axios({
            method: 'POST',
            url: address,
            data: procedure
        }).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            })
    },

};

export const SavedRepairApi = {
    getAll(page: PageType) {
        let address = SERVER + GET_ALL_SAVED_REPAIR_PROCEDURE_TO_ZAKUPKI_ENDPOINT;
        // let sessionId = localStorage.getItem('sessionId');

        return axios({
            method: 'POST',
            url: address,
            data: page
        }).then(function (response) {
            console.log(response);
            return response.data
        })
            .catch(function (error) {
                console.log(error);
            })
    },
}
