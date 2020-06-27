import React from "react";
import {Button} from "react-bootstrap";
import {EmailSender} from "../../../api/api";


export default class EmailComponent extends React.Component {
    onclick = () => {
        EmailSender.sendTest();

    }
    render() {
        return (
            <>
                <Button onClick={() =>this.onclick}>Send</Button>
            </>
        );
    }
}

