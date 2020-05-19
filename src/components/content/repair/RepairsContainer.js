import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {getRepairsFromZakupkiThunkCreator} from "../../../redux/repair-reducer";
import Repair from "./Repair";


class RepairsContainer extends React.Component {


    componentDidMount() {
        this.props.getRepairsFromZakupkiThunkCreator();
    }

    render() {
        {
            this.props.repairs.map(repair => {
                return (
                    <Repair repair={repair}/>
                )
            })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        repairs: state.repairContent.repairs
    }
}

const mapDispatchToProps = {
    getRepairsFromZakupkiThunkCreator
}

export default compose
(
    connect(mapStateToProps, mapDispatchToProps)
)
(RepairsContainer);
