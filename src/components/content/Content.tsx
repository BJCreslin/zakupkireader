import React from "react";
import Home from "./home/Home";
import {Route} from "react-router-dom";
import RepairsContainer from "./repair/RepairsContainer";

class Content extends React.Component {
    render() {
        return (
            <>
                <Route path="/" render={() => <Home/>}/>
                <Route path="/repair" render={() => <RepairsContainer/>}/>
            </>

        )
    }
}

export default Content;
