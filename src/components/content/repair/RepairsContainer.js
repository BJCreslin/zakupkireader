import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {getRepairsFromZakupkiThunkCreator, saveRepairsToZakupkiThunkCreator} from "../../../redux/repair-reducer";
import Repair from "./Repair";


class RepairsContainer extends React.Component {


    componentDidMount() {
        this.props.getRepairsFromZakupkiThunkCreator();
    }

    render = () => {
        return (

            this.props.repairs.map(repair => {
                return (
                    <Repair repair={repair}
                            saveRepairsToZakupkiThunkCreator={this.props.saveRepairsToZakupkiThunkCreator}/>
                )
            })
        )

    }
}

const mapStateToProps = (state) => {
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
