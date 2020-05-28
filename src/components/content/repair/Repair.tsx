import React from "react";
import {Button, Container} from "react-bootstrap";
import {ProcedureType, RepairType} from "../../../types/datatypes";


type PropsType = {
    repair: RepairType,
    saveRepairsToZakupkiThunkCreator: (procedure: ProcedureType) => void
}

class Repair extends React.Component<PropsType> {
    successHandler = (e: any) => {

        this.props.saveRepairsToZakupkiThunkCreator({
            id: this.props.repair.id,
            needed: true,
            uin: this.props.repair.uin
        })
    }

    needlesHandler = (e: any) => {
        this.props.saveRepairsToZakupkiThunkCreator({
            id: this.props.repair.id,
            needed: false,
            uin: this.props.repair.uin
        })
    }


    render() {
        return (
            <div>
                <Container>
                    <span> {this.props.repair.id} </span>
                    <span> {this.props.repair.needed} </span>
                    <span> {this.props.repair.lawNumber} </span>
                    <span> {this.props.repair.author} </span>
                    <span> {this.props.repair.placementPhase} </span>
                    <span> {this.props.repair.posted} </span>
                    <span> {this.props.repair.updated} </span>
                    <span> {this.props.repair.initialContractprice} </span>
                    <span> {this.props.repair.name} </span>
                    <span> {this.props.repair.placementStages} </span>
                    <span> {this.props.repair.link} </span>
                    <span> {this.props.repair.uin} </span>
                    <Button variant="success" onClick={this.successHandler}>Necessary</Button>
                    <Button variant="danger" onClick={this.needlesHandler}>Needless</Button>
                    <Button variant="secondary">Secondary</Button>

                </Container>
            </div>
        )
    }
}

export default Repair
