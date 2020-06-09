import * as React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getRepairsFromZakupkiThunkCreator, saveRepairsToZakupkiThunkCreator} from "../../../redux/repair-reducer";
import Repair from "./Repair";
import {ProcedureType, RepairsType, RepairType} from "../../../types/datatypes";
import {AppStateType} from "../../../redux/redux-store";

type PropsType = {
    repairs: RepairsType
    saveRepairsToZakupkiThunkCreator: (procedure: ProcedureType) => void
    getRepairsFromZakupkiThunkCreator: () => void
}

class RepairsContainer extends React.Component <PropsType> {
    props: any;

    componentDidMount() {
        this.props.getRepairsFromZakupkiThunkCreator()
        this.props.getRepairsFromZakupkiThunkCreator();
    }

    render = () => {
        return (
            this.props.repairs.map((repair: RepairType) => {
                    return (
                        <Repair repair={repair}
                            saveRepairsToZakupkiThunkCreator={this.props.saveRepairsToZakupkiThunkCreator}/>
                    )
                }
            )
        )
    }
}

type MapStateToPropsType = {
    repairs: RepairsType
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        repairs: state.repairContent.repairs
    }
}

const mapDispatchToProps = {
    getRepairsFromZakupkiThunkCreator,
    saveRepairsToZakupkiThunkCreator
}

export default compose(connect(mapStateToProps, mapDispatchToProps))
(RepairsContainer);
