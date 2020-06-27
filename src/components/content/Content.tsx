import React from "react";
import Home from "./home/Home";
import {Route} from "react-router-dom";
import RepairsContainer from "./repair/RepairsContainer";
import SavedRepairContainer from "./new_repair/SavedRepairContainer";
import EmailComponent from "./email/EmailComponent";

class Content extends React.Component {
    render() {
        return (
            <>
                <Route path="/" render={() => <Home/>}/>
                <Route path="/repair" render={() => <RepairsContainer/>}/>
                <Route path="/newrepair" render={() => <SavedRepairContainer/>}/>
                <Route path="/email" render={() => <EmailComponent/>}/>

            </>

        )
    }
}

export default Content;
