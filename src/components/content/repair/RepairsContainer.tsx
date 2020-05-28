import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {getRepairsFromZakupkiThunkCreator, saveRepairsToZakupkiThunkCreator} from "../../../redux/repair-reducer";
import Repair from "./Repair";
import {ProcedureType, RepairType} from "../../../types/datatypes";
import {AppStateType} from "../../../redux/redux-store";

type PropsType = {
    repairs: Array<RepairType>
    saveRepairsToZakupkiThunkCreator: (procedure: ProcedureType) => void
}

class RepairsContainer extends React.Component <PropsType> {
    componentDidMount() {
        // @ts-ignore
        this.props.getRepairsFromZakupkiThunkCreator();
    }

    render = () => {
        return (
            this.props.repairs.map((repair: RepairType) => {
                    return (
                        <Repair
                            repair={repair}
                            saveRepairsToZakupkiThunkCreator={this.props.saveRepairsToZakupkiThunkCreator}
                        />
                    )
                }
            )
        )
    }
}


const mapStateToProps = (state: AppStateType) => {
    return {
        repairs: state.repairContent.repairs
    }
}

const mapDispatchToProps = {
    getRepairsFromZakupkiThunkCreator,
    saveRepairsToZakupkiThunkCreator
}

export default compose
(
    connect(mapStateToProps, mapDispatchToProps)
)
(RepairsContainer);
