import * as React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getRepairsFromZakupkiThunkCreator, saveRepairsToZakupkiThunkCreator} from "../../../redux/repair-reducer";
import Repair from "./Repair";
import {ProcedureType, RepairType} from "../../../types/datatypes";
import {AppStateType} from "../../../redux/redux-store";

type PropsType = {
    repairs: Array<RepairType>
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
                        <Repair
                            repair={repair}
                            saveRepairsToZakupkiThunkCreator={this.props.saveRepairsToZakupkiThunkCreator}></Repair>
                    )
                }
            )
        )
    }
}

type MapStateToPropsType={
    repairs:RepairType[]|null|undefined
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
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
