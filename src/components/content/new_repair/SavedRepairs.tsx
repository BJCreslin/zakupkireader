import React from "react";
import {SaveRepairType} from "../../../types/datatypes";
import {Container} from "react-bootstrap";

type PropsType = {
    saveRepair: SaveRepairType
}

class SavedRepairs extends React.Component <PropsType> {
    render() {
        return (
            <>
                <Container>
                    <span>{this.props.saveRepair.deadline}</span>
                    <span>{this.props.saveRepair.name}</span>
                    <span>{this.props.saveRepair.uin}</span>
                </Container>
            </>
        );
    }

}

export default SavedRepairs;
