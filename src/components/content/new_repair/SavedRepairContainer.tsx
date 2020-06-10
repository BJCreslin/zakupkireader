import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {RepairsType} from "../../../types/datatypes";
import {AppStateType} from "../../../redux/redux-store";
import SavedRepairs from "./SavedRepairs";


class SavedRepairContainer extends React.Component {
    render() {
        return (
            <>
                <SavedRepairs/>
            </>
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

const mapDispatchToProps = {}

export default compose(connect(mapStateToProps, mapDispatchToProps))(SavedRepairContainer);
