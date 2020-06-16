import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {PageType, SaveRepairType, SaveRepairTypes} from "../../../types/datatypes";
import {AppStateType} from "../../../redux/redux-store";
import SavedRepairs from "./SavedRepairs";
import {getSavedRepairsFromZakupkiThunkCreator} from "../../../redux/savedrepair-reducer";


class SavedRepairContainer extends React.Component<any> {
    props:any;

    componentDidMount() {
        alert("gffgh");
        this.props.getSavedRepairsFromZakupkiThunkCreator(this.props.page);
    }

    render() {

        return (

                this.props.saveRepairs.map((saveRep: SaveRepairType) => {
                    return (
                        <SavedRepairs
                            saveRepair={saveRep}/>
                    )
                })


        )
    }
}

type MapStateToPropsType = {
    saveRepairs: SaveRepairTypes,
    page: PageType
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        saveRepairs: state.savedRepairContent.saveRepairs,
        page: state.savedRepairContent.page
    }
}

const mapDispatchToProps = {
    getSavedRepairsFromZakupkiThunkCreator
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(SavedRepairContainer);
