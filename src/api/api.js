import * as axios from 'axios';

const SERVER = "http://8.209.73.85:8080/12";
const GET_REPAIR_PROCEDURE_FROM_ZAKUPKI_ENDPOINT = "/goszakupki/repair/";
const SAVE_REPAIR_PROCEDURE_TO_ZAKUPKI_ENDPOINT = "/goszakupki/repair/";


export const ZakupkiRepairAPI = {
    getAllNew() {
        let address = SERVER + GET_REPAIR_PROCEDURE_FROM_ZAKUPKI_ENDPOINT;
        // let sessionId = localStorage.getItem('sessionId');
        return axios.get(address,
            // {headers: {sessionId: sessionId}}
        ).then(response => {
            return response.data;
        });
    },

    saveProcedure(procedure) {
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


